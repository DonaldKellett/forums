/*
  mod.js
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

// Change this to YOUR email
var pf_adminEmail = "someone@example.tld";
var pf_requestBanTitle = "Pseudoforums: Request a User Ban";

if (pf_loggedIn === "true" && pf_status >= 4) {
  function pf_reportUser() {
    window.location = "mailto:" + pf_adminEmail + "?subject=" + pf_requestBanTitle + "&body=Name of Moderator: " + pf_name + "%0D%0A%0D%0AUsername of Moderator: " + pf_username + "%0D%0A%0D%0AStatus of Moderator: " + pf_status + "%0D%0A%0D%0AName or Username of User to be Reported: " + document.getElementById("reportName").value + "%0D%0A%0D%0ADetailed Reason why User Should Be Banned: " + document.getElementById("reportDetails").value;
  }
} else {
  alert("You are not authorised to use this Service.  You will be returned to the homepage.");
  window.location = "index.html";
}
