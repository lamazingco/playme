const { app, BrowserWindow, Menu, webContents } = require('electron');
const path = require('path');
const windowStateManager = require('electron-window-state')
const mainMenu = require('./main/MainMenu.js')
const shortcuts = require('./main/Shortcuts.js')

let mainWindow;

app.on('ready', init)

function init () {
  createWindow()
  createMenu()
  registerGlobalShortcuts()
}

function createWindow () {
  let mainWindowState = windowStateManager({
    defaultWidth: 1024,
    defaultHeight: 768
  })

  mainWindow = new BrowserWindow({
    width: mainWindowState.width,
    height: mainWindowState.height,
    x: mainWindowState.x,
    y: mainWindowState.y,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: '#181818',
    icon: path.join(__dirname, 'assets/icons/png/64x64.png')
  });

  mainWindowState.manage(mainWindow)

  mainWindow.loadURL('https://music.youtube.com');
  //mainWindow.openDevTools({ mode: 'bottom' });
}

function createMenu() {
  mainMenu.createMenu(mainWindow.webContents, app);
}

function registerGlobalShortcuts() {
  shortcuts.registerGlobalShortcuts(mainWindow.webContents);
}

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow == null) {
    init()
  }
})
