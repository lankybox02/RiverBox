function follow() {
  modal("followerror");
}

function viewUserPage(page) {
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
document.getElementById("banner").setAttribute("src", data.banner);
if (data.cbm) {
  cinematicbannermode(document.getElementById("banner").src, data.cbmfit);
}
document.getElementById("pfp").setAttribute("src", data.pfp);
document.getElementById("usernameheader").innerText = data.username;
document.getElementById("bio").innerText = data.bio;
document.getElementById("role").innerText = data.role;
document.getElementById("username").innerText = data.username;
if (data.timestamp != "Unknown") {
document.getElementById("timestamp").innerText = moment(data.timestamp);
}else{
document.getElementById("timestamp").innerText = "???";
}
if (accowner) {
  document.getElementById("editProfileControls").outerHTML = `<br><br><b>Manage profile</b><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('editbio')">Edit biography</span><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('editprofilepic')">Edit avatar</span><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('editbanner')">Edit banner</span><br><select id="cbmoptions" onchange="dispatchcbmoptions()"><option id="disabledcbm" value="disablecbm()">Disable cinematic banner mode</option><option value="cinematicbannermode(document.getElementById('banner').src, true)" id="enabledcbm1">Enable cinematic mode</option><option value="cinematicbannermode(document.getElementById('banner').src, false)" id="enabledcbm2">Enable repeated cinematic mode</option></select><br><button class="highlightedButton" onclick="updatecbm()">Update banner options</button>`;
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
document.getElementById("posts").insertAdjacentHTML("beforeEnd", `<br><div class="post">` + atob(data.content) + `<img src="` + data.attchmnt + `" width="450px" /></div><br>${b}`)
}
}
}

function cinematicbannermode(url, cover) {
document.body.style.backgroundImage = `url(${url})`;
  if (cover) {
    document.body.style.backgroundSize = "cover";
  }else{
    document.body.style.backgroundSize = null;
  }
}

function disablecbm() {
document.body.style.backgroundImage = null;
document.body.style.backgroundSize = null;
}

function dispatchcbmoptions() {
  eval(document.getElementById("cbmoptions").value);
  // I'm sorry for this tsupid code im too lazy to make it better
  // You can make a PR and i'll happily merge it
}

function updatecbm() {
  postData('https://riverbox-api.lankybox02.repl.co/cbm', {"username": localStorage.getItem("username"), "session": localStorage.getItem("session"), cbm:document.getElementById("cbmoptions").value})
  .then(data => {
    window.location.reload();
  });
}