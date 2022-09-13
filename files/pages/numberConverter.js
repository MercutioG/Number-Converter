var answer = 0
var x = 0
var y = 0

function numberConvert(){
    let answer = parseInt(prompt("Insert your decimal number."));
    var x = answer;
    x = x.toString(2);  //Convert decimal to binary

    var y = answer
    y = y.toString(16); //Convert decimal to hex

    alert("Your number is " + x + " in binary, and " + y + " in hexadecimal.");
}