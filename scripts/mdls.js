function modal(modalType, customMessage, customFunction, customTitle, dismissbutton) {
  if (customTitle == undefined) customTitle = "Message";
  if (dismissbutton == undefined) dismissbutton = true;
  
  if (modalType == "") {
    document.getElementById("modal-header").innerText = customTitle;
    if (dismissbutton == true) {
      document.getElementById("modal-content").innerHTML = customMessage + `<button onclick="closeModal();${customFunction}" class="highlightedButton" style="display:block">Dismiss</button>`;
    }else{
      document.getElementById("modal-content").innerHTML = customMessage;
    }
  }else{
    document.getElementById("modal-header").innerText = modalTypes[modalType].title;
    document.getElementById("modal-content").innerHTML = modalTypes[modalType].content;
  }
  $("#myModalContent").show("fade");
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  $("#myModal").effect("clip");
}