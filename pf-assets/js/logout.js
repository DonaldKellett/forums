/*
  logout.js
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

localStorage.removeItem("pf_loggedIn");
localStorage.removeItem("pf_username");
localStorage.removeItem("pf_password");
localStorage.removeItem("pf_status");
localStorage.removeItem("pf_name");
localStorage.removeItem("pf_profilePic");
localStorage.removeItem("pf_title");
window.location = "index.html";
