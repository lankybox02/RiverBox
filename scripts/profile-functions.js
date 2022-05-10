let hexes = {
  "red": {
    "main": "#ff2d2d",
    "border": "2px solid #ab1717"
  },
  "orange": {
    "main": "#ff9a2d",
    "border": "2px solid #ab7217"
  },
  "yellow": {
    "main": "#fff12d",
    "border": "2px solid #abab17"
  },
  "green": {
    "main": "#34ff2d",
    "border": "2px solid #35ab17"
  },
  "cyan": {
    "main": "#2ddcff",
    "border": "2px solid #17aba9"
  },
  "blue": {
    "main": "#2dc9ff",
    "border": "2px solid #1786ab"
  },
  "purple": {
    "main": "#7e2dff",
    "border": "2px solid #5f17ab"
  },
  "pink": {
    "main": "#fc2dff",
    "border": "2px solid #ab179f"
  },
}

function follow() {
  modal("followerror");
}

function viewUserPage(page) {
  if(state.session == undefined) {
    modal("", "You need to be logged in to access user pages!")
  }else{
  if (page.charAt(0) == "@") {
    page = page.slice(1);
  }
  if (page.charAt(page.length - 1).slice(-1) == " ") {
    page = page.slice(0, -1);
  }

  lastfetcheduser = page;
postData('https://riverbox-api.lankybox02.repl.co/getaccount', {"username": page})
  .then(data => {
    if (data.error != null) {
      modal("", "Error loading this userpage!")
    }else{
      accowner = page.toLowerCase() == localStorage.getItem("username").toLowerCase();
dispatchPageLoad("userpage", true);
if (data.cbm) {
  cinematicbannermode(data.banner, data.cbmfit);
}else{
  document.getElementById("banner").setAttribute("src", data.banner.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
}
darkMode();
if (localStorage.getItem("newtouserpages") == null) {
  localStorage.setItem("newtouserpages", false);
  modal("", `
    <span class="header">These are the profile pages!</span>
    <span style="margin-top: 15px;display: block;">
    <b>User badges:</b>
    <ul>
        <li><img src="badges/banned.png" style="vertical-align:middle;width:16px" /><br>Banned Account</li>
        <li><img src="badges/user.png" style="vertical-align:middle;width:16px" /><br>Average Account</li>
        <li><img src="badges/verified.png" style="vertical-align:middle;width:16px" /><br>Verified Account</li>
        <li><img src="badges/beta-tester.png" style="vertical-align:middle;width:16px" /><br>Beta-tester</li>
        <li><img src="badges/administrator.png" style="vertical-align:middle;width:16px" /><br>Administrator</li>
        <li><img src="badges/owner.png" style="vertical-align:middle;width:16px" /><br>Owner of RiverBox</li>
    </ul>`)
}

data.awards.split("&").splice(1).forEach(function(i){
    document.getElementById("awards").insertAdjacentHTML("afterBegin", encodeAward(i.replace("1", "bronzemedal").replace("2", "silvermedal").replace("3", "goldmedal").replace("4", "bronzetrophy").replace("5", "silvertrophy").replace("6", "goldtrophy").replace("7", "diamondaward")));
});
document.getElementById("pfp").setAttribute("src", data.pfp);
document.getElementById("usernameheader").innerText = data.username;
document.getElementById("bio").innerText = data.bio;
document.getElementById("role").setAttribute("src", data.role);
document.getElementById("username").innerText = data.username;
document.getElementById("status").innerText = data.status;
document.getElementById("statushex").style.backgroundColor = hexes[data.statushex].main;
document.getElementById("statushex").style.border = hexes[data.statushex].border;
if (data.timestamp != "Unknown") {
document.getElementById("timestamp").innerText = moment(data.timestamp);
}else{
document.getElementById("timestamp").innerText = "???";
}
if (page == 'lanksy') {
  $("#linkssection").html(`<b>Links</b>
<ul style="padding:0">
<li onclick="window.location.href = 'https://github.com/lankybox02/RiverBox'">Github</li> <li onclick="window.location.href = 'https://youtube.com/c/filterbud'">YouTube</li>  <li onclick="localStorage.clear();$('#pageContent').hide('fade');$('#navbar').hide('fade');$('.post-button').hide('fade');$('#version').hide('fade');modal('bannedbeta')">What's this button?</li>
</ul>`);
$("#linkssection").show("fade");
}

if (accowner) {
  document.getElementById("editProfileControls").outerHTML = `<br><br><b>Manage profile</b><br><span class="link" onclick="modal('editbio')">Edit biography</span><br><span class="link" onclick="modal('editprofilepic')">Edit avatar</span><br><span class="link" onclick="modal('editbanner')">Edit banner</span><br><span class="link" onclick="selColModal()">Edit status</span><br><select id="cbmoptions" onchange="dispatchcbmoptions()"><option id="disabledcbm" value="disablecbm('` + data.banner + `')">Disable cinematic mode</option><option value="cinematicbannermode('` + data.banner + `', true)" id="enabledcbm1">Enable cinematic mode</option><option value="cinematicbannermode('` + data.banner + `', false)" id="enabledcbm2">Enable repeated cinematic mode</option></select><br><button class="highlightedButton" onclick="updatecbm()">Update banner options</button>`;
  if (data.cbmfit) {
    document.getElementById("enabledcbm1").setAttribute("selected", "");
  }else{
    document.getElementById("enabledcbm2").setAttribute("selected", "");
  }
}

if (data.posts == "&") {
document.getElementById("posts").insertAdjacentHTML("beforeEnd", `This user has no posts.`);
}else{
let posts = data.posts.split("&");
posts.shift();

for (let i = posts.length - 1;i > -1;i--) {
    fetch("https://riverbox-api.lankybox02.repl.co/getpost/" + posts[i])
        .then(response => response.json())
        .then(data => encodeProfilePost(data, i))
    }
}

dispatchDocumentTitle(data.username);
    }
});
}

function editBio(lastBioEntered) {
  postData('https://riverbox-api.lankybox02.repl.co/bio', JSON.parse(`{"username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "bio": "` + lastBioEntered + `"}`))
  .then(data => {
      window.location.reload();
  });
}

function setProfileMedia(link, pfporbanner) {
  if (link.startsWith("http") && link.includes("://") && link.includes(".") && /(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(link) && link.length > 19) {
    postData('https://riverbox-api.lankybox02.repl.co/' + pfporbanner, JSON.parse(`{"username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "media": "` + link + `"}`))
    .then(data => {
        window.location.reload();
    });
  }else{
    modal("", "The link you have provided is either invalid or not an image.");
  }
}

function encodeProfilePost(data, id) { 

let b;
b = "";
if (data.replies[0] != null) {
  for (let i = 0;i < Object.keys(data.replies).length;i++)
    b = b + `<div class="post" style="width: calc(30vh + 18%);margin-left: 5%;padding: 10px;margin-top: 5px;"><span style="color: var(--secondaryfont);cursor:pointer" onclick="viewUserPage('` + data.replies[i].author + `')">` + data.replies[i].author + `</span><span style="margin-top:7px;margin-bottom:7px;display:block;color:var(--postfont)">` + convertPost(data.replies[i].reply) + `</span>
<div style="float: right;color: var(--secondaryfont);">` + moment(data.replies[i].timestamp) + `</div>
</div><br>`
}

if (data.author.toLowerCase() == lastfetcheduser.toLowerCase()) {
if (data.content == "<span class='moderated-post-text'>(This post was moderated)</span>") {
document.getElementById("posts").insertAdjacentHTML("beforeEnd", `<br><br><div class="post">` + data.content + `</div>`)
}else{
document.getElementById("posts").insertAdjacentHTML("beforeEnd", `<br><div class="post">` + atob(data.content) + `<img src="` + data.attchmnt + `" width="450px" /><br><div style="float: right;color: var(--secondaryfont);">` + moment(data.timestamp) + `</div></div><br>${b}`)
}
}
}
}

function cinematicbannermode(url, cover) {
document.body.style.backgroundImage = `url(${url})`;
document.getElementById("banner").outerHTML = `<div style="height:15vh" id="banner"></div>`;
document.getElementById("navbar").style.backgroundColor = "transparent";
  if (cover) {
    document.body.style.backgroundSize = "cover";
  }else{
    document.body.style.backgroundSize = null;
  }
}

function disablecbm(bannersrc) {
document.body.style.backgroundImage = null;
document.body.style.backgroundSize = null;
document.getElementById("navbar").style.backgroundColor = "var(--primary)";
if (bannersrc != null) {
  document.getElementById("banner").outerHTML = `<img src="` + bannersrc.replaceAll("<", "&lt;").replaceAll(">", "&gt;") + `" style="object-fit: cover;width: 100%;height: 30vh;object-position: 50% 50%;opacity: 0.8" id="banner">`;
}
}

function dispatchcbmoptions() {
  eval(document.getElementById("cbmoptions").value.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  // I'm sorry for this tsupid code im too lazy to make it better
  // You can make a PR and i'll happily merge it
}

function updatecbm() {
  postData('https://riverbox-api.lankybox02.repl.co/cbm', {"username": localStorage.getItem("username"), "session": localStorage.getItem("session"), cbm:document.getElementById("cbmoptions").value})
  .then(data => {
    window.location.reload();
  });
}

function encodeAward(i) {
  if (i != "diamondaward") {
    return `<img src="awards/${i}.png" width="24px" /> `;
  }else{
    return `<img src="awards/${i}.png" width="32px" /> `;
  }
}

function selColModal() {
  modal("", "<input id='inputt' placeholder='#onthewave'/><ul id='selectcolor' style='padding:0'></ul>", "", "Customize your status...", false);
for(let i = 0; i < Object.keys(hexes).length; i++) {
    document.getElementById("selectcolor").insertAdjacentHTML("afterBegin", `<li style="background-color:` + hexes[Object.keys(hexes)[i]].main + `;color:white;text-shadow: 0 0 10px black;" onclick="setStatus('` + Object.keys(hexes)[i] + `', document.getElementById('inputt').value)">` + Object.keys(hexes)[i] + `</li> `)
}
}

function setStatus(colorName, statusName) {
  if (statusName != "") {
    closeModal();
    loadFull();
    postData('https://riverbox-api.lankybox02.repl.co/poststatus', {"username": localStorage.getItem("username"), "session": localStorage.getItem("session"), "status": statusName, "statushex": colorName})
  .then(data => {
    window.location.reload();
  });
  }else{
    modal("", "You can't set an empty status!");
  }
}