function numberConvert(){
    let answer = parseInt(prompt("Insert your decimal number."));
    var x = answer;
    x = x.toString(2);  //Convert decimal to binary
    alert(x);

    var y = answer
    y = y.toString(16); //Convert decimal to hex
    alert(y);
}