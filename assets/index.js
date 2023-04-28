
const video = document.querySelector("video");
const button = document.querySelector("button");
// función madre
function MediaPlayer(file){
  this.media = file.el
}

    // función extendida (instancia)
MediaPlayer.prototype.play = function() {
      if(this.media.paused){
  this.media.play();
      } else {
  this.media.pause()
}
    };

// desestructuración de objetos (objeto)
const  player = new  MediaPlayer( {el :video})

    // disparador
    button.onclick = () => player.play();
