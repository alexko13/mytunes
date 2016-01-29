// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div><audio controls autoplay /></div>',

  template: _.template('<p>Current Song: <%= artist %> <%= title %></p>'),

  initialize: function() {
    this.$el.children(":first").on('ended', function() {
      this.$el.children().last().remove();
      this.model.ended();
    }.bind(this));
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    this.$el.children(":first").attr('src', this.model ? this.model.get('url') : '');
    return this.$el.append(this.template(this.model.attributes));
  }
});