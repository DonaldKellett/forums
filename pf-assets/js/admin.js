/*
  admin.js
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

if (pf_loggedIn === "true" && pf_status >= 7) {
  var tempString = "";
  for (i = 0; i < pf_database.length; i++) {
    tempString += "<tr>"
      + "<td>" + pf_database[i].name + " (" + pf_database[i].username + ")" + "</td>"
      + "<td>" + pf_database[i].title + " (" + pf_database[i].status + ")" + "</td>"
      + "<td><code>" + pf_database[i].profilePic + "</code></td>"
    + "</tr>";
  }
  document.getElementById("visual-database").innerHTML = tempString;
  function pf_fetchPassword() {
    for (i = 0; i < pf_database.length; i++) {
      if (document.getElementById("fetchPasswordOf").value === pf_database[i].username) {
        alert(pf_database[i].password);
      }
    }
  }
  function pf_loginAsAnotherUser() {
    for (i = 0; i < pf_database.length; i++) {
      if (document.getElementById("loginAs").value === pf_database[i].username) {
        localStorage.setItem("pf_loggedIn", true);
        localStorage.setItem("pf_username", pf_database[i].username);
        localStorage.setItem("pf_password", pf_database[i].password);
        localStorage.setItem("pf_status", pf_database[i].status);
        localStorage.setItem("pf_name", pf_database[i].name);
        localStorage.setItem("pf_profilePic", pf_database[i].profilePic);
        localStorage.setItem("pf_title", pf_database[i].title);
        window.location = "index.html";
      }
    }
  }
} else {
  alert("You are not authorised to use this Service.  You will be returned to the homepage.");
  window.location = "index.html";
}
