function addImage(imgurl) {
  if (attachements.length == 0) {
    if (imgurl != null) {
      if (imgurl.startsWith("https://u.cubeupload.com/") || imgurl.startsWith("https://i.ibb.co/") || imgurl.startsWith("https://assets.scratch.mit.edu/") && imgurl.length > 26 && imgurl.endsWith(".png") || imgurl.endsWith(".jpg") || imgurl.endsWith(".jpeg") || imgurl.endsWith(".gif")) {
        attachements.push(imgurl);
        alert("One attachement added.");
      }else{
          if (imgurl.startsWith("https://u.cubeupload.com/") || imgurl.startsWith("https://i.ibb.co/") || imgurl.startsWith("https://assets.scratch.mit.edu/")) {
            alert("Please make sure your link is valid!")
          }else{
            alert("Please only use cubeupload, imgBB and scratchassets to host your image!");
          }
      }
    }
  }else{
    alert("Server capacity is one attachement per post!")
  }
}