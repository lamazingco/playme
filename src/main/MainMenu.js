const { Menu } = require('electron');

function createMenu(playbackActions) {
  const topLevelItems = [
    {
      label: 'Application',
      submenu: [
        {
          label: 'Toggle Developer Tools',
          accelerator: (function() {
            if (process.platform === 'darwin')
              return 'Alt+Command+I';
            else
              return 'Ctrl+Shift+I';
          })(),
          click: function(item, focusedWindow) {
            if (focusedWindow)
              focusedWindow.toggleDevTools();
          }
        },
        {
          type: 'separator'
        },
        {
          label: 'Quit PlayMe',
          accelerator: 'CmdOrCtrl+Q',
          role: 'quit'
        }
      ]
    },
    {
      label: 'Actions',
      submenu: [
        {
          label: 'play/Pause',
          click() {
          	 playbackActions.playPause();
          }
        },
        {
          label: 'Next',
          click() {
          	 playbackActions.next();
          }
        },
        {
          label: 'Previous',
          click() {
          	 playbackActions.previous();
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(topLevelItems));
}

module.exports.createMenu = createMenu;
