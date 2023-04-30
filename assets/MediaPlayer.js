function MediaPlayer(config) {
  this.media = config.el;
}

MediaPlayer.prototype.play = function () {
  // if(this.media.paused){
  //   this.media.play();
  // } else {
  //   this.media.pause()
  // }
  // o podemos usar lo siguiente:
  this.media.paused ? this.media.play() : this.media.pause();
};

export default MediaPlayer;
/* // función madre
Otra manera..
class MediaPlayer {
  constructor(file) {
    this.media = file.el;
  }
  // función extendida (instancia)
  play() {
    // if (this.media.paused) {
    //   this.media.play();
    // } else {
    //   this.media.pause()
    // }
    this.media.paused ? this.media.play() : this.media.pause();
  }
}
*/
