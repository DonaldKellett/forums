/*
  comment.js
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

// Set this variable to the email of the Administrator (i.e. YOUR email)
var pf_adminEmail = "someone@example.tld";


var pf_commentEmailTitle = "Pseudoforums - Commenting Request"

if (pf_loggedIn === "true" && pf_status >= 2) {
  function pf_comment() {
    window.location = "mailto:" + pf_adminEmail + "?subject=" + pf_commentEmailTitle + "&body=Name: " + pf_name + "%0D%0A%0D%0AUsername: " + pf_username + "%0D%0A%0D%0AStatus: " + pf_status + "%0D%0A%0D%0ATitle of Post to Comment On: " + document.getElementById("titleOfPost").value + "%0D%0A%0D%0AComment: " + document.getElementById("comment").value;
  }
} else {
  alert("Your rank is not high enough to access the content of this page.  You will be returned to the homepage.");
  window.location = "index.html";
}
