let lastPageVisited;
let loadTimeout;

if (localStorage.getItem("username") != null && localStorage.getItem("session") != null) {
dispatchLoadingScreen();
fetch("https://riverbox-api.lankybox02.repl.co/signin/" + localStorage.getItem("username") + "/" + localStorage.getItem("session"))
   .then(response => response.json())
   .then(data => computeLoginData(data))
   .catch(err => dispatchLoadingScreen())
}else{
insertNav("$");
dispatchPageLoad("home");
}

function computeLoginData(data) {
    if (data.success == "true") {
    insertNav(data.username);
    }else{
    insertNav("$")
    alert("Error: " + data.error)
    }
    dispatchPageLoad("home")
}

function insertNav(username) {
let styling;
if (username == "$") {
    styling = `style="display:none"`;
}
document.getElementById("navbar").innerHTML = `
<div class="homeNavButtons" onclick="dispatchPageLoad('home')">
<img src="assets/logo.png">
RiverBox
</div>
<span onclick="dispatchPageLoad('explore')">Explore</span>
<span onclick="dispatchPageLoad('about')">About</span>
<div id="accountControls" ${styling}>
<span onclick="dispatchPageLoad('settings')">Settings</span>
<span onclick="dispatchPageLoad('messages')">Messages</span>
<span onclick="dispatchPageLoad('${username}')">${username}</span>
</div>
`;
}

function dispatchLoadingScreen(alwayswait) {
  document.getElementById("pageContent").innerHTML = `<div class="loader"></div><br><span class="header">Give us a moment...</span>`;
}

function dispatchPageLoad(pageType) {
  dispatchLoadingScreen();
  lastPageVisited = pageType;
  if (pageTypes[pageType] != null && pageTypes[pageType].accountonly == false) {
    document.title = pageTypes[pageType].title + " - RiverBox";
    document.getElementById("pageContent").innerHTML = pageTypes[pageType].content;
    clearTimeout(loadTimeout)
  }
  loadTimeout = setTimeout(function(){
    if (document.getElementById("pageContent").innerHTML.includes("Give us a moment...</span>")) {
      document.getElementById("pageContent").innerHTML = `<span class="header">Well, this is embarrassing...</span><br><span>It appears that the page you tried to visit isn't loading correctly.<br>Click the re-try button, and if it doesn't work, please reload the page.</span><br><button onclick="dispatchPageLoad('${pageType}')">Re-try</button>`;
    }
  }, 4000);
}

function initLoadPosts(){
dispatchLoadingScreen();
fetch("https://riverbox-api.lankybox02.repl.co/latestposts")
  .then(response => response.json())
  .then(data => loadPosts(data))
}

function loadPosts(x) {
  document.getElementById("pageContent").innerHTML = ``;

var postKeys = Object.keys(x);

for(let i = postKeys.length; i > 0; i--) {
data = postKeys[i - 1];
document.getElementById("pageContent").insertAdjacentHTML("beforeEnd", `<div style="background-color: white;border-radius: 20px;padding: 15px;width: 60%;display: inline-block;text-align: left;"><span style="color:black">` + x[data].content + `</span>
<br>
<div style="float: right;color: grey;">By <b style="color: black;">` + x[data].author + `</b> on <span style="color: black;">` + x[data].timestamp + `</span></div></div><br><br>`);
}
}