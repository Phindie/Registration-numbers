var registrationElem = document.querySelector('.registrationNum');
var addBtnElem = document.querySelector('.addBtn');
var clearButton = document.querySelector('.clearBtn');
var townSelect = document.querySelector('.DropSelector');
var displayElem = document.querySelector('.numberDisplay');



var goGet = localStorage.getItem("numberOfReg");
var stored = goGet ? JSON.parse(goGet) : {};


var callFactory = RegFactory(stored);

function createReg(registration){
  let createList = document.createElement('li');
  createList.textContent = registration;
  displayElem.appendChild(createList);
}

function displayRegistration(){
  var inputValue = registrationElem.value.trim().toUpperCase();
  registrationElem.value = '';

  if (callFactory.addedNumbers(inputValue)) {
    // document.querySelector('.alert').innerHTML = '';
     localStorage.setItem('numberOfReg', JSON.stringify(callFactory.mapRegistry()));
    createReg(inputValue);
  }
  else {
    document.querySelector('.alert').innerHTML = "Please enter a valid registration <br> <code> Only from: 'CA, CY, CAW,CL,PA & CJ'. "
  }
}

addBtnElem.addEventListener('click', function(){
  displayRegistration();
  registrationElem.value = '';
});

clearButton.addEventListener('click', function(){
  localStorage.removeItem('numberOfReg');
  location.reload();

  // document.querySelector('.alert').innerHTML = '';

  window.location.reload();
})

window.addEventListener('load', function(){
  var loadMap = callFactory.mapRegistry();

  for (var i = 0; i < loadMap.length; i++) {
    createReg(loadMap[i])
  }
});

townSelect.addEventListener('change', function(){

  displayElem.innerHTML = '';
  var selectValue = callFactory.townFilter(townSelect.value);

  if (selectValue.length > 0) {
    for (var i = 0; i < selectValue.length; i++) {
      createReg(selectValue[i]);
    }
    document.querySelector('.alert').innerHTML = '';
  }

});

registrationElem.addEventListener('click', function(){
  document.querySelector('.alert').innerHTML = '';
});
