// Cuddlebys.NewLotController = Ember.Controller.extend({
//   actions: {
//     save: function() {
//       var newLot = this.store.createRecord('lot',{
//         name: this.get('name')
//       });
//       newLot.save();
//
//       debugger;
//
//       var controller = this;
//       newLot.get('auction').then(function(auction) {
//         auction.save();
//       });
//
//
//     }
//   }
// });

Cuddlebys.NewLotController = Ember.Controller.extend({
  needs: ['auction'],
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('name')
      });
      newLot.save();

      var auction = this.get('controllers.auction.model');
      
      auction.get('lots').pushObject(newLot);
      auction.save();

      this.transitionToRoute('auction', auction.id);
    }
  }
});
