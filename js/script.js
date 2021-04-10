var century, year, month, dayOfWeek, day;

function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("day"))
}
if(century == ""){
  alert("Input gender");
  return false;
}
else if (year == ""){
  alert("Input year");
  return false;
}
else if (month == ""){
  alert("Input month");
  return false;
}else if(day == ""){
  alert("input date");
  return false;
}
function calculateDay(){
  getInput();
  dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day) % 7) -1;
  console.log(dayOfWeek); 
  return (Math.floor(dayOfWeek));
  if (dayOfWeek < 0) {
    dayOfWeek = dayOfWeek * -1;
  }
  else if (dayOfWeek > 0) {
    return dayOfWeek;
  }
}
function checkDayOfWeek(){
  day = calculateDay();
   checkGender();
   console.log("Function works");
}