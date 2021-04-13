// UI Logic
function getDayBorn() {
  let dateString = dateOfBirth;
  let gender = document.getElementById("gender");
  document.getElementsById('displayNameHere').innerHTML = "Your Akan Name is " + getNameFromDate(dateString, gender);

console.log(dateString);
}
// Business Logic
function getNameFromDate(dateString, gender) {
  let dateOfBirth = new Date(dateString); // Creating a date object from the string
  let dayOfTheWeek = dateOfBirth.getDay(); // Get the position/index of the day using getDay() method
  let akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", " Kofi", " Kwame"];
  let akanFemale = ["Akosua", "Adwoa", " Abenaa", "Akua", " Yaa", "Afua", "Ama"];
  if (gender == "male") {
    return akanMale[dayOfTheWeek]; // returns the male name according to the index selected from dayOfTheWeek
  } else if (gender == "female") {
    return akanFemale[dayOfTheWeek]; // returns the female name according to the index selected from dayOfTheWeek
  } else {
    return "Error getting correct name!"; // returns an error message
  }
}