function getName(){
  var name = document.getElementById("name").value;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", " Kofi", " Kwame"];
var akanFemale = ["Akosua", "Adwoa", " Abenaa", "Akua", " Yaa", "Afua", "Ama"];

var century = parseInt(document.getElementById("century").value);
var year = parseInt(document.getElementById("year").value);
var month = parseInt(document.getElementById("month").value);
var date = parseInt(document.getElementById("date").value);

var day = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;

var akanDay = days[Math.floor(day)];
}