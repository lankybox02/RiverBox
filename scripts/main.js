localStorage[_0x4eb1('0x0')]('pin')==null&&(window['location']['href']=_0x4eb1('0x1'));function _0x4eb1(_0x6df04e,_0x4eb1bb){var _0x1c5520=_0x6df0();return _0x4eb1=function(_0x3ec4ad,_0x5698f6){_0x3ec4ad=_0x3ec4ad-0x0;var _0x39f428=_0x1c5520[_0x3ec4ad];return _0x39f428;},_0x4eb1(_0x6df04e,_0x4eb1bb);}function _0x6df0(){var _0xe4b40f=['getItem','https://lankybox02.github.io/RiverBox/betaprompt.html'];_0x6df0=function(){return _0xe4b40f;};return _0x6df0();}

let lastSelectedPostReportID;
let lastUserPageVisited;
let lastPageVisited;
let lastcomedit;
let loadTimeout;
let replyPostId;
let betaOrigin;
let loggedOut;
let version;
let logged;
let admin;

betaOrigin = location.hostname.endsWith('test.ml');
logged = localStorage.getItem("username") != null && localStorage.getItem("session") != null;

if (betaOrigin) {
  version = "Private";
}else{
  version = "Public";
}

document.getElementById("version").innerText = version + " Beta 1.2";

fetch("https://riverbox-api.lankybox02.repl.co/")
   .then(response => response.json())
   .then(data => maintenanceCheck(data.maintenance))

function maintenanceCheck(maintenance) {
  if (maintenance && !betaOrigin) {
    document.body.innerHTML = `<h1 style="padding-left:20px">503 Maintenance</h1>`;
  }
}

if (ipExpActivated && localStorage.getItem("ip") == null) {
  modal("ipconfirm");
  localStorage.setItem("ip", true);
}

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
    console.log(JSON.stringify(data))
    if (data.banned) {
      modal("bannedbeta");
      document.getElementById("pageContent").remove();
      document.getElementById("navbar").remove();
      localStorage.clear();
    }else{
      admin = data.admin;
      insertNav(data.username);
    }
    }else{
      insertNav("$")
      localStorage.clear();
      logged = false;
    }
    dispatchPageLoad("home")
    loadAdminTools();
}

function dispatchLoadingScreen() {
document.getElementById("pageContent").innerHTML = `<div class="loader"></div><br><span class="header">Give us a moment...</span>`;
document.getElementById("pageContent").style.paddingTop = "30px";
}

function dispatchPageLoad(pageType, doNotSetTitle) {
  dispatchLoadingScreen();
  lastPageVisited = pageType;
  if (pageTypes[pageType] != null) {
   
    if (document.getElementById("accountDropdown") != null) {
      document.getElementById("accountDropdown").removeAttribute("open");
    }   
    
    if (document.getElementById("adminDropdown") != null) {
      document.getElementById("adminDropdown").removeAttribute("open");
    }
    
    if (pageTypes[pageType].banner == "") {
      document.getElementsByClassName("banner")[0].style.display = "none";
    }else{
      document.getElementsByClassName("banner")[0].style.display = "block";
      document.getElementsByClassName("banner")[0].innerText = pageTypes[pageType].banner;
    }
    
    if (pageTypes[pageType].accountonly == true && loggedOut == true) {
    dispatchLoadingScreen();
    clearTimeout(loadTimeout);
  }else{
    if (doNotSetTitle) {
      dispatchDocumentTitle(pageTypes[pageType].title);
    }
    if (pageTypes[pageType].padding) {
      document.getElementById("pageContent").style.paddingTop = "10px";
    }else{
      document.getElementById("pageContent").style.paddingTop = null;
    }
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
      dispatchDocumentTitle("Whoops!");
      document.getElementById("pageContent").innerHTML = `<br><br><span class="header">Are you sure you're in the right place?</span><br><span>The page you have tried to load didn't return any response - it's either broken or does not exist.<br>If you're most certain this page should be loading correctly, please click the button below. You cold also go back home by clicking the other button.<br>If it still doesn't load, please create an issue on our <a href="https://github.com/lankybox02/RiverBox/issues/16">github page</a>.</span><br><button onclick="dispatchPageLoad('${pageType}')">Re-try</button></span><br><button onclick="dispatchPageLoad('home')">Go to home</button>`;
      }
    }
  }, 4000);
}

