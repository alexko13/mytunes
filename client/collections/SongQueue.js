// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  }, 

  playFirst: function() {
    //console.log('playFirst called');
    this.at(0).play();
  }

});