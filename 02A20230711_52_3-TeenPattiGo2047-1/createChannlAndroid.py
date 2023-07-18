#coding=utf-8
#!/usr/bin/python
#python 3.11.4


import os
import os.path
import shutil
from optparse import OptionParser
# from PIL import Image

buildPath = os.getcwd() + "/build/android/proj/"
nativePath = os.getcwd() + "/native/engine/android/"


#修改libservice的类名
def editLibserviceActivity():
    
    global libServiceDir
    global libServiceName

    

    libServiceDir = ""
    while True:
        libServiceDir = input("请输入libServiceDir目录:")
        if libServiceDir.count(".") !=2 or libServiceDir.count(" ") > 0:
            print("libServiceDir目录输入错误，请重新输入")
        else:
            break

    libServiceName = input("请输入libService Activity名字:")

    libServicePathList = libServiceDir.split(".")

    file_data = ""
    with open(buildPath + "/libservice/AndroidManifest.xml", "r", encoding="utf-8") as f:
        for line in f:
            if "com.cocos.service" in line:
                line = line.replace("com.cocos.service", libServiceDir)
            file_data += line

    with open(buildPath + "/libservice/AndroidManifest.xml", "w", encoding="utf-8") as f:
        f.write(file_data)

    tempLibPath = buildPath + "libservice/"

    os.rename(buildPath + "libservice/src/com", buildPath + "libservice/src/" + libServicePathList[0])
    os.rename(buildPath + "libservice/src/" + libServicePathList[0] + "/cocos" , buildPath + "libservice/src/" + libServicePathList[0] + "/" + libServicePathList[1])
    os.rename(buildPath + "libservice/src/" + libServicePathList[0] + "/" + libServicePathList[1] + "/service" , buildPath + "libservice/src/" + libServicePathList[0] + "/" + libServicePathList[1] + "/" + libServicePathList[2])

    os.rename(buildPath + "libservice/src/" + libServicePathList[0] + "/" + libServicePathList[1] + "/" + libServicePathList[2] + "/SDKWrapper.java" , buildPath + "libservice/src/" + libServicePathList[0] + "/" + libServicePathList[1] + "/" + libServicePathList[2] + "/" + libServiceName + ".java")

    file_data = ""
    with open(buildPath + "libservice/src/" + libServicePathList[0] + "/" + libServicePathList[1] + "/" + libServicePathList[2] + "/" + libServiceName + ".java", "r", encoding="utf-8") as f:
        for line in f:
            if "com.cocos.service" in line:
                line = line.replace("com.cocos.service", libServiceDir)
            if "SDKWrapper" in line:
                line = line.replace("SDKWrapper", libServiceName)
            file_data += line

    with open(buildPath + "libservice/src/" + libServicePathList[0] + "/" + libServicePathList[1] + "/" + libServicePathList[2] + "/" + libServiceName + ".java", "w", encoding="utf-8") as f:
        f.write(file_data)

    return

#修改类名
def editActivity():
    global activityPath

    activityDir = ""
    while True:
        activityDir = input("请输入Activity目录:")
        if activityDir.count(".") !=2 or activityDir.count(" ") > 0:
            print("Activity目录输入错误，请重新输入")
        else:
            break

    activityName = input("请输入Activity名字:")
    # applicationName = input("请输入application名字:")
    # print("开始修改新渠道类名：" + activityDir + " ++ " + activityName + " ++ " + applicationName)
    print("开始修改新渠道类名：" + activityDir + " ++ " + activityName )

    #修改类名文件夹
    pathList = activityDir.split(".")
    os.rename(nativePath + "/app/src/com", nativePath + "/app/src/" + pathList[0])
    os.rename(nativePath + "/app/src/" + pathList[0] + "/cocos" , nativePath + "/app/src/" + pathList[0] + "/" + pathList[1])
    os.rename(nativePath + "/app/src/" + pathList[0] + "/" + pathList[1] + "/game", nativePath + "/app/src/" + pathList[0] + "/" + pathList[1] + "/" + pathList[2])

    #修改AndoridManifest.xml
    file_data = ""
    with open(nativePath + "/app/AndroidManifest.xml", "r", encoding="utf-8") as f:
        for line in f:
            if "com.cocos.game" in line:
                line = line.replace("com.cocos.game", activityDir)
            if "AppActivity" in line:
                line = line.replace("AppActivity", activityName)
            # if "MyApp" in line:
            #     line = line.replace("MyApp", applicationName)
            file_data += line

    with open(nativePath + "/app/AndroidManifest.xml", "w", encoding="utf-8") as f:
        f.write(file_data)

    actPath = nativePath + "/app/src/" + pathList[0] + "/" + pathList[1] + "/" + pathList[2]
    activityPath = actPath + "/" + activityName + ".java"

    #修改 act和app 文件名
    os.rename(actPath + "/AppActivity.java", actPath + "/" + activityName + ".java")
    # os.rename(actPath + "/MyApp.java", actPath + "/" + applicationName + ".java")

    for root, dirs, files in os.walk(actPath):
        if files:
            for name in files:
                if name.endswith(".java"):
                    file_data = ""
                    with open(root + "/" + name, "r", encoding="utf-8") as f:
                        for line in f:
                            if "com.cocos.game" in line:
                                line = line.replace("com.cocos.game", activityDir)
                            elif "AppActivity" in line:
                                line = line.replace("AppActivity", activityName)
                            # elif "MyApp" in line:
                            #     line = line.replace("MyApp", applicationName)
                            elif "com.cocos.service.SDKWrapper" in line:
                                line = line.replace("com.cocos.service.SDKWrapper", libServiceDir + "." + libServiceName)
                            elif "SDKWrapper" in line:
                                line = line.replace("SDKWrapper", libServiceName)

                            file_data += line

                    with open(root + "/" + name, "w", encoding="utf-8") as f:
                        f.write(file_data)
    return 1

#更换icon
def switchIcon():

    newIconPath = input("请拖入渠道" + "icon文件:")
    #修改icon尺寸并依次替换
    dirNames = ["mipmap-hdpi", "mipmap-mdpi", "mipmap-xhdpi", "mipmap-xxhdpi", "mipmap-xxxhdpi"]
    iconSizes = [72, 48, 96, 144, 192]

    newIconPath = newIconPath.replace( '\\', '/')

    for index in range(len(dirNames)):
        im = Image.open(newIconPath)
        out = im.resize((iconSizes[index], iconSizes[index]) , Image.LANCZOS)
        print(nativePath + "/res/" + dirNames[index] + "/ic_launcher.png")
        out.save(nativePath + "/res/" + dirNames[index] + "/ic_launcher.png")
        
    return

def main():

    
    global dirName
    global channlNumber
    
    print ("===============渠道安卓工程修改工具(A包)v1.0.0=================")
    editLibserviceActivity()
    #修改类名
    editActivity()

    # #替换icon
    # # switchIcon()
    # print("icon替换完成")

    # #替换app Name
    # appName = input("请输入游戏名:")
    # file_data = ""
    # with open(nativePath + "/res/values/strings.xml", "r", encoding="utf-8") as f:
    #     for line in f:
    #         if "app_name" in line:
    #             line = '    <string name="app_name" translatable="false">' + appName + '</string>'
    #         file_data += line

    # with open(nativePath + "/res/values/strings.xml", "w", encoding="utf-8") as f:
    #     f.write(file_data)

  
    

    input("派生完成，输入任意键退出...")

    return True

# -------------- main --------------

if __name__ == '__main__':
    main()