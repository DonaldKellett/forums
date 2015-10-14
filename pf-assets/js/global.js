/*
  global.js
  The JS file to be used on every page of the Pseudoforum
  NOTE: THIS FILE MUST BE USED BEFORE ALL OTHER "PSEUDOFORUMS" FILES
  (c) Donald Leung.  All rights reserved.
  MIT Licensed
*/

// Note: The "pf_" prefixes in this file (and all Pseudoforums files thereof) are crucial to avoid variable name clashes or Local Storage name clashes.

// Rank (@type [Array])
// Description:
// Banned - Viewing Rights Only
// Visitor - Viewing Rights Only
// Sub-Member - Viewing + Commenting Rights
// Member - Viewing + Commenting + Posting Rights
// Moderator - Viewing + Commenting + Posting + Moderating Rights
// Supermoderator - Viewing + Commenting + Posting + Moderating Rights
// Developer - Viewing + Commenting + Posting + Moderating Rights AND Access to Developer's Manual
// Administrator - Viewing + Commenting + Posting + Moderating Rights AND Access to Developer's Manual + Access to the Admin Panel

// Feel free to change the Rank titles when necessary; however, please note that if you add or remove entire Ranks the whole code will be affected - in that case you must fix the code yourself

var pf_rank = [
  "Banned",
  "Visitor",
  "Sub-Member",
  "Member",
  "Moderator",
  "Supermoderator",
  "Developer",
  "Administrator"
];

var pf_loggedIn = localStorage.getItem("pf_loggedIn");
var pf_username = localStorage.getItem("pf_username");
var pf_password = localStorage.getItem("pf_password");
var pf_status = parseInt(localStorage.getItem("pf_status"));
var pf_name = localStorage.getItem("pf_name");
var pf_profilePic = localStorage.getItem("pf_profilePic");
var pf_title = localStorage.getItem("pf_title");


// Navigation Panel

if (pf_loggedIn === "true") {
  document.getElementById("log").href = "logout.html";
  document.getElementById("log").innerHTML = "Logout";
  switch (pf_status) {
    case 0:
    case 1:
    document.getElementById("menubar").innerHTML = "<li><a href='index.html'>Home</a></li>" + "<li><a href='profile.html'>My Profile</a></li>";
    break;
    case 2:
    document.getElementById("menubar").innerHTML = "<li><a href='index.html'>Home</a></li>" + "<li><a href='profile.html'>My Profile</a></li>" + "<li><a href='comment.html'>Request Comment</a></li>";
    break;
    case 3:
    document.getElementById("menubar").innerHTML = "<li><a href='index.html'>Home</a></li>" + "<li><a href='profile.html'>My Profile</a></li>" + "<li><a href='comment.html'>Request Comment</a></li>" + "<li><a href='post.html'>Request Post</a></li>";
    break;
    case 4:
    case 5:
    document.getElementById("menubar").innerHTML = "<li><a href='index.html'>Home</a></li>" + "<li><a href='profile.html'>My Profile</a></li>" + "<li><a href='comment.html'>Request Comment</a></li>" + "<li><a href='post.html'>Request Post</a></li>" + "<li><a href='mod.html'>Moderator Panel</a></li>";
    break;
    case 6:
    document.getElementById("menubar").innerHTML = "<li><a href='index.html'>Home</a></li>" + "<li><a href='profile.html'>My Profile</a></li>" + "<li><a href='comment.html'>Request Comment</a></li>" + "<li><a href='post.html'>Request Post</a></li>" + "<li><a href='mod.html'>Moderator Panel</a></li>" + "<li><a href='dev.html'>Developer's Menu</a></li>";
    break;
    case 7:
    document.getElementById("menubar").innerHTML = "<li><a href='index.html'>Home</a></li>" + "<li><a href='profile.html'>My Profile</a></li>" + "<li><a href='comment.html'>Request Comment</a></li>" + "<li><a href='post.html'>Request Post</a></li>" + "<li><a href='mod.html'>Moderator Panel</a></li>" + "<li><a href='dev.html'>Developer's Menu</a></li>" + "<li><a href='admin.html'>Admin Panel</a></li>";
    break;
    default:
    document.getElementById("menubar").innerHTML = "<li><a href='index.html'>Home</a></li>";
  }
} else {
  document.getElementById("log").href = "login.html";
  document.getElementById("log").innerHTML = "Login";
  document.getElementById("menubar").innerHTML = "<li><a href='index.html'>Home</a></li>";
}

// Account Database (@type [Array]) - feel free to edit!

var pf_database = [
  {
    username: "dummy7",
    password: "dummy7",
    status: 7, // Administrator
    name: "Pseudoforumsadministrator",
    profilePic: "pf-images/admin.png"
  },
  {
    username: "dummy6",
    password: "dummy6",
    status: 6,
    name: "Pseudoforumsdeveloper"
  },
  {
    username: "dummy5",
    password: "dummy5",
    status: 5,
    name: "J. F. Kennedy",
    profilePic: "pf-images/kennedy.png"
  },
  {
    username: "dummy4",
    password: "dummy4",
    status: 4,
    name: "Abraham Lincoln",
    profilePic: "pf-images/lincoln.png"
  },
  {
    username: "dummy3",
    password: "dummy3",
    status: 3,
    name: "Jane Doe"
  },
  {
    username: "dummy2",
    password: "dummy2",
    status: 2,
    name: "John Doe"
  },
  {
    username: "dummy1",
    password: "dummy1",
    status: 1,
    name: "Jane Anderson"
  },
  {
    username: "dummy0",
    password: "dummy0",
    status: 0,
    name: "John Anderson"
  }
];

for (i = 0; i < pf_database.length; i++) {
  if (!pf_database[i].profilePic) {
    pf_database[i].profilePic = "pf-images/system/default.jpg";
  }
  pf_database[i].title = pf_rank[pf_database[i].status];
}

// console.log(pf_database);
