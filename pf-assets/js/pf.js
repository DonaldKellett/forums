/*
  pf.js
  The JS file that powers the homepage of the Pseudoforum
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

if (pf_loggedIn === "true") {
  document.getElementById("public").style.display = "none";
  document.getElementById("secure").style.display = "block";
} else {
  document.getElementById("public").style.display = "block";
  document.getElementById("secure").style.display = "none";
}

for (i = 0; i < pf_database.length; i++) {
  for (j = 0; j < document.getElementsByClassName(pf_database[i].username).length; j++) {
    document.getElementsByClassName(pf_database[i].username)[j].innerHTML = "<p><img src='" + pf_database[i].profilePic + "' alt='" + pf_database[i].username + "' style='width: 100px; height: 100px;' /></p><p><span style='font-size: 18px; font-weight: bold;'>" + pf_database[i].name + "</span></p><p><span style='font-weight: bold;'>" + pf_database[i].title + "</span></p>";
  }
}
