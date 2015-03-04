Cuddlebys.NewAuctionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newAuction = this.store.createRecord('auction',{
        title: this.get('title')
      });
      newAuction.save();
      this.transitionToRoute('auctions');
    }
  }
});
