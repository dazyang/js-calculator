// var mathOpera = document.getElementsByClassName('mathKeys');
// // var clearE = mathKeys[0].clearEntry;
// console.log(mathOpera);
//
// var numKeys = document.getElementById('numKeys');
//
// var calScreen = document.getElementById('screen');
// var calHistory = document.getElementById('history');


function addNumber(entry){
  //screenEntry must be local. It doesn't work outside the function.*
  var screenEntry = document.getElementById('screen');

  switch(entry){
    case 1: screenEntry.value += '1'; break;
    case 2: screenEntry.value += '2'; break;
    case 3: screenEntry.value += '3'; break;
    case 4: screenEntry.value += '4'; break;
    case 5: screenEntry.value += '5'; break;
    case 6: screenEntry.value += '6'; break;
    case 7: screenEntry.value += '7'; break;
    case 8: screenEntry.value += '8'; break;
    case 9: screenEntry.value += '9'; break;
    case 0: screenEntry.value += '0'; break;
    case '.': screenEntry.value += '.'; break;
  }
}

function mathOp(operation){
  var screenEntry = document.getElementById('screen');

  switch (operation) {
    case '/': screenEntry.value += '/'; break;
    case '*': screenEntry.value += '*'; break;
    case '+': screenEntry.value += '+'; break;
    case '-': screenEntry.value += '-'; break;
    case '%': screenEntry.value += '%'; break;
  }
}

function clearEntry(clear){
  var screenEntry = document.getElementById('screen');

  screenEntry.value = clear;
  if (clear === 'c'){
    screenEntry.value='';
  }
}

function getAnswer(){
  var screenEntry = document.getElementById('screen');

  calResult = screenEntry.value;
  calResult = eval(calResult);
  screenEntry.value = calResult;
}
