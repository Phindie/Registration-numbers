
describe('The registration number Widget Function', function(){

it('should return true if registration matches the given regnumber for Cape town', function(){

  var selectPlate = FactoryNum();
assert.equal(selectPlate.addedNumbers('CA 980 631'),true );
});

it('should return true if registration matches the given regnumber for Bellville', function(){
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('CY 125 876'), true);
  });
it('should return true if registration matches the given regnumber for Paarl', function(){
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('CJ 125 567'), true);
  })
it('should return true if registration matches the given regnumber for Goerge', function(){
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('CAW 125 987'), true);
  });
it('should return true if registration matches the given regnumber for Worcester', function(){
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('CL 125 34'), true);
  });
it('should return true if registration matches the given regnumber for Pretoria', function(){
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('PA 125 345'), true);
  });

it('should return false if the registration does not match the given regnumber', function(){
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('PAA 125 123'), false);
  });

it('should map registrations from the given regnumbers only', function(){
var selectPlate = FactoryNum();

selectPlate.addedNumbers("CA 437 22");
selectPlate.addedNumbers("LN 253 7754");

assert.deepEqual(selectPlate.mapRegistry(), ['CA 437 22'])
var selectPlate = FactoryNum();

selectPlate.addedNumbers("CY 156 234");
selectPlate.addedNumbers("CK 124 873");
selectPlate.addedNumbers("CJ 432 23");

assert.deepEqual(selectPlate .mapRegistry(), ["CY 156 234","CJ 432 23"])
});

});
