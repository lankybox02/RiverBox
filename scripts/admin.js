let rawTickets;

fetch("https://riverbox-api.lankybox02.repl.co/signin/" + localStorage.getItem("username") + "/" + localStorage.getItem("session"))
   .then(response => response.json())
   .then(data => computeLoginData(data))

fetch("https://riverbox-api.lankybox02.repl.co/reports")
   .then(response => response.json())
   .then(data => rawTickets = data)

function computeLoginData(data) {
  if (data.success == "true" && data.admin == "true") {
    loadAdminTickets();
    insertNavAdmin(data.username);
  }else{
    modal("hashanmsasdr")
    // document.location.href = "/";
  }
}

function loadAdminTickets() {
  document.getElementById("pageContent").innerHTML = `<h1>Ticket List</h1>`;
  
  for (let i = Object.keys(rawTickets).length; i > 0; i--) {
    document.getElementById("pageContent").insertAdjacentHTML("beforeEnd", `<div id="${i}" class="ticket"></div><br><br>`);
    document.getElementById(i).innerHTML = rawTickets[i].reason.replaceAll("<", "&lt;").replaceAll(">", "&gt;") + "<br>For ID" + rawTickets[i].postId + " by " + rawTickets[i].by + `<br><a href="/?post=` + rawTickets[i].postId + `">View Post</a> - <a href="/?user=` + rawTickets[i].by + `">View User</a>`;
  }
}