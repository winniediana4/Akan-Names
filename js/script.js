var century, year, month, dayOfMonth, dayOfWeek, day;

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
  alert("Input  month");
  return false;
}else if(day == ""){
  alert("input date");
  return false;
}
