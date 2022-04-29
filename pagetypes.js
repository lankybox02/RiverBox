let pageTypes = {
  "home": {
    "title": "Home",
    "content": ``,
    "script": `initLoadPosts()`,
    "accountonly": false
  },
  "about": {
    "title": "About",
    "content": "<h1>About</h1>RiverBox is a simple open-source social media app (...)",
    "script": ``,
    "accountonly": false
  },
  "explore": {
    "title": "Explore",
    "content": `<h1>Explore</h1><div style="text-align:left" id="tiles"><span class="header">Featured Users</span><br></div>`,
    "script": `exploreLoad()`,
    "accountonly": false
  },
  "settings": {
    "title": "Settings",
    "content": `<h1>Settings</h1><button onclick="modal('logoutconfirm')">Log Out</button>`,
    "script": ``,
    "accountonly": true
  },
  "messages": {
    "title": "Messages",
    "content": "<h1>Settings</h1><span>Failed to reach API</span>",
    "script": ``,
    "accountonly": true
  },
  "signup": {
    "title": "Sign Up",
    "content": `<div style="display: flex;text-align:left;">
    <img src="assets/hearts.png" width="340px">
    <div style="margin-left: 20px;">
    <span class="header">Sign up for Riverbox!</span>
    <span style="margin-top: 15px;display: block;">
    RiverBox: The simple &amp; friendly community to discuss absolutely anything.
    </span>
    <span style="margin-top: 5px;display: block;color: #ff7070;" id="signup-error"></span>
    <input placeholder="Insert a username..." id="usernameInput" autocomplete="off" />
    <button style="margin-top: 10px;" onclick="signUp()">
      Sign up!
    </button>
    <br><br>
    <span style="font-weight:bold">Username requirements:</span>
    <ul><li>A username can only contain letters (a-z, A-Z), dash (-) and underscore (_)</li><li>A username can only be between 3 to 20 characters long</li><li>A username may not contain anything offensive or inappropriate</li></ul>
<span><b>Warning:</b> The sign-up API is still in its early stages and may give out some random errors sometimes. If you encounter one, please alert us on our <a href="https://github.com/lankybox02/RiverBox">github page</a>!</span>
    </div>
</div>`,
    "script": `if(logged){dispatchLoadingScreen()}`,
    "accountonly": false
  },
  "apifail": {
    "title": "Whoops!",
    "content": "<h1>Whoops!</h1><span>It seems like the API is down. Please create an issue on <a href='https://github.com/lankybox02/RiverBox'>our github page</a>. Sorry for the inconvenience :(</span>",
    "script": ``,
    "accountonly": false
  }
}

let modalTypes = {
  "ipconfirm": {
    "title": "Allow access to your IP?",
    "content": `<div style="display: flex;text-align:left;">
    <img src="assets/location.png" width="300px">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Allow access to your IP?</span>
    <span style="margin-top: 15px;display: block;">
    Do you agree to share your IP with us in order to make your site experience better? (We will not share your IP anywhere)
    </span>
    <button onclick="setIPperms(true)">Allow</button> 
    <button class="highlightedButton" onclick="setIPperms(false)">Deny</button>
    </div>
</div>`
  },
  "postprompt": {
    "title": "What are you thinking about?",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What are you thinking about?</span>
    <span style="margin-top: 15px;display: block;">
    <textarea id="postText" placeholder="Write a new post here..."></textarea>
    </span>
    <button class="highlightedButton" onclick="sendPost(document.getElementById('postText').value)">Post</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "logoutconfirm": {
    "title": "Are you sure you want to log out?",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Are you sure you want to log out?</span>
    <span style="margin-top: 15px;display: block;">
      Our servers do not currently support logging into an account. If you log out, your account might be lost!
    </span>
    <button onclick="logOut()">Log out</button> 
    <button onclick="closeModal()" class="highlightedButton">Nevermind</button>
    </div>
</div>`,
  },
  "betaprompt": {
    "title": "Beta is available!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Would you like to beta-test RiverBox?</span>
    <span style="margin-top: 15px;display: block;">
      The API has been updated! The github repository is out-of-date and mostly incompatible with the new API. Would you like to try out the new beta GUI for RiverBox?
    </span>
    <button onclick="closeModal()" class="highlightedButton">Let's roll!</button> 
    <button style="cursor: not-allowed;color:grey">Nope</button>
    </div>
</div>`,
  },
  "welcome": {
    "title": "Welcome to RiverBox!",
    "content": `<div style="display: flex;text-align:left;">
    <img src="assets/welcome.png" width="300px">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Welcome to RiverBox!</span>
    <span style="margin-top: 15px;display: block;">
    Welcome to RiverBox! Thank you for signing up 🥳
    </span>
    <button class="highlightedButton" onclick="window.location.reload()">Let's go!</button>
    </div>
</div>`
  },
  "oops": {
    "title": "Oops!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Sorry!</span>
    <span style="margin-top: 15px;display: block;">
    Oops, this page is not available in the beta version of RiverBox.
    </span>
    <button class="highlightedButton" onclick="closeModal()">Dismiss</button>
    </div>
</div>`
  },
  "testmodal": {
    "title": "testmodal.title",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">testmodal.header</span>
    <span style="margin-top: 15px;display: block;">
    testmodal.content
    </span>
    <button class="highlightedButton" onclick="closeModal()">testmodal.hightlightedbutton</button>
    <button onclick="closeModal()">testmodal.button</button>
    <button onclick="closeModal()">testmodal.button</button>
    </div>
</div>`
  },
  "exploreholup": {
    "title": "Beta alert!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Hol' up!</span>
    <span style="margin-top: 15px;display: block;">
    This page is still in beta. You might find a lot of bugs and design issues when visiting it. Would you like to continue?
    </span>
    <button class="highlightedButton" onclick="dispatchPageLoad('explore');closeModal()">Take me to it!</button>
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "aboutwait": {
    "title": "Beta alert!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Wait a minute!</span>
    <span style="margin-top: 15px;display: block;">
    This page is still in beta, so there's literally nothing to see on it. Do you still want to see it anyway?
    </span>
    <button class="highlightedButton" onclick="dispatchPageLoad('about');closeModal()">Yup!</button>
    <button onclick="closeModal()">Oh, nevermind then</button>
    </div>
</div>`
  },
  "betauseralert": {
    "title": "Beta alert!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Oof...</span>
    <span style="margin-top: 15px;display: block;">
    The user pages are still in the making, so unfortunately you cannot see a user's account for now.
    </span>
    <button class="highlightedButton" onclick="dispatchPageLoad('about');closeModal()">Yup!</button>
    <button onclick="closeModal()">Oh, nevermind then</button>
    </div>
</div>`
  },
}
