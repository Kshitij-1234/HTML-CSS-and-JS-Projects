function DigitalClock(){
let clock=document.getElementById("clock");
var now=new Date();
console.log(now);
var hours=now.getHours();
var minutes=now.getMinutes();
var seconds=now.getSeconds();
hours=hours<10?"0"+hours:hours;
minutes=minutes<10?"0"+minutes:minutes;
 seconds=seconds<10?"0"+seconds:seconds;
document.getElementById("hours").innerHTML=hours;
document.getElementById("minutes").innerHTML=minutes;
document.getElementById("seconds").innerHTML=seconds;

var backgroundColor;
var hoursNum=parseInt(now.getHours());
if (hoursNum>=5&&hoursNum<12) {
    backgroundColor="rgb(232, 206, 57)";
}else if (hoursNum>=12 && hoursNum<17){
    backgroundColor="rgb(173, 103, 13)";
}else if(hoursNum>=17&&hoursNum<=22){
 backgroundColor=   "rgb(21, 128, 157)";

}else {
    backgroundColor="rgb(7, 75, 80)";
};

document.body.style.backgroundColor=backgroundColor;


}setInterval(DigitalClock,1000);