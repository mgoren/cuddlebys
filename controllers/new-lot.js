Cuddlebys.NewLotController = Ember.Controller.extend({
  needs: ['auction'],
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('name')
      });
      this.set('name', null);
      newLot.save();

      var auctionController = this.get('controllers.auction');
      var auction = this.get('controllers.auction.model');

      auction.get('lots').pushObject(newLot);
      auction.save();

      auctionController.set('notAddingLot', true);

      this.transitionToRoute('auction', auction);
    }
  }
});
