function follow() {
  modal("followerror");
}

function viewUserPage(page) {
postData('https://riverbox-api.lankybox02.repl.co/getaccount', {"username": page})
  .then(data => {
dispatchPageLoad("userpage", true);
document.getElementById("banner").setAttribute("src", data.banner);
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
if (page.toLowerCase() == localStorage.getItem("username").toLowerCase()) {
  document.getElementById("editProfileControls").outerHTML = `<br><br><b>Manage profile</b><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('editbio')">Edit biography</span><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('editprofilepic')">Edit avatar</span><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('editbanner')">Edit banner</span>`;
}

if (data.posts == "&") {
document.getElementById("posts").insertAdjacentHTML("beforeEnd", `This user has no posts.`);
}else{
let posts = data.posts.split("&");
posts.shift();

for (let i = posts.length - 1;i > -1;i--) {
    fetch("https://riverbox-api.lankybox02.repl.co/getpost/" + posts[i])
        .then(response => response.json())
        .then(data => encodeProfilePost(data))
}
}

dispatchDocumentTitle(data.username);
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

function encodeProfilePost(data) {  
if (data.content == "<span class='moderated-post-text'>(This post was moderated)</span>") {
document.getElementById("posts").insertAdjacentHTML("beforeEnd", `<br><br><div class="post">` + data.content + `</div>`)
}else{
document.getElementById("posts").insertAdjacentHTML("beforeEnd", `<br><br><div class="post">` + atob(data.content) + `<img src="` + data.attchmnt + `" width="450px" /></div>`)
}
}