let pageTypes = {
  "home": {
    "title": "Home",
    "content": `<img src="assets/welcome.png" width="200px" />
    <br>
    <span class="header">Welcome to RiverBox!</span>
    <br>
      <i>Hmm... this place seems empty.</i>
      <br>
      <button onclick="initLoadPosts()">View recent posts</button>`,
    "accountonly": false
  },
  "about": {
    "title": "About",
    "content": "RiverBox is a simple open-source social media app (...)",
    "accountonly": false
  },
  "explore": {
    "title": "Explore",
    "content": `<h1>Explore</h1><div style="text-align:left" id="tiles"><span class="header">Featured Users</span><br><span>Failed to reach API</span></div>`,
    "accountonly": false
  },
  "settings": {
    "title": "Settings",
    "content": "<h1>Settings</h1><span>Failed to reach API</span>",
    "accountonly": true
  },
  "messages": {
    "title": "Messages",
    "content": "<h1>Settings</h1><span>Failed to reach API</span>",
    "accountonly": true
  },
  "signup": {
    "title": "Sign Up",
    "content": `<div style="display: flex;text-align:left;">
    <img src="assets/hearts.png" width="300px">
    <div style="margin-left: 20px;">
    <span class="header">Sign up for Riverbox!</span>
    <span style="margin-top: 15px;display: block;">
    RiverBox: The simple &amp; friendly community to discuss absolutely anything.
    </span>

    <input placeholder="Insert a username..." id="usernameInput" />
    <button style="margin-top: 10px;" onclick="signUp()">
      Sign up!
    </button>
    <br><br>
    <span style="font-weight:bold">Username requirements:</span>
    <ul><li>A username can only contain letters (a-z, A-Z), dash (-) and underscore (_)</li><li>A username can only be between 3 to 20 characters long</li><li>A username cannot contain the word "Admin", "Hacker" or "Bot"</li></ul>
    </div>
</div>`,
    "accountonly": false
  }
}