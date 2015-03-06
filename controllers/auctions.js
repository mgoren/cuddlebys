Cuddlebys.AuctionsController = Ember.Controller.extend({
  lotID: 0,
  currentLot: function() {
    return posts[this.lotID];
  }.property('lotID'),
  actions: {
    nextLot: function() {
      this.set('lotID', this.lotID+1);
      if(this.lotID>posts.length - 1) {this.set('lotID', 0);}
    },
    previousLot: function() {
      this.set('lotID', this.lotID-1);
      if(this.lotID < 0) {this.set('lotID', posts.length -1);}
    },
    debug: function() {
      debugger;
    }

  }
});
