function updateRecommandations() {
  if (localStorage.getItem("recommendthisuser") == null) {
    recommendThisUser = "unless?<>";
  }else{
    recommendThisUser = localStorage.getItem("recommendthisuser");
  }
}

function exploreLoad() {
  document.getElementById("com").value = Math.ceil(Math.random() * 2);
  document.getElementById("usr").value = localStorage.getItem("username").toLowerCase();
  // ...
}

updateRecommandations();