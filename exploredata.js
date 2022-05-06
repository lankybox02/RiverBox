let randomUsersDB = ["touchcreator", "zu-", "lanksy", "willy", "pkmnq", "michigan", "punpun", "pkmnq_new_acc", "ratio", "humen", "misty", "daily_meme"]; // users that have verified content... well , mostly LOL

function exploreLoad() {
  let randomnum;
  for (let i = 0;i < 7;i++) {
    randomnum = Math.floor(Math.random() * randomUsersDB.length);
    document.getElementById("list").insertAdjacentHTML("beforeEnd", `<div class="explore-tile" onclick="viewUserPage('` + randomUsersDB[randomnum] + `')"><span>` + randomUsersDB[randomnum] + `</span></div>`)
  }
}