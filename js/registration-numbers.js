function RegFactory(stored){
  var regNumber = '';
  var townMap = {};


  function addedNumbers(reg){

    var availableReg = [ 'CA ', 'CJ ', 'CY ', 'CL', 'CAW']

    if (reg !== ''){
      if (townMap[reg] === undefined) {
        for (var i = 0; i < availableReg.length; i++) {
          if (reg.startsWith(availableReg[i])) {

            townMap[reg] = 0;
            return true;
          }
        }
      }
      return false;
    }
  }

  function returningReg(){
    return regNumber;
  }
  function mapRegistry() {
    return Object.keys(townMap);
  }


  function townFilter(town){
    var carNumbers = Object.keys(townMap);

      if (town === "All ") {
      return carNumbers;
     }

      if (town === "Filter ") {
     var empty = carNumbers.clear();
       return empty;
    }

    var filterTown = carNumbers.filter(function(Number, storedNum){

      return Number.startsWith(town)
    });
    location.hash = town;

    return filterTown;
  }

 return {
    addedNumbers,
    returningReg,
    townFilter,
    mapRegistry,

  }
}
