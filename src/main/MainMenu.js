const { Menu } = require('electron');
let playbackActions = require('./PlaybackActions.js')
let appActions = require('./AppActions.js')

function createMenu(webContents, app) {
  const topLevelItems = [
    {
      label: 'Application',
      submenu: [
        {
          label: 'Quit',
          accelerator: 'CmdOrCtrl+Q',
          click() {
            appActions.quitApp(app);
          }
        }
      ]
    },
    {
      label: 'Actions',
      submenu: [
        {
          label: 'play/Pause',
          click() {
          	 playbackActions.playPause(webContents);
          }
        },
        {
          label: 'Next',
          click() {
          	 playbackActions.next(webContents);
          }
        },
        {
          label: 'Previous',
          click() {
          	 playbackActions.previous(webContents);
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(topLevelItems));
}

module.exports.createMenu = createMenu;
