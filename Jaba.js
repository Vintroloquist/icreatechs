function Bio() {
  document.getElementById("Bio").innerHTML = " <center>Born on the 21st of January of 2006, I am ready to learn something everyday, and to apply it to my Future Job!. <br><br>I am a very fast learner, a cooperative and responsible person, and very trustworthy!</center>";
  document.getElementById("Edu").innerHTML = ""; // Clear the other section
  document.getElementById("Talski").innerHTML = "";
}

function Edu() {
  document.getElementById("Edu").innerHTML = "College <br> Holy Cross of Davao College, Inc. 2024 - Current<br><br> Senior High School <br> Leon Garcia Sr. National High School - 2024 <br><br> Junior High School <br> Leon Garcia Sr. National High School - 2022 <br><br> Elementary <br> Holy Cross of Davao College, Inc - 2018";
  document.getElementById("Bio").innerHTML = ""; // Clear the other section
  document.getElementById("Talski").innerHTML = "";
}

function Talski(){
  document.getElementById("Talski").innerHTML = "<h3>Talents <br><br> <ul><li>Playing Musical Instruments</li><li>Doing Magic Tricks</li><li>Sketching & Drawing</li></ul> <br><br>Skills <ul><li>HTML, CSS and JavaScript</li><li>C++</li><li>Java</li><li>Python</li></ul></h3>"
  document.getElementById("Bio").innerHTML = "";
  document.getElementById("Edu").innerHTML = "";
}