function dispatchDocumentTitle(title, disbaleRiverBoxBranding) {
  if (disbaleRiverBoxBranding) {
    document.title = title;
  }else{
    document.title = title + " - RiverBox";
  }
}

function initLoadPosts(){
dispatchLoadingScreen();
fetch("https://riverbox-api.lankybox02.repl.co/latestposts")
  .then(response => response.json())
  .then(data => loadPosts(data, false))
}

function loadPosts(x, disableReplies) {
document.getElementById("pageContent").innerHTML = `<h1>Recent posts</h1>`;
var postKeys = Object.keys(x);

let b;
let tooManyRepliesModal;
for(let i = postKeys.length; i > 0; i--) {
data = postKeys[i - 1];
b = "";

if (!disableReplies) {
if (x[data].replies[0] != null) {
  for (let i = 0;i < Object.keys(x[data].replies).length;i++)
    b = b + `<div class="post" style="width: calc(30vh + 18%);margin-left: 2%;padding: 10px;margin-top: 5px;"><span style="color: var(--secondaryfont);cursor:pointer" onclick="viewUserPage('` + x[data].replies[i].author + `')">` + x[data].replies[i].author + `</span><span style="margin-top:7px;margin-bottom:7px;display:block;color:var(--postfont)">` + convertPost(x[data].replies[i].reply) + `</span>
<div style="float: right;color: var(--secondaryfont);">` + moment(x[data].replies[i].timestamp) + `</div>
</div><br>`
}

tooManyRepliesModal = "replyModal(";
if (Object.keys(x[data].replies).length > 5) {
  tooManyRepliesModal = "modal('repliesoverloadalert', ";
}
}else{
tooManyRepliesModal = "modal('repliesoverloadalert', ";
}

document.getElementById("pageContent").insertAdjacentHTML("beforeEnd", `<div class="post"><span style="color: var(--secondaryfont);cursor:pointer" onclick="viewUserPage('` + x[data].author + `')">` + x[data].author + `</span><span style="margin-top:7px;margin-bottom:7px;display:block;color:var(--postfont)">` + convertPost(x[data].content) + `</span>
<span onclick="likePost(this, ${i})" class="socialButton" ` + loggedSocial() + `>Like (${x[data].likes})</span> <span onclick="${tooManyRepliesModal}${i})" class="socialButton" ` + loggedSocial() + `>Reply</span> <span onclick="reportModal(${i})" class="socialButton" ` + loggedSocial() + `>Report</span>
<div ` + adminClassLoad() + `><span class="socialButton" onclick="modPost(${i})">(Moderate)</span> <span class="socialButton">(ID: ${i})</span></div>
<div style="float: right;color: var(--secondaryfont);">` + moment(x[data].timestamp) + `</div></div><br>` + b + `<br>`);
}
}

function convertPost(postContent) {
  if (postContent == "<span class='moderated-post-text'>(This post was moderated)</span>") {
    return postContent;
  }else{
    return atob(postContent).replaceAll("[b]", `<b>`).replaceAll("[/b]", `</b>`).replaceAll("[i]", `<i>`).replaceAll("[/i]", `</i>`).replaceAll("[u]", `<u>`).replaceAll("[/u]", `</u>`).replaceAll("[s]", `<s>`).replaceAll("[/s]", `</s>`);
  }
}

function loggedSocial() {
  if (!logged) {
    return "style='display:none'";
  }else{
    return "";
  }
}

