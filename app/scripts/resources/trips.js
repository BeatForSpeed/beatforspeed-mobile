var Trips = $resource('/trips/:tripId', {tripId:'@id'});
var trip = User.get({userId:123}, function() {
  user.abc = true;
  user.$save();
});
