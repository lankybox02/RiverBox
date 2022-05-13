function modal(modalType, customMessage, customFunction, customTitle, dismissbutton) {
  if (customTitle == undefined) customTitle = "Message";
  if (dismissbutton == undefined) dismissbutton = true;
  
  if (modalType == "") {
    $("#modal-header").text(customTitle);
    if (dismissbutton == true) {
      document.getElementById("modal-content").innerHTML = customMessage + `<button onclick="closeModal();${customFunction}" class="highlightedButton" style="display:block">Dismiss</button>`;
    }else{
      $("#modal-content").html(customMessage);
    }
  }else{
    $("#modal-header").text(modalTypes[modalType].title);
    $("#modal-content").html(modalTypes[modalType].content);
  }
  $("#myModalContent").show("fade");
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  $("#myModal").effect("clip");
}