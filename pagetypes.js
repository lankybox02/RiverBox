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
    "content": "<h1>Explore</h1>The post API hasn't been implemented over this page yet.",
    "accountonly": false
  },
  "settings": {
    "title": "Settings",
    "content": "<h1>Settings</h1>The account API hasn't been implemented over this page yet.",
    "accountonly": true
  },
  "messages": {
    "title": "Messages",
    "content": "<h1>Settings</h1>The account API hasn't been implemented over this page yet.",
    "accountonly": true
  }
}