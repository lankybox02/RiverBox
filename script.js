let lastPageVisited;
let loadTimeout;
let loggedOut;
let logged;
let admin;

if (ipExpActivated && localStorage.getItem("ip") == null) {
  modal("ipconfirm");
  localStorage.setItem("ip", true);
}

logged = localStorage.getItem("username") != null && localStorage.getItem("session") != null;
if (logged) {
dispatchLoadingScreen();
fetch("https://riverbox-api.lankybox02.repl.co/signin/" + localStorage.getItem("username") + "/" + localStorage.getItem("session"))
   .then(response => response.json())
   .then(data => computeLoginData(data))
}else{
insertNav("$");
dispatchPageLoad("home");
}

function computeLoginData(data) {
    if (data.success == "true") {
    admin = data.admin;
    insertNav(data.username);
    }else{
    insertNav("$")
    alert("Error: " + data.error)
    localStorage.removeItem("session");
    logged = false;
    }
    dispatchPageLoad("home")
}

function insertNav(username) {
let accountControls;
accountControls = `
<div id="accountControls">
<span onclick="dispatchPageLoad('settings')">Settings</span>
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
<span onclick="modal('oops')">Explore</span>
<span onclick="modal('oops')">About</span>
${accountControls}
`;
}

function dispatchLoadingScreen() {
  document.getElementById("pageContent").innerHTML = `<div class="loader"></div><br><span class="header">Give us a moment...</span>`;
}

function dispatchPageLoad(pageType) {
  dispatchLoadingScreen();
  lastPageVisited = pageType;
  if (pageTypes[pageType] != null) {
    if (pageTypes[pageType].accountonly == true && loggedOut == true) {
    dispatchLoadingScreen();
    clearTimeout(loadTimeout);
  }else{
    document.title = pageTypes[pageType].title + " - RiverBox";
    document.getElementById("pageContent").innerHTML = pageTypes[pageType].content;
    eval(pageTypes[pageType].script);
    clearTimeout(loadTimeout)

    if (pageType == "home") {
      document.body.insertAdjacentHTML("beforeEnd", `<div class="post-button" onclick="post()">+</div>`)
    }
  }
    }
  loadTimeout = setTimeout(function(){
    if (document.getElementById("pageContent").innerHTML.includes("Give us a moment...</span>")) {
      if (lastPageVisited == "home") {
        setTimeout(function(){
          dispatchPageLoad("apifail");
        }, 100)
      }else{
      document.getElementById("pageContent").innerHTML = `<span class="header">Well, this is embarrassing...</span><br><span>It appears that the page you tried to visit isn't loading correctly.<br>Click the re-try button, and if it doesn't work, please reload the page.</span><br><button onclick="dispatchPageLoad('${pageType}')">Re-try</button>`;
      }
    }
  }, 2000);
}

function initLoadPosts(){
dispatchLoadingScreen();
fetch("https://riverbox-api.lankybox02.repl.co/latestposts")
  .then(response => response.json())
  .then(data => loadPosts(data))
}

function loadPosts(x) {
  document.getElementById("pageContent").innerHTML = `<h1>Recent posts</h1>`;

var postKeys = Object.keys(x);

for(let i = postKeys.length; i > 0; i--) {
data = postKeys[i - 1];
document.getElementById("pageContent").insertAdjacentHTML("beforeEnd", `<div class="post">` + x[data].author + `<span style="margin-top:7px;margin-bottom:7px;display:block">` + convertPost(x[data].content) + `</span>
<span onclick="likePost(this)" class="likeButton" ` + loggedLike() + `>Like (${x[data].likes})</span> <span class="hiddenModButton" onclick="modPost(this)" ` + adminClassLoad() + `>(Moderate)</span>
<div style="float: right;color: lightgrey;">` + humanized_time_span(x[data].timestamp) + `</div></div><br><br>`);
}
}

function loggedLike() {
  if (!logged) {
    return "style='display:none'";
  }
}

function adminClassLoad(){
  if(admin == 'true') {
    return "style='display: inline-block !important'";
  }else{
    return "";
  }
}

function convertPost(postContent) {
  return atob(postContent.split("<")[0]).replaceAll("[b]", `<b>`).replaceAll("[/b]", `</b>`).replaceAll("[i]", `<i>`).replaceAll("[/i]", `</i>`).replaceAll("[u]", `<u>`).replaceAll("[/u]", `</u>`).replaceAll("[s]", `<s>`).replaceAll("[/s]", `</s>`);
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
    setTimeout(function(){
      if (data.success == 'false') {
        document.getElementById("signup-error").innerText = data.error;
      }else{
        logIn(data);
        modal("welcome");
      }
    }, 1000)
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
  localStorage.removeItem("session");
  window.location.reload();
}

function post() {
  if (logged) {
    modal("postprompt");
  }else{
    dispatchPageLoad("signup");
  }
}

function sendPost(postContent) {
  if (postContent != null) {
    postData('https://riverbox-api.lankybox02.repl.co/post', JSON.parse(`{"post": "${postContent}", "username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `"}`))
      .then(data => {
        window.location.reload();
      });
  }
}

function modal(modalType) {
  document.getElementById("modal-header").innerText = modalTypes[modalType].title;
  document.getElementById("modal-content").innerHTML = modalTypes[modalType].content;
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function modPost(e) {
let postId = e.parentElement.children[0].children[0].innerText;
postData('https://riverbox-api.lankybox02.repl.co/remove', JSON.parse(`{"username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "post": "` + postId + `"}`))
  .then(data => {
    window.location.reload();
  });
}

function likePost(e) {
let postId = e.parentElement.children[0].children[0].innerText;
postData('https://riverbox-api.lankybox02.repl.co/like', JSON.parse(`{"username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "post": "${postId}"}`))
  .then(data => {
    if (data.success) {
      let newCount = parseInt(e.innerText.replace(/\D/g, "")) + 1;
      e.innerText = "Liked (" + newCount.toString() + ")";
      e.style.fontDecoration = null;
      e.style.cursor = null;
    }
  });
}