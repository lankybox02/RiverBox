let randomUsersDB = ["touchcreator", "zu-", "lanksy", "willy", "pkmnq", "misty", "daily_meme"];

function updateRecommandations() {
  if (localStorage.getItem("recommendthisuser") == null) {
    recommendThisUser = "unless?<>";
  }else{
    recommendThisUser = localStorage.getItem("recommendthisuser");
  }
}

updateRecommandations();

function exploreLoad() {
  let randomnum;
  for (let i = 0;i < 7;i++) {
    randomnum = Math.floor(Math.random() * randomUsersDB.length);
    document.getElementById("list").insertAdjacentHTML("beforeEnd", `<div class="explore-tile" onclick="viewUserPage('` + randomUsersDB[randomnum] + `')"><span>` + randomUsersDB[randomnum] + `</span></div>`)
  }
}