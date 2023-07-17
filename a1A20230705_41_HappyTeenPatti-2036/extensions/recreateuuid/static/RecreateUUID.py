# !/usr/bin/python3
import os
import re
import sys
import uuid
import base64


def getAllFiles(root: str):
    files = []
    dirs = [root]
    curIndex = 0
    while curIndex < len(dirs):
        curRoot = dirs[curIndex]
        curList = os.listdir(curRoot)
        for info in curList:
            fullpath = os.path.join(curRoot, info)
            if os.path.isfile(fullpath):
                files.append(fullpath)
            elif os.path.isdir(fullpath):
                dirs.append(fullpath)

        curIndex += 1

    return files


def getUUID():
    return str(uuid.uuid4())
    pass


def compressUUID(value: str, minimum=True):
    temp = value.replace("-", "")
    if not re.match("^[0-9a-fA-f]{32}$", temp):
        return value

    b64KeyCode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    i = 2
    if not minimum:
        i = 5

    length = len(temp)
    head = temp[0:i]
    b64Chars = []
    while i < length:
        hexVal1 = int(temp[i], 16)
        hexVal2 = int(temp[i + 1], 16)
        hexVal3 = int(temp[i + 2], 16)
        b64Chars.append(b64KeyCode[(hexVal1 << 2) | (hexVal2 >> 2)])
        b64Chars.append(b64KeyCode[((hexVal2 & 3) << 4) | hexVal3])
        i += 3

    return head + "".join(b64Chars)


def decompressUUID(compress: str):
    length = len(compress)
    if length != 23 and length != 22:
        return compress

    b64KeyCode = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    asciiTo64 = [0 for i in range(128)]
    for i in range(64):
        asciiTo64[ord(b64KeyCode[i])] = i

    hexChars = []
    start = 2
    if length == 23:
        start = 5
    for i in range(start, length, 2):
        lhs = asciiTo64[ord(compress[i])]
        rhs = asciiTo64[ord(compress[i + 1])]
        hexChars.append("{0:x}".format(lhs >> 2))
        hexChars.append("{0:x}".format(((lhs & 3) << 2) | (rhs >> 4)))
        hexChars.append("{0:x}".format((rhs & 0xf)))
    result = compress[0:start] + "".join(hexChars)
    return str(uuid.UUID(result))


def compressUUID1(value: str):
    value = value.replace("-", "")
    bts = uuid.UUID(value).bytes
    b64 = base64.b64encode(bts)
    b64 = b64.rstrip(b"=\n")
    return b64.decode()


def decompressUUID1(compress: str):
    compress = compress + "=="
    value = base64.b64decode(compress)
    return str(uuid.UUID(bytes=value))


def recreateUUID(root: str):
    rootPath = os.path.realpath(root)
    print(rootPath)
    allFiles = getAllFiles(rootPath)
    uuidmap = {}
    for meta in allFiles:
        if not meta.endswith(".meta"):
            continue
        try:
            file = open(meta, "r", encoding="utf-8")
            content = file.read()
            file.close()
        except Exception as e:
            print(e)
            continue
        matchs = re.findall("\"([0-9A-Za-z-]{36})\"", content)
        if matchs:
            for uuid in matchs:
                if uuid not in uuidmap:
                    newuuid = getUUID()
                    uuidmap[uuid] = newuuid
                    compress = compressUUID(uuid)
                    uuidmap[compress] = compressUUID(newuuid)
                    compress = compressUUID(uuid, False)
                    uuidmap[compress] = compressUUID(newuuid, False)

    for path in allFiles:
        try:
            file = open(path, "r", encoding="utf-8")
            content = file.read()
            file.close()
        except Exception as e:
            print(e, path)
            continue

        hasChange = False
        for key, value in uuidmap.items():
            if content.find(key) != -1:
                hasChange = True
                content = content.replace(key, value)
                print(f"success replace:{path},{key} -----> {value}")

        if hasChange:
            file = open(path, "w", encoding="utf-8")
            file.write(content)
            file.close()

    pass


if __name__ == "__main__":
    root = r""
    if len(sys.argv) >= 2:
        root = sys.argv[1]

    recreateUUID(root)
