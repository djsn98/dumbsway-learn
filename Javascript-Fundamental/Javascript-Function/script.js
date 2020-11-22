function add() {
    console.log(1+2);
}

function addWithVar() {
    var one = 1; 
    var two = 2;
    console.log(one + two);
}

function addWithReturn() {
    var one = 1; 
    var two = 2;
    return one + two;
}

function addWithParams(satu, dua) {
    return satu + dua;
}


add();
addWithVar();
console.log(addWithReturn());

//Memasukkan nilai return ke var
var returnValue = addWithReturn();

console.log(returnValue);

//Memasukkan parameter
var satu = 1;
var dua = 2;

console.log(addWithParams(1, 2));


function multiply() {
    return satu * 6;
}

console.log(multiply());