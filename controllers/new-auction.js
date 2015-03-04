Cuddlebys.NewAuctionController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newAuction = this.store.createRecord('auction',{
        title: this.get('title')
      });
      this.set('title', null)
      newAuction.save();
      this.transitionToRoute('auctions');
    }
  }
});
