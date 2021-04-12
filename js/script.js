function getName() {
  var name = document.getElementById("name").value;
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", " Kofi", " Kwame"];
  var akanFemale = ["Akosua", "Adwoa", " Abenaa", "Akua", " Yaa", "Afua", "Ama"];

  akanMale = gender1;
  akanFemale = gender2;

  var century = parseInt(document.getElementById("century").value);
  var year = parseInt(document.getElementById("year").value);
  var month = parseInt(document.getElementById("month").value);
  var date = parseInt(document.getElementById("date").value);

  var day = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

  var gender = parseInt(document.getElementById("gender").value);

  var akanDay = days[Math.floor(day)];

  if (gender == 1) {
    if (akanDay === "Sunday") {
      document.getElementById("output").value = name + "Born on Sunday. Your Akan Name is " + akanMale[0];
      return true;
    } else if (akanDay === "Monday") {
      document.getElementById("output").value = name + "Born on Monday. Your Akan Name is " + akanMale[1];
      return true;
    } else if (akanDay === "Tuesday") {
      document.getElementById("output").value = name + "Born on Tuesday. Your Akan Name is " + akanMale[2];
      return true;
    } else if (akanDay === "Wednesday") {
      document.getElementById("output").value = name + "Born on Wednesday. Your Akan Name is " + akanMale[3];
      return true;
    } else if (akanDay === "Thursday") {
      document.getElementById("output").value = name + "Born on Thursday. Your Akan Name is " + akanMale[4];
      return true;
    } else if (akanDay === "Friday") {
      document.getElementById("output").value = name + "Born on Friday. Your Akan Name is " + akanMale[5];
      return true;
    } else if (akanDay === "Saturday") {
      document.getElementById("output").value = name + "Born on Saturday. Your Akan Name is " + akanFemale[6];
      return true;
    }
  }
  if (gender == 2) {
    if (akanDay === "Sunday") {
      document.getElementById("output").value = name + "Born on Sunday. Your Akan Name is " + akanFemale[0];
      return true;
    } else if (akanDay === "Monday") {
      document.getElementById("output").value = name + "Born on Monday. Your Akan Name is " + akanFemale[1];
      return true;
    } else if (akanDay === "Tuesday") {
      document.getElementById("output").value = name + "Born on Tuesday. Your Akan Name is " + akanFemale[2];
      return true;
    } else if (akanDay === "Wednesday") {
      document.getElementById("output").value = name + "Born on Wednesday. Your Akan Name is " + akanFemale[3];
      return true;
    } else if (akanDay === "Thursday") {
      document.getElementById("output").value = name + "Born on Thursday. Your Akan Name is " + akanFemale[4];
      return true;
    } else if (akanDay === "Friday") {
      document.getElementById("output").value = name + "Born on Friday. Your Akan Name is " + akanFemale[5];
      return true;
    } else if (akanDay === "Saturday") {
      document.getElementById("output").value = name + "Born on Saturday. Your Akan Name is " + akanFemale[6];
      return true;
    }
  }
}