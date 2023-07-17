"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.open = exports.unload = exports.load = exports.methods = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
/**
 * @en Registration method for the main process of Extension
 * @zh 为扩展的主进程的注册方法
 */
exports.methods = {
    run: open
};
/**
 * @en Hooks triggered after extension loading is complete
 * @zh 扩展加载完成后触发的钩子
 */
function load() {
    log("loaded");
}
exports.load = load;
/**
 * @en Hooks triggered after extension uninstallation is complete
 * @zh 扩展卸载完成后触发的钩子
 */
function unload() { }
exports.unload = unload;
function log(...data) {
    console.log("[recreate uuid]", ...data);
}
async function open() {
    log("open select");
    let result = await Editor.Dialog.select({ title: Editor.I18n.t("recreateuuid.selecttitle"), type: "directory" });
    if (result.canceled == true || result.filePaths == null || result.filePaths.length == 0) {
        return;
    }
    let msg = Editor.I18n.t("recreateuuid.warningMsg");
    msg += "\n\n";
    msg += Editor.I18n.t("recreateuuid.yourSelect") + ":\n";
    msg += result.filePaths.join("\n");
    let warn = await Editor.Dialog.warn(msg, {
        title: Editor.I18n.t("recreateuuid.warningTitle"),
        buttons: [Editor.I18n.t("recreateuuid.warningBtnCancel"), Editor.I18n.t("recreateuuid.warningBtnSure")]
    });
    if (warn.response != 1) { //click cancel or close
        return;
    }
    recreate(result.filePaths);
}
exports.open = open;
function recreate(roots) {
    log("start recreate");
    let reg_uuid = /[0-9A-Fa-f-]{36}/g;
    for (let root of roots) {
        let allFiles = getAllFiles(root);
        let uuidMap = [];
        //make uuid map
        for (let file of allFiles) {
            if (!file.endsWith(".meta")) {
                continue;
            }
            let content = "";
            try {
                content = fs_1.default.readFileSync(file, "utf-8");
            }
            catch (e) {
                continue;
            }
            let matchs = content.match(reg_uuid);
            if (!matchs || matchs.length <= 0) {
                continue;
            }
            for (let uuid of matchs) {
                if (uuidMap.indexOf(uuid) != -1) {
                    continue;
                }
                let newUuid = Editor.Utils.UUID.generate();
                newUuid = Editor.Utils.UUID.decompressUUID(newUuid);
                uuidMap.push(uuid, newUuid);
                let umin = Editor.Utils.UUID.compressUUID(uuid, true);
                let nmin = Editor.Utils.UUID.compressUUID(newUuid, true);
                uuidMap.push(umin, nmin);
                let umax = Editor.Utils.UUID.compressUUID(uuid, false);
                let nmax = Editor.Utils.UUID.compressUUID(newUuid, false);
                uuidMap.push(umax, nmax);
            }
        }
        //replace uuid
        for (let file of allFiles) {
            let content = "";
            try {
                content = fs_1.default.readFileSync(file, "utf-8");
            }
            catch (e) {
                continue;
            }
            let hasChange = false;
            for (let i = 0; i < uuidMap.length; i += 2) {
                while (content.indexOf(uuidMap[i]) != -1) {
                    hasChange = true;
                    content = content.replace(uuidMap[i], uuidMap[i + 1]);
                    log(`replace:${file}....${uuidMap[i]}--->${uuidMap[i + 1]}`);
                }
            }
            if (hasChange) {
                fs_1.default.writeFileSync(file, content);
            }
        }
    }
    Editor.Message.request("asset-db", "reimport-asset", "db://assets");
}
function getAllFiles(root) {
    let dirs = [root];
    let files = [];
    let curDirIndex = 0;
    while (curDirIndex < dirs.length) {
        let curDir = dirs[curDirIndex];
        let curFiles = fs_1.default.readdirSync(curDir);
        for (let f of curFiles) {
            let fullPath = path_1.default.join(curDir, f);
            let stat = fs_1.default.statSync(fullPath);
            if (stat.isFile()) {
                files.push(fullPath);
            }
            else if (stat.isDirectory()) {
                dirs.push(fullPath);
            }
        }
        curDirIndex++;
    }
    return files;
}
