
let webContents;

function PlaybackActions(webContents) {
	this.webContents = webContents;
}

PlaybackActions.prototype.playPause = function() {
	this.webContents.executeJavaScript(`document.getElementsByClassName('play-pause-button')[0].click()`);
}

PlaybackActions.prototype.next = function() {
	this.webContents.executeJavaScript(`document.getElementsByClassName('next-button')[0].click()`)
}

PlaybackActions.prototype.previous = function() {
	this.webContents.executeJavaScript(`document.getElementsByClassName('previous-button')[0].click()`)
}

module.exports = PlaybackActions
