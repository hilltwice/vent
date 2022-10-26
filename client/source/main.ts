import {app, BrowserWindow} from "electron"

app.whenReady().then(() => {
  new BrowserWindow()

  app.on("window-all-closed", () => {
    app.exit()
  })
})
