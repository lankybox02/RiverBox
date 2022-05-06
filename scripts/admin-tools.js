function loadAdminTools() {
  if (admin == 'true') {
    document.getElementById("navbar").style.backgroundColor = "#edc618";
    document.getElementById("navbar").insertAdjacentHTML("afterEnd", `<div style="background-color: rgba(0, 0, 0, 0.4);display: inline-block;padding: 10px;border-bottom-right-radius: 20px;position: fixed;left: 0;z-index:2;"><details id="adminDropdown"><summary style="cursor:pointer">Admin Tools</summary><span class="header">Admin Tools</span><br><input placeholder="Modal name..." autocomplete="off" id="modalinput"><br><input placeholder="Page name..." autocomplete="off" id="pageinput"><br><input placeholder="Username..." autocomplete="off" id="userinput"><br><input placeholder="Community ID..." autocomplete="off" id="communityinput"></details></div>`);
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