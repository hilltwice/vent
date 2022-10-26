import {contextBridge, ipcRenderer} from "electron"

contextBridge.exposeInMainWorld("electron", {
  sendMessage(channel: string, message: string) {
    ipcRenderer.send(channel, message)
  },
})
