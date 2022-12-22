var i = 0;
var txt = "I'm Mohamed Ayman..."; /* The text */
var speed = 150; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
    setTimeout(() => {  document.getElementById("title").innerHTML = "Welcome 👋"; }, 500);
    setTimeout(() => {  document.getElementById("title").innerHTML = "Narox | Official Website"; }, 1500);
  }
}

window.onload(typeWriter())