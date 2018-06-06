
describe('The registration number Widget Function', function(){

it('should return true if registration matches the given regnumber for Cape town', function(){

  var selectPlate = RegFactory();
assert.equal(selectPlate.addedNumbers('CA 980 631'),true );
});

it('should return true if registration matches the given regnumber for Bellville', function(){
var selectPlate = RegFactory();

assert.equal(selectPlate.addedNumbers('CY 125 876'), true);
  });
it('should return true if registration matches the given regnumber for Paarl', function(){
var selectPlate = RegFactory();

assert.equal(selectPlate.addedNumbers('CJ 125 567'), true);
  })
it('should return true if registration matches the given regnumber for Goerge', function(){
var selectPlate = RegFactory();

assert.equal(selectPlate.addedNumbers('CAW 125 987'), true);
  });
it('should return true if registration matches the given regnumber for Worcester', function(){
var selectPlate = RegFactory();

assert.equal(selectPlate.addedNumbers('CL 125 34'), true);
});

it('should return false if the registration does not match the given regnumber', function(){
var selectPlate = RegFactory();

assert.equal(selectPlate.addedNumbers('CAA 125 123'), false);
  });

it('should map registrations from the given regnumbers only', function(){
var selectPlate = RegFactory();

selectPlate.addedNumbers("CY 156 234");
selectPlate.addedNumbers("CK 124 873");
selectPlate.addedNumbers("CJ 432 23");
selectPlate.addedNumbers("LN 253 7754");

assert.deepEqual(selectPlate .mapRegistry(), ["CY 156 234","CJ 432 23"])
});


it('Should return registrations and return All in all towns ', function(){
var selectPlate = RegFactory();

selectPlate.addedNumbers('CAW 657 333');
selectPlate.addedNumbers('CY 34 655');
selectPlate.addedNumbers('CJ 5443');
selectPlate.addedNumbers('CL 532 55');
assert.deepEqual(selectPlate.mapRegistry('ALL '), ['CAW 657 333', 'CY 34 655', 'CJ 5443', 'CL 532 55'])

});
it('should return CA registrations only, if filtered for Cape Town', function(){
var selectPlate = RegFactory();

selectPlate.addedNumbers("CA 754 342");
selectPlate.addedNumbers("CA 6734");
selectPlate.addedNumbers("CAW 2659");
assert.deepEqual(selectPlate.townFilter('CA'), ['CA 754 342','CA 6734','CAW 2659'])
});
});
