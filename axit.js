document.getElementById("tab1").addEventListener("click", ChangeHead1);

function ChangeHead1() {
  document.getElementById("tabHeading").innerHTML = "This is Tab 1";
  document.getElementById("tab1").style.backgroundColor = "#ff8b38";
  document.getElementById("tab2").style.backgroundColor = "#333333";
  document.getElementById("tab3").style.backgroundColor = "#333333";
}


document.getElementById("tab2").addEventListener("click", ChangeHead2);

function ChangeHead2() {
  document.getElementById("tabHeading").innerHTML = "This is Tab 2";
  document.getElementById("tab2").style.backgroundColor = "#ff8b38";
  document.getElementById("tab1").style.backgroundColor = "#333333";
  document.getElementById("tab3").style.backgroundColor = "#333333";
  
}


document.getElementById("tab3").addEventListener("click", ChangeHead3);

function ChangeHead3() {
  document.getElementById("tabHeading").innerHTML = "This is Tab 3";
  document.getElementById("tab3").style.backgroundColor = "#ff8b38";
  document.getElementById("tab2").style.backgroundColor = "#333333";
  document.getElementById("tab1").style.backgroundColor = "#333333";
}