function loadAdminTools() {
  if (admin == 'true') { // if you set the admin variable to true you aint fooling anybody with that, just sayin
    document.getElementById("beta-button").style.display = null;
    document.getElementById("beta-button").setAttribute("onclick", "window.location.href = 'https://beta.riverbox.ml/'");
    localStorage.setItem("b", true);
    document.getElementById("navbar").insertAdjacentHTML("afterEnd", `<div style="background-color: rgba(0, 0, 0, 0.4);display: inline-block;padding: 15px;border-radius: 20px;position: fixed;left: 0;z-index:2;font-size:16px"><details id="adminDropdown"><summary style="cursor:pointer">Admin Tools</summary><span class="header">Admin Tools</span><br><input placeholder="Modal name..." autocomplete="off" id="modalinput"><br><input placeholder="Page name..." autocomplete="off" id="pageinput"><br><input placeholder="Username..." autocomplete="off" id="userinput"><br><input placeholder="Community ID..." autocomplete="off" id="communityinput"><br><button onclick="pageDebugTools()">Page Debug Tools</button></details></div>`);
    document.getElementById("modalinput").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        modal(document.getElementById("modalinput").value);
      }
    });
    
    document.getElementById("pageinput").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        dispatchPageLoad(document.getElementById("pageinput").value);
      }
    });
    document.getElementById("userinput").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        viewUserPage(document.getElementById("userinput").value);
      }
    });

    document.getElementById("communityinput").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        viewCommunity(document.getElementById("communityinput").value);
      }
    });
  }
}

function pageDebugTools() {
  modal("", `<span class="header">LocalStorage Saves:</span><ul id="localStorageList" style="padding:0"></ul><button onclick="dispatchPageLoad(lastPageVisited)">Restart Page</button> - <button onclick="viewUserPage(lastfetcheduser)">Restart Userpage</button> - <button onclick="window.location.reload()">Reload Website</button>`, "", "Page Debug Tools");
  let value_;
  for (var i = 0; i < localStorage.length; i++){
    value_ = localStorage.getItem(localStorage.key(i));
    if (localStorage.key(i) == "session") {
      value_ = "[REMOVED]";
    }

    document.getElementById("localStorageList").insertAdjacentHTML("afterBegin", `<li onclick="localStorage.removeItem('` + localStorage.key(i) + `');$('#localid${i}').hide('fade', {}, 200)" id="localid${i}"><span style="font-size:20px">` + localStorage.key(i) + `</span><br>` + value_ + `</li> `);
  }
}