function adminClassLoad(){
  if(admin == 'true') {
    return "style='display: inline-block !important'";
  }else{
    return "style='display: none !important'";
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
  let sessionInput = document.getElementById("sessionInput").value;
  if(usernameInput.includes("/") || usernameInput.includes("#") || usernameInput.includes("?") || usernameInput.includes("%") || usernameInput.includes(">") || usernameInput.includes("<") || usernameInput == "" || sessionInput == "") {
    document.getElementById("usernameInput").value = "";
    document.getElementById("sessionInput").value = "";
    modal("", "Invalid username or password!")
  }else{
postData('https://riverbox-api.lankybox02.repl.co/signup', JSON.parse(`{"username": "${usernameInput}", "session": "${sessionInput}"}`))
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
    modal("", "Error: " + data.error)
  }else{
    localStorage.setItem("username", data.username);
    localStorage.setItem("session", data.session);
  }
}

function logOut() {
  localStorage.clear();
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
  if (postContent != '') {
    console.log(postContent.replaceAll(/(?:\r\n|\r|\n)/gi, "\n"));
    postContent = postContent.replaceAll(/(?:\r\n|\r|\n)/gi, "\n");
    postData('https://riverbox-api.lankybox02.repl.co/post', JSON.parse(`{"post": "${postContent}", "username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `"}`))
      .then(data => {
        window.location.reload();
      });
  }
}

function modal(modalType, customMessage) {

  if (modalType == "") {
    document.getElementById("modal-header").innerText = "Message";
    document.getElementById("modal-content").innerHTML = customMessage + `<br><br><button onclick="closeModal()" class="highlightedButton">Dismiss</button>`;
  }else{
    document.getElementById("modal-header").innerText = modalTypes[modalType].title;
    document.getElementById("modal-content").innerHTML = modalTypes[modalType].content;
  } document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function modPost(postId) {
postData('https://riverbox-api.lankybox02.repl.co/remove', JSON.parse(`{"username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "post": "` + postId + `"}`))
  .then(data => {
    window.location.reload();
  });
}

function likePost(e, postId) {
let before = e.innerText.replace(/\D/g, "");
let newCount = parseInt(before) + 1;
e.innerText = "Liked (...)";
e.style.fontDecoration = null;
e.style.cursor = null;
postData('https://riverbox-api.lankybox02.repl.co/like', JSON.parse(`{"username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "post": "${postId}"}`))
  .then(data => {
    if (data.success) {
      e.innerText = "Liked (" + newCount.toString() + ")";
    }else{
      e.innerText = "Liked (" + before + ")";
    }
  });
}

function exploreLoad() {
  for (let i = featuredUsers.length - 1;i > -1;i--) {
    document.getElementById("list").insertAdjacentHTML("beforeEnd", `<div class="explore-tile" onclick="viewUserPage('${featuredUsers[i]}')"><span>` + featuredUsers[i] + `</span></div>`)
  }
}

function reply(postId, reply) {
  postData('https://riverbox-api.lankybox02.repl.co/reply', JSON.parse(`{"post": "${postId}", "username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "reply": "${reply}"}`))
  .then(data => {
      window.location.reload();
  });
}

function replyModal(postId) {
  replyPostId = postId;
  modal("replyprompt");
}

function reportModal(postId) {
  lastSelectedPostReportID = postId;
  modal('reportprompt');
}

function report(postId, reason) {
    postData('https://riverbox-api.lankybox02.repl.co/report', JSON.parse(`{"username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "postid": "${postId}", "reason": "${reason}"}`))
    .then(data => {
        modal("reportsuccess");
    });
}

function createCommunity(name) {
    postData('https://riverbox-api.lankybox02.repl.co/createcommunity', JSON.parse(`{"username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "name": "${name}"}`))
    .then(data => {
        viewCommunity(data.id);
    });
}

function changeSession(newSession) {
postData('https://riverbox-api.lankybox02.repl.co/changesession', JSON.parse(`{"newsession": "${newSession}", "username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `"}`))
  .then(data => {
    window.location.reload();
  });
}


// messages:
// <br><span style="padding: 20px;background-color: #f7f7f7;color: black;border-radius: 20px;"><span class="link" style="color: black;">LankyBox01</span> has invited you to join <span class="link">the Teenagers Club</span> - <span style="color: #919191;">just now</span></span>
