// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  }, 

  playFirst: function() {
    this.at(0).play();
    this.remove(this.at(0));
  }
});