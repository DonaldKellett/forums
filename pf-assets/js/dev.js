/*
  dev.js
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

if (pf_loggedIn !== "true" || pf_status < 6) {
  alert("You are not authorised to view this page.  You will be returned to the homepage.");
  window.location = "index.html";
}
