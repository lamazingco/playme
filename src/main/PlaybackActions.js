
function playPause(webContents) {
	webContents.executeJavaScript(`document.getElementsByClassName('play-pause-button')[0].click()`);
}

function next(webContents) {
	webContents.executeJavaScript(`document.getElementsByClassName('next-button')[0].click()`)
}

function previous(webContents) {
	webContents.executeJavaScript(`document.getElementsByClassName('previous-button')[0].click()`)
}

module.exports = {
  playPause,
  next,
  previous
}
