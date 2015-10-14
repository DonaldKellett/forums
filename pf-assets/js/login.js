/*
  login.js
  The login form for Pseudoforums
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

if (pf_loggedIn === "true") {
  alert("You are already logged in to your account.");
  window.location = "index.html";
} else {
  function pf_login() {
    for (i = 0; i < pf_database.length; i++) {
      if (document.getElementById("username").value === pf_database[i].username && document.getElementById("password").value === pf_database[i].password) {
        document.getElementById("error").style.display = "none";
        localStorage.setItem("pf_loggedIn", true);
        localStorage.setItem("pf_username", pf_database[i].username);
        localStorage.setItem("pf_password", pf_database[i].password);
        localStorage.setItem("pf_status", pf_database[i].status);
        localStorage.setItem("pf_name", pf_database[i].name);
        localStorage.setItem("pf_profilePic", pf_database[i].profilePic);
        localStorage.setItem("pf_title", pf_database[i].title);
        // pf_test();
        window.location = "index.html";
      } else {
        document.getElementById("error").style.display = "block";
      }
    }
  }
  function pf_test() {
    alert("You are now logged in with the following details:\n\npf_loggedIn: " + localStorage.getItem("pf_loggedIn") + "\npf_username: " + localStorage.getItem("pf_username") + "\npf_password: " + localStorage.getItem("pf_password") + "\npf_status: " + localStorage.getItem("pf_status") + "\npf_name: " + localStorage.getItem("pf_name") + "\npf_profilePic: " + localStorage.getItem("pf_profilePic") + "\npf_title: " + localStorage.getItem("pf_title"));
  }
}
