if (!logged) {
	document.getElementById("actionmenu").style.opacity = "0";
function up() {
}
function down() {
}
}else{
function up() {
  setTimeout(function(){
  	document.getElementById("feedback").style.opacity = "1";
  	document.getElementsByClassName("post-button")[2].style.opacity = "1";
  	document.getElementsByClassName("post-button")[3].style.opacity = "1";
  	document.getElementsByClassName("post-button")[4].style.opacity = "1";
  	document.getElementById("actionmenu").style.bottom = "20px";
  	document.getElementById("actionmenu").style.height = "250px";
  	document.getElementById("actionmenu").style.opacity = "1";
  }, 200)
}

function down() {
  setTimeout(function(){
  	document.getElementById("feedback").style.opacity = "0";
  	document.getElementsByClassName("post-button")[2].style.opacity = "0";
  	document.getElementsByClassName("post-button")[3].style.opacity = "0";
  	document.getElementsByClassName("post-button")[4].style.opacity = "0.8";
  	document.getElementById("actionmenu").style.bottom = "-140px";
  	document.getElementById("actionmenu").style.height = "80px";
  	document.getElementById("actionmenu").style.opacity = "0.5";
  }, 200)
}
}

down();