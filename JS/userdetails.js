function current_date() {
  var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];
  // body...
  setwelcome();
  clock();
}
function setwelcome(){
	$("#welcome").text("welcome : "+sessionStorage.getItem("username"));
}

function clock(){
	var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
 
document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];
setTimeout(clock, 1000);
}