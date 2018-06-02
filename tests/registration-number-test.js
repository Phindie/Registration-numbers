describe('The registration number Widget Function', function(){

it('should return true if registration matches the given regnumber for Cape town', function(){

  var selectPlate = FactoryNum();
assert.equal(selectPlate.addedNumbers('CA 9870'),true );
});

it('should return true if registration matches the given regnumber for Bellville', function(){ 
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('CY 1254'), true);
  });
it('should return true if registration matches the given regnumber for Paarl', function(){ 
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('CJ 1254'), true);
  })
it('should return true if registration matches the given regnumber for Goerge', function(){ 
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('CAW 1254'), true);
  });
it('should return true if registration matches the given regnumber for Worcester', function(){ 
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('CL 1254'), true);
  });
it('should return true if registration matches the given regnumber for Pretoria', function(){ 
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('PA 1254'), true);
  });

it('should return false if the registration does not match the given regnumber', function(){ 
var selectPlate = FactoryNum();

assert.equal(selectPlate.addedNumbers('PAA 1254'), false);
  });

it('should map registrations from the given regnumbers only', function(){
var selectPlate = FactoryNum();

selectPlate.addedNumbers("CA 123");
selectPlate.addedNumbers("LN 123");

assert.deepEqual(selectPlate.mapRegistry(), ['CA 123'])
var selectPlate = FactoryNum();

selectPlate.addedNumbers("CY 156");
selectPlate.addedNumbers("CK 124");
selectPlate.addedNumbers("CJ 432");

assert.deepEqual(selectPlate .mapRegistry(), ['CY 156','CJ 432'])
});

});