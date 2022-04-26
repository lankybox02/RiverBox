let username = "RiverBoxTeam";
let lastPageVisited;
let loadTimeout;

let pageTypes = {
  "home": {
    "title": "Home",
    "content": `<img src="assets/welcome.png" width="200px" />
    <br>
    <span class="header">Welcome to RiverBox!</span>
    <br>
      <i>Hmm... well this place seems empty.</i>
      <br>
      <span>
      To create a feed, click on the explore button to find some new creators to follow!
    </span>
    <br>
    <button onclick="dummyLoad()">
      Try dummy posts?
    </button>`,
    "accountonly": false
  },
  "about": {
    "title": "About",
    "content": "RiverBox is a simple open-source social media app (...)",
    "accountonly": false
  },
  "explore": {
    "title": "Explore",
    "content": "<h1>Explore</h1>The post API is not currently available!",
    "accountonly": false
  },
  "settings": {
    "title": "Settings",
    "content": "The account API is not currently available!",
    "accountonly": true
  },
  "messages": {
    "title": "Messages",
    "content": "The account API is not currently available!",
    "accountonly": true
  }
}

document.getElementById("navbar").innerHTML = `
<div class="homeNavButtons" onclick="dispatchPageLoad('home')">
<img src="assets/logo.png">
RiverBox
</div>
<span onclick="dispatchPageLoad('explore')">Explore</span>
<span onclick="dispatchPageLoad('about')">About</span>
<div id="accountControls">
<span onclick="dispatchPageLoad('settings')">Settings</span>
<span onclick="dispatchPageLoad('messages')">Messages</span>
<span onclick="dispatchPageLoad('${username}')">${username}</span>
</div>
`;

function dummyLoad() {
  dispatchLoadingScreen()
  // ADD PAGE LOADING HERE!
}

function dispatchLoadingScreen() {
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
  }, 2000);
}

dispatchPageLoad("home");
