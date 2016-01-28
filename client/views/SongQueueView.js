// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>');
  }

});
