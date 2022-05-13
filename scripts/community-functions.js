function renameAboutCom(id, newAbout) {
  if (!state.flags.communities) return;
postData(apiPath + 'communitynewabout',  JSON.parse(`{"id": "${id}", "username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "about": "` + newAbout.replaceAll(`"`, "&quot;") + `"}`))
  .then(data => {
  viewCommunity(lastcommunityfetched);
});
}

function newBannerCom(id, newlink) {
  if (!state.flags.communities) return;
postData(apiPath + 'communitynewbanner',  JSON.parse(`{"id": "${id}", "username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "about": "` + newlink.replaceAll(`"`, "&quot;") + `"}`))
  .then(data => {
  viewCommunity(lastcommunityfetched);
});
}

function viewCommunity(page) {
  if (!state.flags.communities) return;
  postData(apiPath + 'getcommunity', JSON.parse(`{"communityid": "${page}"}`))
  .then(data => {
    if (data.error != null) {
      modal("", "Error loading this community!")
    }else{
dispatchPageLoad("community", true);
document.getElementById("banner").setAttribute("src", data.banner);
document.getElementById("joinbutton").setAttribute("onclick", "joinCom('" + page + "')");
document.getElementById("name").innerText = data.name;
document.getElementById("about").innerText = data.about;
document.getElementById("timestamp").innerText = moment(data.timestamp);
dispatchDocumentTitle(data.name);
lastcommunityfetched = page;

if (data.creator.toLowerCase() == localStorage.getItem("username").toLowerCase()) {
  document.getElementById("editCommunityControls").outerHTML = `<br><b>Manage community</b><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('comeditabout');lastcomedit = '${page}';">Edit about</span><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('bannereditxyz');lastcomedit = '${page}';">Edit banner</span>`;
}

// Load members
if (data.members == "&") {
document.getElementById("memberslist").innerHTML = `There are no members in this community.`;
}else{
let members = data.members.split("&").slice(1, -1);

for (let i = members.length - 1;i > -1;i--) {
  if (members[i].toLowerCase() == localStorage.getItem("username").toLowerCase()) {
    document.getElementById("joinbutton").nextSibling.remove();
    document.getElementById("joinbutton").remove();
  }
    postData(apiPath + 'getaccount', JSON.parse(`{"username": "` + members[i].toLowerCase() + `"}`))
  .then(data => {
      document.getElementById("memberslist").insertAdjacentHTML("afterBegin", `<img src="${data.pfp}" style="width:32px;border-radius:32px;vertical-align:middle" /> ${data.username}<br>`)
  });
}
}

fetch(apiPath + "latestposts")
  .then(response => response.json())
  .then(data => loadComPosts(data))

function loadComPosts(x) {
let chance1;
let chance2;
var postKeys = Object.keys(x);
for(let i = postKeys.length; i > 0; i--) {
datax = postKeys[i - 1];
b = "";

tooManyRepliesModal = "replyModal(";
if (Object.keys(x[datax].replies).length > 5) {
  tooManyRepliesModal = "modal('repliesoverloadalert', ";
}

for (let i = 0;i < Object.keys(x[datax].replies).length;i++) {
  b = b + `<div class="post" style="width: calc(30vh + 18%);margin-left: 2%;padding: 10px;margin-top: 5px;"><span style="color: var(--secondaryfont);cursor:pointer" onclick="viewUserPage('` + x[datax].replies[i].author + `')">` + x[datax].replies[i].author + `</span><span style="margin-top:7px;margin-bottom:7px;display:block;color:var(--postfont)">` + convertPost(x[datax].replies[i].reply) + `</span>
<div style="float: right;color: var(--secondaryfont);">` + moment(x[datax].replies[i].timestamp) + `</div>
</div><br>`
}

chance1 = Math.floor(Math.random() * 20);
chance2 = Math.floor(Math.random() * 2);
addPostt = false;
if (convertPost(x[datax].content).toLowerCase().includes(data.creator.toLowerCase())) {
  if (chance1 == 0) {
    addPostt = true;
  }
}
if (convertPost(x[datax].content).toLowerCase().includes(data.name.substring(0, 4).toLowerCase())) {
  if (chance2 == 0) {
    addPostt = true;
  }
}

if (addPostt) {
document.getElementById("posts").insertAdjacentHTML("beforeEnd", `<div class="post"><span style="color: var(--secondaryfont);cursor:pointer" onclick="viewUserPage('` + x[datax].author + `')"> <img id="img${i}" src="pfps/question mark.png" style="width: 30px;height:30px;border-radius:30px;vertical-align: middle;" /> ` + x[datax].author + `</span><span style="margin-top:7px;margin-bottom:7px;display:block;color:var(--postfont)">` + convertPost(x[datax].content) + `</span><img src="` + x[datax].attchmnt + `" class="attachement" onerror="this.remove()" /><br><span onclick="${tooManyRepliesModal}${i})" class="socialButton" ` + loggedSocial() + `>Reply</span> <span onclick="reportModal(${i})" class="socialButton" ` + loggedSocial() + `>Report</span>
<div ` + adminClassLoad() + `><span class="socialButton" onclick="modPost(${i})">(Moderate)</span> <span class="socialButton">(ID: ${i})</span></div>
<div style="float: right;color: var(--secondaryfont);">` + moment(x[datax].timestamp) + `</div></div><br>` + b + `<br>`);

postData(apiPath + 'postpfp', JSON.parse(`{"postid": "${i}"}`))
  .then(data => {
    document.getElementById(`img${i}`).setAttribute("src", data.pfp);
  });
}
}
}
}
})
};

function createCommunity(name) {
  if (!state.flags.communities) return;
    postData(apiPath + 'createcommunity', JSON.parse(`{"username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "name": "${name}"}`))
    .then(data => {
        viewCommunity(data.id);
    });
}

function joinCom(id) {
  loadFull();
postData(apiPath + 'entercom', JSON.parse(`{"username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "id": "${id}"}`))
  .then(data => {
      window.location.reload();
  });
}