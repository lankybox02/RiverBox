let pageTypes = {
  "home": {
    "title": "Home",
    "content": ``,
    "script": `initLoadPosts()`,
    "accountonly": false,
    "padding": true,
    "banner": ""
  },
  "terms": {
    "title": "Terms of Service",
    "content": `<h1>RiverBox Terms of Service</h1>
By creating an account on RiverBox you agree that you have read, understood, and will comply with the following terms of service while using them.

<h2>Account Requirements</h2>
In order to create an account on RiverBox, you agree that you are not a minor, and if you are, you agree that you have parental permission to use the site. If you do not agree, please do not create an account on RiverBox.
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
<h2>User Roles & Badges</h2>
<b>Owner</b> - This badge is assigned to the owner of the RiverBox website. <i>The Owner badge can post and modify any content on the site.</i>
<br>
<b>Administrator</b> - This badge is assigned to RiverBox administrators. <i>The Administrator badge can post and modify any content on the site.</i>
<br>
<b>Beta-tester</b> - This badge is assigned to users who test new RiverBox updates before their release. <i>The Beta-tester badge has early access to new RiverBox updates.</i>
<br>
<b>User</b> - This badge is assigned to regular RiverBox users. <i>The User badge has no explicit permissions.</i>
<br>
<b>Banned</b> - This badge is given to RiverBox users who are currently banned. <i>The Banned badge cannot post or edit any content they have published on RiverBox.</i>`,
    "script": ``,
    "accountonly": false,
    "padding": true,
    "banner": ""
  },
  "about": {
    "title": "About",
    "content": "<h1>About</h1>This page is still under construction!",
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
    "content": `<h1>Explore</h1><div style="text-align:left" id="tiles"><span class="header">Featured Users</span><br><div style="height: 90px;overflow-x: hidden;" id="list"></div></div>`,
    "script": `exploreLoad()`,
    "accountonly": false,
    "padding": true,
    "banner": ""
  },
  "settings": {
    "title": "Settings",
    "content": `<h1>Settings</h1>
<span class="header">Theme</span><br><select onchange="changeTheme()" id="theme"><option value="dark">Dark Mode</option><option value="light" id="light">Light Mode</option></select><br><br><span class="header">Account</span><br><button onclick="logOut()">Log Out</button>`,
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
    "content": `<div style="text-align: left !important;padding: 0;"><img src="" style="object-fit: cover;width: 100%;height: 30vh;object-position: 50% 50%;opacity: 0.8" id="banner"><br>

<div style="margin-left: 20%;margin-top:-75px;opacity: 0.99;">
    <img src="" style="width:100px;height:100px;border-radius:150px;box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);vertical-align:middle" id="pfp">
    <span class="header" style="margin-left:10px;font-size: 40px;" id="usernameheader"></span>
</div>

<div style="display:flex;margin-top: 20px;margin-left: 20%;">
<div style="padding: 20px 15px 20px 15px;background-color: var(--primary);margin-right: 50px;border-radius: 10px;align-self: flex-start;width:20%"><b>Biography</b><br><span id="bio"></span><br><br><b>Role</b><br><span id="role"></span><br><br><b>Statistics</b><br>Joined <span id="timestamp"></span><div id="editProfileControls"></div></div>
<div style="padding: 10px 10px 5px 5px;" id="posts"><span class="header" style="margin-bottom: 20px;"><span id="username"></span>'s Posts</span>
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
<div style="padding: 20px 15px 20px 15px;background-color: var(--primary);margin-right: 50px;border-radius: 10px;align-self: flex-start;width:20%"><b>About</b><br><span id="about"></span><br><br><b>Statistics</b><br>Created <span id="timestamp"></span><br><br><b>Members</b><details><summary>Members List</summary><ul id="memberslist"></u></details><div id="editCommunityControls"></div></div>
<div style="padding: 10px 10px 5px 5px;" id="posts"><span class="header" style="margin-bottom: 20px;">Latest Posts</span>
<br>
<div id="posts">No posts are here.</div>
</div></div>`,
    "script": `// setTimeout(function(){modal('holdupadminbreakagemessage')}, 2000)`,
    "accountonly": false,
    "padding": false,
    "banner": ""
  },
  "messages": {
    "title": "Messages",
    "content": `<h1>Messages</h1>You do not seem to have any messages right now. Check back later!`,
    "script": ``,
    "accountonly": true,
    "padding": true,
    "banner": "This page is still being worked on."
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
    This post has reached the reply limit of 5 replies.
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
    <button class="highlightedButton" onclick="renameAboutCom(lastcomedit, document.getElementById('communityInput').value);closeModal()">Create!</button> 
    <button onclick="closeModal()">Nevermind</button>
    </div>
</div>`
  },
  "comeditname": {
    "title": "Change the community's subject!",
    "content": `<div style="display: flex;text-align:left;">
    <div style="margin-left: 20px;padding-top:20px;padding-bottom:20px;">
    <span class="header">What is this community's new name?</span>
    <span style="margin-top: 15px;display: block;">
    <textarea id="communityInput" placeholder="Community name..."></textarea>
    </span>
    <button class="highlightedButton" onclick="renameCom(lastcomedit, document.getElementById('communityInput').value);closeModal()">Create!</button> 
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
    The account you're trying to access is banned. If this is  your personal account, it is most likely that you broke the Terms of Service or the Community Rules & Guidelines.
    <br>
    <br>
    If you try going around this ban using alts, go ahead. Just make sure not to do the same mistakes that led you to get banned on this account 😅
    </span>
    <button class="highlightedButton" onclick="window.location.reload()">Exit</button>
    </div>
</div>`
  }
}