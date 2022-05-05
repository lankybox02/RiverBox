function renameAboutCom(id, newAbout) {
postData('https://riverbox-api.lankybox02.repl.co/communitynewabout',  JSON.parse(`{"id": "${id}", "username": "` + localStorage.getItem("username") + `", "session": "` + localStorage.getItem("session") + `", "about": "` + newAbout.replaceAll(`"`, "&quot;") + `"}`))
  .then(data => {
dispatchPageLoad("community", true);
document.getElementById("banner").setAttribute("src", data.banner);
document.getElementById("name").innerText = data.name;
document.getElementById("about").innerText = data.about;
document.getElementById("timestamp").innerText = moment(data.timestamp);
dispatchDocumentTitle(data.name);
});
}

function viewCommunity(page) {
postData('https://riverbox-api.lankybox02.repl.co/getcommunity', JSON.parse(`{"communityid": "${page}"}`))
  .then(data => {
dispatchPageLoad("community", true);
document.getElementById("banner").setAttribute("src", data.banner);
document.getElementById("name").innerText = data.name;
document.getElementById("about").innerText = data.about;
document.getElementById("timestamp").innerText = moment(data.timestamp);
dispatchDocumentTitle(data.name);

if (data.creator.toLowerCase() == localStorage.getItem("username").toLowerCase()) {
  document.getElementById("editCommunityControls").outerHTML = `<br><br><b>Manage community</b><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('comeditabout');lastcomedit = '${page}';">Edit about</span><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('comeditname');lastcomedit = '${page}';">Edit name</span><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('comeditbanner');lastcomedit = '${page}';">Edit banner</span>`;
}

if (data.creator.toLowerCase() == localStorage.getItem("username").toLowerCase()) {
  document.getElementById("editCommunityControls").outerHTML = `<br><br><b>Manage community</b><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('comeditabout');lastcomedit = '${page}';">Edit about</span><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('comeditname');lastcomedit = '${page}';">Edit name</span><br><span style="text-decoration:underline;cursor:pointer;" onclick="modal('comeditbanner');lastcomedit = '${page}';">Edit banner</span>`;
}

// Load members
if (data.members == "&") {
document.getElementById("memberslist").innerHTML = `There are no members in this community.`;
}else{
let members = data.members.split("&");
members.shift();

for (let i = members.length - 1;i > -1;i--) {
    postData('https://riverbox-api.lankybox02.repl.co/getaccount', JSON.parse(`{"username": "` + members[0] + `"}`))
  .then(data => {
      document.getElementById("memberslist").insertAdjacentHTML("afterBegin", `<li>` + data.username + `</li>`)
  });
}
}
});
}