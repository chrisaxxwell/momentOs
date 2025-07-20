const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
   const win = new BrowserWindow({
      width: 1920,
      height: 1020,
      hasShadow: false,
      title: false,
      frame: false,
      webPreferences: {
         contextIsolation: false,
      },
   });

   win.loadURL('http://localhost:3000');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
   if (process.platform !== 'darwin') app.quit();
});