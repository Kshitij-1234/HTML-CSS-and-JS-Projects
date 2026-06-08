
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var num1, num2;




function addition() { 
  
  num1 = parseInt(a.value) ;
  num2 = parseInt(b.value) ;
  
  
  if(num1 < 0 || num2 < 0){
    displayalert = "Only positive number is allowed";
    document.querySelector("#Alert").innerHTML = displayalert;
   
  }
  
  var result = num1 + num2;
  result = Math.abs(result);
  
  c.value = a.value + " + " + b.value + " = " + result;
}

function Increment(){
  
 num1 = parseInt(a.value);
 if(num1<0){
     displayalert = "Increment cannot happen Only positive number is allowed";
    document.querySelector("#Alert").innerHTML = displayalert;}else{
  num1++;
  a.value = num1;
  
    addition();}
 
}
function Decrement(){
    num1 = parseInt(a.value);
 if(num1<=0){
     displayalert = "Decrement cannot happen Only positive number is allowed";
    document.querySelector("#Alert").innerHTML = displayalert;}else{
  num1--;
  a.value = num1;
  
    addition();}
 
}

var button = document.getElementById("button");
var button2 = document.getElementById("Increment");
var button3 = document.getElementById("Decrement");

button.addEventListener('click', addition);
button2.addEventListener('click', Increment);
button3.addEventListener('click', Decrement);