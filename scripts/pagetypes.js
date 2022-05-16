let pageTypes = {
  "home": {
    "title": "Home",
    "content": `<h1 style="margin-right: calc(20vh + 27%);">Feed</h1><div id="postshomex_"></div><button id="buttonloadmore" onclick="initLoadPosts()" class="highlightedButton">Load more posts....</button><br><br><br><br>`,
    "script": `initLoadPosts()`,
    "accountonly": false,
    "padding": true,
    "banner": ""
  },
  "terms": {
    "title": "Terms of Service",
    "content": `<h1>RiverBox Terms of Service</h1>
By creating an account on RiverBox you agree that you have read, understood, and will comply with the following terms of service while using them. If you do not agree, please do not create an account on RiverBox.

<h2>Account Requirements</h2>
In order to create an account on RiverBox, you agree that you are not a minor, and if you are, you agree that you have parental permission to use the site.
<br>
You may not create an account for the sole purpose of automating social actions (social actions such as posting, changing your biography, banner, profile picture, and so on).
<br>
When you create an account, you may not set your username to anything potentially triggering, inappropriate, or otherwise offensive to an individual or group.

<h2>Prohibited Usage</h2>
When using the RiverBox services, you agree to follow the <span class="link" onclick="dispatchPageLoad('guidelines')">Community Rules and Guidelines</span>.
<br>
As a user of RiverBox, you agree not to use the RiverBox services for illegal or misleading purposes.
<br>
You may not post any copyrighted content without the rights to the material you attempt to post.
<br>
You may not falsely report any content on the RiverBox website or attempt to trick the moderation team.
<br>
You may not attempt to bypass site restrictions by using alternative accounts, scripts, exploits, or otherwise. (For example, trying to go around an account ban or access moderation tools not intended to be accessed by the average user)
<h2>Account Termination</h2>
If we believe you have disrespected the Terms listed above, we reserve the right to terminate the access to your account, respectively.`,
    "script": ``,
    "accountonly": false,
    "padding": true,
    "banner": ""
  },
  "about": {
    "title": "About",
    "content": `<h1>About RiverBox</h1>The internet can be a dangerous place. People are often quick to judge and spread negativity.
<br><br>
Imagine a social media platform where people are kind and supportive of one another. A platform where people can share their thoughts and experiences without fear of judgment. That's what RiverBox is all about!
<br><br>
With RiverBox, you'll have a safe, friendly place to share your thoughts and connect with others who share your interests and values. We emphasize kindness and support, so you can feel confident sharing anything!
<br><hr><br>
RiverBox is a social media platform for everyone that emphasizes kindness and support. We believe that everyone deserves to be safe and supported online, and we are committed to making the internet a more inclusive space.
<br><br>
We strive to create a safe and welcoming online community for everyone. We are a diverse and inclusive community that welcomes people of all ages, races, ethnicities, religions, abilities, sexual orientations, and gender identities.
<br>
Our platform enables users to share their interests, creations, and learn new things from others in a friendly and welcoming environment. We believe that everyone should feel free to express themselves online without fear of judgment or harassment.
<br><br>
<span onclick="dispatchPageLoad('terms')" class="link">Terms</span> - 
<span onclick="dispatchPageLoad('guidelines')" class="link">Guidelines</span>`,
    "script": ``,
    "accountonly": false,
    "padding": true,
    "banner": ""
  },
  "guidelines": {
    "title": "Rules & Guidelines",
    "content": `<h1>Rules & Guidelines</h1>
RiverBox is a friendly and welcoming community for everyone of all religions, abilities, gender identities, races, sexual orientations and ethnicities. Please help us keep RiverBox a welcoming and supportive space by following these guidelines:
<br><br>
<b>Let's be sincere!</b>
<br>
Please do not impersonate anyone, leak nay information about a user, spread rumors or pretend to have any illness, disorder or disability. Remember that there's a person behind every single account on RiverBox, and they have feelings too!
<br><br>
<b>Have consideration!</b>
<br>
Please have common sense and remember every user in the RiverBox community shares different experiences and interests. Please never attack, mock, humiliate or provoke wars with any user or group because of their background.
<br><br>
<b>Safe and secure!</b>
<br>
For your safety, it's important to never share passwords, sessions, or any authentication data to your own personal account publicly. You should also never share your home address or any data that can be used to track you down.
<br><br>
<b>Be quiet!</b>
<br>
If you encounter an exploit, a loophole in the guidelines or a serious bug on RiverBox, please contact us about it and do not reveal it to anyone either publicly or privately until a patch is fully released.
<br><br>
<b>Acknowledge others!</b>
<br>
Remember that whenever you post something on RiverBox, it will be seen by lots of other users. This means that you shouldn't post any inappropriate, potentially triggering or graphically violent material.
<br><br>
<b>Let's build this community together!</b>
<br>
If you think a post, a biography, a profile picture, a banner, a username, or any other content posted by someone breaks these rules and guidelines, please click the report button on every page and we will take it down as soon as possible.
<br><br>
If you're ever feeling left out, come hang out on RiverBox and have some fun with your friends! Thank you - RiverBox`,
    "script": ``,
    "accountonly": false,
    "padding": true,
    "banner": ""
  },
  "explore": {
    "title": "Explore",
    "content": `<h1>Explore</h1><span class="header">Search Tools</span><br><input placeholder="Insert a username..." id="usr"> <button class="highlightedButton" onclick="viewUserPage(document.getElementById('usr').value)" id="usrclick">Load!</button><br><input placeholder="Insert a community ID..." id="com" value="1"> <button class="highlightedButton" onclick="viewCommunity(document.getElementById('com').value)" id="comclick">Load!</button><br><br><span class="header">Recommended</span><br><div id="communities"></span>`,
    "script": `
exploreLoad();
var input1 = document.getElementById("usr");
input1.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("usrclick").click();
  }
});
var input2 = document.getElementById("com");
input2.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("comclick").click();
  }
});
`,
    "accountonly": false,
    "padding": true,
    "banner": ""
  },
  "settings": {
    "title": "Settings",
    "content": `<h1>Settings</h1>
<div class="contentbox" style="width: 40%;margin: auto;">
<span class="header">Account</span>
<br><button onclick="modal('changesession')">Change Password</button>
</div>`,
    "script": `if(localStorage.getItem("theme") == "light"){document.getElementById("light").setAttribute("selected", "")}`,
    "accountonly": true,
    "padding": true,
    "banner": ""
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
    <input placeholder="Insert a username..." id="usernameInput" type="username" autocomplete="off" />
    <input placeholder="Insert a password..." id="sessionInput" type="password" autocomplete="off" />
    <p>Read the <span class="link" onclick="dispatchPageLoad('terms')">Terms of Service</span> and <span class="link" onclick="dispatchPageLoad('guidelines')">Community Guidelines</span>.</p>
    <button style="margin-top: 10px;" onclick="signUp()">
      Sign up!
    </button>
    <br><br>
    <span style="font-weight:bold">Username requirements:</span>
<br><br>
    A username can only contain letters (a-z, A-Z), dash (-) and underscore (_)
<br>
A username can only be between 3 to 10 characters long
<br>A username may not contain anything offensive or inappropriate
    </div>
</div>`,
    "script": `if(logged){dispatchLoadingScreen()}`,
    "accountonly": false,
    "padding": true,
    "banner": ""
  },
  "apifail": {
    "title": "Whoops!",
    "content": "<h1>Whoops!</h1><span>It seems like the API is down. Please create an issue on <a href='https://github.com/lankybox02/RiverBox'>our github page</a>. Sorry for the inconvenience :(</span>",
    "script": ``,
    "accountonly": false,
    "padding": true,
    "banner": ""
  },
  "userpage": {
    "title": "Userpage",
    "content": `<div style="text-align: left !important;padding: 0;"><img src="" style="object-fit: cover;width: 100%;height: 28vh;object-position: 50% 50%;opacity: 0.8" id="banner"><br>

<div style="display:flex">
<div class="contentbox" style="margin-left:15% !important;">
    <img src="" style="width:100px;height:100px;border-radius:150px;box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);vertical-align:middle" id="pfp">
    <span class="header" style="margin-left:10px;font-size: 40px;" id="usernameheader"></span> <img src="" id="role" class="profilebadge" onclick="modal('userbadges')" />
<br>
<div style="margin-top: -37px;margin-left: 115px;"><div style="display: inline-block;padding: 9px;border-radius: 20px;vertical-align: middle;" id="statushex"></div>
<span id="status">Fetching status...</span>
</div>
<div style="margin-left: 115px;">
  <button onclick="modal('sendmsg');">Send a message...</button> 
  <!-- <button onclick="recommendUser1();" id="recommend">Recommend</button> -->
</div>
</div>
<div class="contentbox" id="linkssection">
    <b>Links</b> <span onclick="modal('editlinks')" style="cursor:pointer" class="pencil">(🖉)</span>
<ul style="padding:0" id="ulforlinks">
</ul>
</div>
<div class="contentbox" style="width:25vh">
    <b>Information</b>
<table style="width:100%;border-collapse:collapse;">
  <tr>
    <td>Location</td>
    <td id="location"></td>
    <td style="cursor:pointer" onclick="modal('location')" class="pencil">(🖉)</td>
  </tr>
  <tr>
    <td>Role</td>
    <td id="rolex"></td>
    <td style="cursor:pointer" onclick="modal('getberified')" class="pencil">(🖉)</td>
  </tr>
  <tr>
    <td>Age</td>
    <td id="age"></td>
    <td style="cursor:pointer" onclick="modal('age')" class="pencil">(🖉)</td>
  </tr>
  <tr>
    <td>Gender</td>
    <td id="gender"></td>
    <td style="cursor:pointer" onclick="modal('gender')" class="pencil">(🖉)</td>
  </tr>
  <tr>
    <td>Likes</td>
    <td id="likes"></td>
    <td style="cursor:pointer" onclick="modal('likes')" class="pencil">(🖉)</td>
  </tr>
  <tr>
    <td>Dislikes</td>
    <td id="dislikes"></td>
    <td style="cursor:pointer" onclick="modal('dislikes')" class="pencil">(🖉)</td>
  </tr>
</table>
</div>
<div class="contentbox" style="width:35vh">
<b>Pinned Post</b>
<br><br>
<div class="post" style="border: 2px solid white" id="pinnedpost"><span id="pinnedtext">This user has no pinned post.</span><br><br><div id="pinneddate"></div></div>
</div>
</div>

<div style="display:flex;margin-top: 20px;margin-left: 15%;">
<div style="padding: 20px 15px 20px 15px;background-color: var(--primary);margin-right: 100px;border-radius: 10px;align-self: flex-start;width:20%">

<div id="parentvapor">
<img id="imgvapor">
<span id="vaporname">lanksy</span>
</div>

<br>
<b>Biography</b>
<br>
<span id="bio"></span>
<br><br>
<b>Statistics</b>
<br>
<table style="width:80%;border-collapse:collapse;">
  <tr>
    <td>Joined</td>
    <td><span id="timestamp"></span></td>
  </tr>
  <tr>
    <td>Posts</td>
    <td><span id="postcount">0</span></td>
  </tr>
  <tr>
    <td>Views</td>
    <td><span id="profileviews"></span></td>
  </tr>
</table>
<div id="editProfileControls"></div><div id="adminProfileControls"></div></div>
<div style="padding: 10px 10px 5px 5px;width:80%" id="posts"><span class="header" style="margin-bottom: 20px;"><span id="username"></span>'s Posts</span>
<br>
<div id="posts"></div>
</div></div>`,
    "script": ``,
    "accountonly": false,
    "padding": false,
    "banner": ""
  },
  "community": {
    "title": "Community",
    "content": `<div style="text-align: left !important;padding: 0;"><img src="" style="object-fit: cover;width: 100%;height: 30vh;object-position: 50% 50%;opacity: 0.8" id="banner"><br>

<div style="margin-left: 20%;margin-top:-75px;opacity: 0.99;">
    <span class="header" style="margin-left:10px;font-size: 40px;" id="name"></span>
</div>

<div style="display:flex;margin-top: 40px;margin-left: 20%;">
<div style="padding: 20px 15px 20px 15px;background-color: var(--primary);margin-right: 50px;border-radius: 10px;align-self: flex-start;width:20%"><b>About</b><br><span id="about"></span><br><button class="highlightedButton" id="joinbutton">Join</button><br><br><b>Statistics</b><br>Created <span id="timestamp"></span><br><br><b>Members</b><details><summary>Members List</summary><div id="memberslist"></div></details><div id="editCommunityControls"></div></div>
<div style="padding: 10px 10px 5px 5px;width: 70vh;"><span class="header">Latest Posts</span>
<br>
<br>
<div id="posts"></div>
</div></div>`,
    "script": `// setTimeout(function(){modal('holdupadminbreakagemessage')}, 2000)`,
    "accountonly": false,
    "padding": false,
    "banner": ""
  },
  "messages": {
    "title": "Messages",
    "content": `<h1>Messages</h1>`,
    "script": `dispatchPageLoad();loadMessages()`,
    "accountonly": true,
    "padding": true,
    "banner": ""
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
    "content": `<div style="text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What are you thinking about?</span>
    <span style="margin-top: 15px;display: block;">
    <div style="width:30%;margin-bottom: 20px;"><button onclick="document.getElementById('postText').value = document.getElementById('postText').value + '[b][/b]'">b</button> <button onclick="document.getElementById('postText').value = document.getElementById('postText').value + '[i][/i]'">i</button> <button onclick="document.getElementById('postText').value = document.getElementById('postText').value + '[u][/u]'">u</button> <button onclick="document.getElementById('postText').value = document.getElementById('postText').value + '[s][/s]'">s</button> <button onclick="addImage(prompt('Image URL...'))">img</button></div>
    <textarea id="postText" style="width:30%" placeholder="Write a new post here..."></textarea>
    </span>
    <button class="highlightedButton" onclick="sendPost(document.getElementById('postText').value)">Post</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "replyprompt": {
    "title": "What would you like to reply?",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What would you like to reply?</span>
    <span style="margin-top: 15px;display: block;">
    <textarea id="postText" placeholder="Write a new reply here..."></textarea>
    </span>
    <button class="highlightedButton" onclick="reply(replyPostId, document.getElementById('postText').value)">Reply</button> 
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
  "adminlogin": {
    "title": "Log-in prompt",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Do you want to log in?</span>
    <span style="margin-top: 15px;display: block;">
    <input placeholder="Username..." id="username" type="username" autocomplete="off" />
    <br>
    <input placeholder="Password..." id="session" type="password" />
    </span>
    <button onclick="localStorage.setItem('username', document.getElementById('username').value);localStorage.setItem('session', document.getElementById('session').value);window.location.reload()" class="highlightedButton">Log In</button>
    <button onclick="closeModal()">Cancel</button>
    </div>
</div>`
  },
  "changename": {
    "title": "Name change prompt",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Would you like to change your name?</span>
    <span style="margin-top: 15px;display: block;">
    <input placeholder="New name..." readonly>
    </span>
    <button class="disabledButton" disabled>Change</button>
    <button onclick="closeModal()">Cancel</button>
    </div>
</div>`
  },
  "betauseralertnew": {
    "title": "User pages are still beta!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Are you sure you would like to continue?</span>
    <span style="margin-top: 15px;display: block;">
    The user pages are still in the making, so there's a lot of bugs that you might encounter while using them. Are you sure you would like to continue?
    </span>
    <button onclick="loadUserBeta(lastUserPageVisited);closeModal()" class="highlightedButton">Show me!</button>
    <button onclick="closeModal()">Nah, it's fine</button>
    </div>
</div>`
  },
  "repliesoverloadalert": {
    "title": "Too many replies here!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">There's too many replies here!</span>
    <span style="margin-top: 15px;display: block;">
    This post has reached the reply limit of 10 replies.
    </span>
    <button onclick="closeModal()" class="highlightedButton">Dismiss</button>
    </div>
</div>`
  },
  "editbio": {
    "title": "Tell us about yourself!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What would you like your new bio to be?</span>
    <span style="margin-top: 15px;display: block;">
    <textarea id="bioNewInput" placeholder="Write your new bio here..."></textarea>
    </span>
    <button class="highlightedButton" onclick="editBio(document.getElementById('bioNewInput').value)">Apply!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "editprofilepic": {
    "title": "Show us your style!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What would you like your new profile picture to be?</span>
    <span style="margin-top: 15px;display: block;">
    <textarea id="pfpNewInput" placeholder="Insert the link to your profile picture here..."></textarea>
    </span>
    <button class="highlightedButton" onclick="setProfileMedia(document.getElementById('pfpNewInput').value, '2')">Apply!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "editbanner": {
    "title": "Show us your style!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What would you like your new banner to be?</span>
    <span style="margin-top: 15px;display: block;">
    <textarea id="bannerNewInput" placeholder="Insert the link to your banner here..."></textarea>
    </span>
    <button class="highlightedButton" onclick="setProfileMedia(document.getElementById('bannerNewInput').value, '3')">Apply!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "reportprompt": {
    "title": "Report this post",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Do you want to report this post?</span>
    <span style="margin-top: 15px;display: block;">
    Please enter the reason of reporting this post.
    <br>
    <textarea id="reportReasonInput" placeholder="Report reason..."></textarea>
    </span>
    <button class="highlightedButton" onclick="report(lastSelectedPostReportID, document.getElementById('reportReasonInput').value);closeModal()">Report!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "reportsuccess": {
    "title": "Success!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Thank you for the report!</span>
    <span style="margin-top: 15px;display: block;">
    Your report has been registered - we will review it in 3 days or less.
    </span>
    <button onclick="closeModal()" class="highlightedButton">Dismiss</button>
    </div>
</div>`
  },
  "newcommunity": {
    "title": "Create a new community!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Would you like to create a new community?</span>
    <span style="margin-top: 15px;display: block;">
    Please enter the name of your new community:
    <br>
    <textarea id="communityInput" placeholder="Community name..."></textarea>
    </span>
    <button class="highlightedButton" onclick="createCommunity(document.getElementById('communityInput').value);closeModal()">Create!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "comeditabout": {
    "title": "What's this community about?",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What is this community about?</span>
    <span style="margin-top: 15px;display: block;">
    Please enter a new about section for your community:
    <br>
    <textarea id="communityInput" placeholder="Community description..."></textarea>
    </span>
    <button class="highlightedButton" onclick="renameAboutCom(lastcomedit, document.getElementById('communityInput').value);closeModal()">Apply!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "bannereditxyz": {
    "title": "What does this community look like?",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What does this community look like?</span>
    <span style="margin-top: 15px;display: block;">
    Please enter the link for the new community banner:
    <br>
    <textarea id="communityInput" placeholder="New banner link..."></textarea>
    </span>
    <button class="highlightedButton" onclick="newBannerCom(lastcomedit, document.getElementById('communityInput').value);closeModal()">Apply!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "changesession": {
    "title": "Would you like to change your password?",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Would you like to change your password?</span>
    <span style="margin-top: 15px;display: block;">
    <input autocomplete="off" type="password" id="newsession" placeholder="Enter a new password..." />
    </span>
    <button class="highlightedButton" onclick="changeSession(document.getElementById('newsession').value);closeModal()">Change!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "holdupadminbreakagemessage": {
    "title": "Hol' up...",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Hol' up...</span>
    <span style="margin-top: 15px;display: block;">
    Are you sure you're supposed to be here?
    </span>
    <button class="highlightedButton" onclick="window.location.reload()">Exit</button>
    </div>
</div>`
  },
  "bannedbeta": {
    "title": "You're banned!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">You're banned!</span>
    <span style="margin-top: 15px;display: block;">
    The account you're trying to access is banned.
    <br>
    <br>
    <b>Ban reasoning:</b>
    <br>
    <span id="banreason"></span>
    </span>
    <button class="highlightedButton" onclick="window.location.reload()">Exit</button>
    </div>
</div>`
  },
  "hashanmsasdr": {
    "title": "Are you sure you're supposed to be here?",
    "content": `<div style="display: flex;text-align:left;">
    <img src="assets/wait.png" width="300px">
    <div style="margin-left: 20px;padding-top:20px;">
    <span class="header">Are you sure you're supposed to be here?</span>
    <span style="margin-top: 15px;display: block;">
    Hol'up.. you do not have authorisation to access this page. This page is meant to be for administrators only!
    </span>
    <button class="highlightedButton" onclick="window.location.href = '/'">Nevermind...</button>
    </div>
</div>`
  },
  "sendmsg": {
    "title": "Send a message!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Would you like to send a message?</span>
    <span style="margin-top: 15px;display: block;">
    <textarea id="msg" placeholder="Message content..."></textarea>
    </span>
    <button class="highlightedButton" onclick="sendMessageToUser(lastfetcheduser, document.getElementById('msg').value);closeModal()">Create!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "banuser": {
    "title": "Ban this user?",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Would you like to ban this user?</span>
    <span style="margin-top: 15px;display: block;">
    <textarea id="banreason" placeholder="Ban reasoning..."></textarea>
    </span>
    <button class="highlightedButton" onclick="ban(lastfetcheduser, document.getElementById('banreason').value);closeModal()">Ban!</button> 
    <button onclick="closeModal()">Nah, leave it!</button>
    </div>
</div>`
  },
  "userbadges": {
    "title": "What are user badges?",
    "content": `<span class="header">What are user badges?</span>
    <span style="margin-top: 15px;display: block;">
    The user badges are small icons next to usernames that define someone's role on RiverBox.
    <br><br>
    <b>User badges:</b>
    <ul>
        <li><img src="badges/banned.png" class="userbadgeprompt" /><br>Banned Account</li>
        <li><img src="badges/user.png" class="userbadgeprompt" /><br>Average Account</li>
        <li><img src="badges/verified.png" class="userbadgeprompt" /><br>Verified Account</li>
        <li><img src="badges/beta-tester.png" class="userbadgeprompt" /><br>Developement Team</li>
        <li><img src="badges/administrator.png" class="userbadgeprompt" /><br>Administrator</li>
        <li><img src="badges/owner.png" class="userbadgeprompt" /><br>Owner of RiverBox</li>
    </ul>
    <button class="highlightedButton" onclick="closeModal()">Alright!</button>`
  },
  "getberified": {
    "title": "Do you want to get verified?",
    "content": `<span class="header">Do you want to get verified?</span>
    <span style="margin-top: 15px;display: block;">
So, you would like to get verified on RiverBox? Nice, let's guide you through the requirements.
<br><br><b>Verification Requirements</b><br>
- You must have at least 5 posts on your RiverBox profile<br>
- You must have a unique username, profile picture, banner, and biography<br>
- Your account must represent the real creator/brand you’re claiming to be<br>
- You must be active and post frequently on RiverBox (at least every week)<br>
- You must not have any more than 2 moderated posts on your profile<br>
- You must fill out the information section on your profile entirely<br>
- Your RiverBox account must be created at least 7 days ago
    </span>
<br>
    <button class="highlightedButton" onclick="getverifiedrequest()">Submit!</button> 
    <button onclick="closeModal()">Oh, guess not :(</button> 
`
  },
  "verifyuser": {
    "title": "Would you like to verify this user?",
    "content": `<span class="header">Would you like to verify this user?</span>
    <span style="margin-top: 15px;display: block;">
This action is completely undo-able.
<br><br>
    <button class="highlightedButton" onclick="verifyUser()">Yes, verify, verify, verify!</button>
    <button onclick="closeModal()">Nevermind...</button> 
`
  },
  "lgbtq": {
    "title": "Join the LGBTQ+ Community!",
    "content": `<span class="header">Would you join the LGBTQ+ Community?</span>
    <span style="margin-top: 15px;display: block;">
Would you like to join the LGBTQ+ community on RiverBox?
<br><br>
    <button class="highlightedButton" onclick="viewCommunity('1');closeModal()">Lemme take a look at it</button>
    <button onclick="closeModal()">Nah thanks</button> 
`
  },
  "bblm": {
    "title": "Join the BLM Community!",
    "content": `<span class="header">Would you join the BLM Community?</span>
    <span style="margin-top: 15px;display: block;">
Would you like to join the BLM community on RiverBox?
<br><br>
    <button class="highlightedButton" onclick="viewCommunity('2');closeModal()">Lemme take a look at it</button>
    <button onclick="closeModal()">Nah thanks</button> 
`
  },
  "feedback": {
    "title": "Send us feedback!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What do you think of RiverBox?</span>
    <span style="margin-top: 15px;display: block;">
    <textarea id="msg" placeholder="Feedback..."></textarea>
    </span>
    <button class="highlightedButton" onclick="sendMessageToUser('lanksy', '[Feedback Modal]space&&' + document.getElementById('msg').value);modal('', 'Sent! Thank you for your feedback - we will try our best to make your experience better on the site :)');">Send!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "location": {
    "title": "Edit information",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Edit your information...</span><br>
    <span style="margin-top: 15px;display: block;">
    <select id="newtext">
      <option value="United States">United States</option>
      <option value="United Kingdom">United Kingdom</option>
      <option value="Canada">Canada</option>
      <option value="Australia">Australia</option>
      <option value="Russia">Russia</option>
      <option value="India">India</option>
      <option value="China">China</option>
      <option value="South Korea">South Korea</option>
      <option value="Switzerland">Switzerland</option>
      <option value="Romania">Romania</option>
      <option value="">Other</option>
      <option value="">Prefer not to say</option>
    </select>
    </span>
    <button class="highlightedButton" onclick="editType('location', document.getElementById('newtext').value);">Apply!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "age": {
    "title": "Edit information",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Edit your information...</span>
<br>
    <span style="margin-top: 15px;display: block;">
<select id="newtext">
    <option value="Under 13">Under 13</option>
    <option value="13">13</option>
    <option value="14-16">14-16</option>
    <option value="17">17</option>
    <option value="18">18</option>
    <option value="18+">18+</option>
    <option value="">Prefer not to say</option>
</select>
    </span>
    <button class="highlightedButton" onclick="editType('age', document.getElementById('newtext').value);">Apply!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "gender": {
    "title": "Edit information",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Edit your information...</span><br>
    <span style="margin-top: 15px;display: block;">
<select id="newtext">
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Agender">Agender</option>
    <option value="Bigender">Bigender</option>
    <option value="Genderfluid">Genderfluid</option>
    <option value="Non-binary">Non-binary</option>
    <option value="">Other</option>
    <option value="">Prefer not to say</option>
</select>
    </span>
    <button class="highlightedButton" onclick="editType('gender', document.getElementById('newtext').value);">Apply!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "likes": {
    "title": "Edit information",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What do you like?</span><br>
    <span style="margin-top: 15px;display: block;">
    <input id="newtext" value="Kittens" maxlength="15" />
    </span>
    <button class="highlightedButton" onclick="editType('likes', document.getElementById('newtext').value);">Apply!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "dislikes": {
    "title": "Edit information",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What do you dislike?</span><br>
    <span style="margin-top: 15px;display: block;">
    <input id="newtext" value="Racism" maxlength="15" />
    </span>
    <button class="highlightedButton" onclick="editType('dislikes', document.getElementById('newtext').value);">Apply!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "pin": {
    "title": "Pin this post!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
<span class="header">Would you like to pin this post?</span><br>
    <span style="margin-top: 15px;display: block;">
    Would you like to pin this post?
    </span>
    <button class="highlightedButton" onclick="editType('pinned', lastpin);">Yes, pin it!</button> 
    <button onclick="closeModal()">No, thanks</button>
    </div>
</div>`
  },
  "editlinks": {
    "title": "Edit your links!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
<span class="header">Would you like to edit your links?</span><br>
    <span style="margin-top: 15px;display: block;">
    Please select an option.
    </span>
    <button class="highlightedButton" onclick="modal('newlinkprompt');"> Add a new link </button> 
    <button class="highlightedButton" onclick="editType('links', '');"> Clear all links </button> 
    <button onclick="closeModal()">I changed my mind</button>
    </div>
</div>`
  },
  "newlinkprompt": {
    "title": "Add a new link!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">Add a new link!</span><br>
    <span style="margin-top: 15px;display: block;">
    <input id="newtext" placeholder="Link name..." maxlength="15" /><br>
    <input id="newtext1" placeholder="Link URL..." maxlength="50" />
    </span>
    <button class="highlightedButton" onclick="addLink(document.getElementById('newtext').value, document.getElementById('newtext1').value);">Add!</button> 
    <button onclick="closeModal()">I changed my mind</button>
    </div>
</div>`
  }
}