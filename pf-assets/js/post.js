/*
  post.js
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

// Change pf_adminEmail to YOUR email
var pf_adminEmail = "someone@example.tld";
// Change pf_requestPostSubject to your preferred email subject
var pf_requestPostSubject = "Pseudoforums - Request a Post"

if (pf_loggedIn === "true" && pf_status >= 3) {
  function pf_post() {
    window.location = "mailto:" + pf_adminEmail + "?subject=" + pf_requestPostSubject + "&body=Name: " + pf_name + "%0D%0A%0D%0AUsername: " + pf_username + "%0D%0A%0D%0AStatus: " + pf_status + "%0D%0A%0D%0ATitle of Post: " + document.getElementById("postTitle").value + "%0D%0A%0D%0AContent of Post: " + document.getElementById("post").value;
  }
} else {
  alert("Your rank is not high enough to access this Service.  You will be returned to the homepage");
  window.location = "index.html";
}
