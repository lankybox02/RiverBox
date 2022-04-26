let lastPageVisited;
let loadTimeout;
let loggedOut;

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
    localStorage.removeItem("session");
    }
    dispatchPageLoad("home")
}

function insertNav(username) {
let accountControls;
accountControls = `
<div id="accountControls">
<span onclick="dispatchPageLoad('settings')">Settings</span>
<span onclick="dispatchPageLoad('messages')">Messages</span>
<span onclick="dispatchPageLoad('${username}')">${username}</span>
</div>
`;
if (username == "$") {
    loggedOut = true;
    accountControls = `
<div id="accountControls">
<span onclick="dispatchPageLoad('signup')">Sign Up</span>
</div>
`;
}
document.getElementById("navbar").innerHTML = `
<div class="homeNavButtons" onclick="dispatchPageLoad('home')">
<img src="assets/logo.png">
RiverBox
</div>
<span onclick="dispatchPageLoad('explore')">Explore</span>
<span onclick="dispatchPageLoad('about')">About</span>
${accountControls}
`;
}

function dispatchLoadingScreen(alwayswait) {
  document.getElementById("pageContent").innerHTML = `<div class="loader"></div><br><span class="header">Give us a moment...</span>`;
}

function dispatchPageLoad(pageType) {
  dispatchLoadingScreen();
  lastPageVisited = pageType;
  if (pageTypes[pageType] != null) {
    if (pageTypes[pageType].accountonly == true) {
      document.title = "Whoops! - RiverBox";
    document.getElementById("pageContent").innerHTML = `Account-only pages aren't currently supported!`;
    clearTimeout(loadTimeout)
  }else{
    document.title = pageTypes[pageType].title + " - RiverBox";
    document.getElementById("pageContent").innerHTML = pageTypes[pageType].content;
    clearTimeout(loadTimeout)
  }
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

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const signUp = () => {
  let usernameInput = document.getElementById("usernameInput").value;
  if(usernameInput.includes("/") || usernameInput.includes("#") || usernameInput.includes("?") || usernameInput.includes("%")) {
    document.getElementById("usernameInput").value = "";
    alert("Cannot encode username correctly!")
  }else{
postData('https://riverbox-api.lankybox02.repl.co/signup', JSON.parse(`{"username": "${usernameInput}"}`))
  .then(data => {
    logIn(data);
  });
  }
}

function logIn(data) {
  if (data.success == false) {
    alert("Error: " + data.error)
  }else{
    localStorage.setItem("username", data.username);
    localStorage.setItem("session", data.session);
  }
}

function logOut() {
  if (confirm("Are you sure you want to log out? You will not be able to log back in!")) {
    localStorage.removeItem("session");
    window.location.reload();
  }
}