var currentDate = new Date();
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();

currentDate = day + '/' + month + '/' + year;

document.getElementById("currentdate").innerHTML=currentDate;

