Cuddlebys.Router.map(function() {
  this.resource('auctions', {path: '/'}, function() {
    this.resource('new-auction');
  });
  this.resource('auction', {path: ':auction_id'}, function() {
    this.resource('new-lot');
  });
});
