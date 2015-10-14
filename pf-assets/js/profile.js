/*
  profile.js
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

if (pf_loggedIn === "true") {
  document.getElementById("profile").innerHTML = "<p><img src='" + pf_profilePic + "' alt='Profile Picture' style='width: 200px; height: 200px;' /></p>" + "<p><span style='font-size: 18px; font-weight: bold;'>" + pf_name + "</span> <span style='font-size: 18px;'>(" + pf_username + ")</span></p>" + "<p><span style='font-weight: bold;'>" + pf_title + "</span></p>";
} else {
  alert("You are not logged in.  You will be returned to the homepage.");
  window.location = "index.html";
}
