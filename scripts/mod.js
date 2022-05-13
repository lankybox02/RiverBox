var url = new URL(window.location.href);
function loadTicketsLoad() {
if (admin) {
  if (url.searchParams.get("user") != null) {
  document.getElementsByClassName("banner")[0].style.display = "block";
  document.getElementsByClassName("banner")[0].innerText = "Userpage loaded from ticket.";
  viewUserPage(url.searchParams.get("user"));
  document.getElementsByClassName("banner")
}
if (url.searchParams.get("post") != null) {
  document.getElementsByClassName("banner")[0].style.display = "block";
  document.getElementsByClassName("banner")[0].innerText = "Post loaded from ticket.";
  fetch("https://riverbox-api.lankybox02.repl.co/getpost/" + url.searchParams.get("post"))
    .then(response => response.json())
    .then(data => adminLoadPost(data))
  }
}
}

function adminLoadPost(data) {
  document.getElementById("pageContent").innerHTML = `<div class="post"><span style="color: var(--secondaryfont);cursor:pointer" onclick="viewUserPage('` + data.author + `')">` + data.author + `</span><span style="margin-top:7px;margin-bottom:7px;display:block;color:var(--postfont)">` + atob(data.content).replaceAll("<", "&lt;").replaceAll(">", "&gt;") + `</span>
  <div ` + adminClassLoad() + `><span class="socialButton" onclick="modPost(` + url.searchParams.get("post") + `)">(Moderate)</span> <span class="socialButton">(ID: ` + url.searchParams.get("post") + `)</span></div>
  <div style="float: right;color: var(--secondaryfont);">` + data.timestamp + `</div></div>`;
}

if (url.searchParams.get("user") != null ||url.searchParams.get("post") != null) {
  modal('', "<span class='header'>Administration Tickets</span><br>You have requested to load administrator data.<br><br><button class='highlightedButton' onclick='loadTicketsLoad();closeModal()'>Load requested data</button> <button onclick='closeModal()'>Dismiss</button>", "", "Administration Tickets", false);
}