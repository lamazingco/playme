
const windowStateManager = require('electron-window-state')
const { BrowserWindow } = require('electron')
const path = require('path')

let mainWindowState;

class MainWindow extends BrowserWindow {

  constructor() {
    mainWindowState = windowStateManager(getWindowDefaults())

    super({
      width: mainWindowState.width,
      height: mainWindowState.height,
      x: mainWindowState.x,
      y: mainWindowState.y,
      minWidth: 800,
      minHeight: 600,
      backgroundColor: '#181818',
      icon: path.join(__dirname, 'assets/icons/png/64x64.png')
    });

    mainWindowState.manage(this)
    //this.openDevTools({ mode: 'bottom' });

    this.loadURL('https://music.youtube.com')

  }
}

function getWindowDefaults() {
  return { defaultWidth: 1024, defaultHeight: 768 }
}

module.exports = MainWindow
