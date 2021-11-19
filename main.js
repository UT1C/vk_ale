// ==UserScript==
// @name         vk_ale
// @description  lets disable it.
// @version      0.0.0.1
// @author       lightmanLP & mikk357

// @include      *://vk.com/*
// @run-at       document-start

// @license MIT
// @homepageURL https://github.com/UT1C/vk_ale
// @supportURL   https://github.com/UT1C/vk_ale/issues
// @downloadURL  https://raw.githubusercontent.com/UT1C/vk_ale/release/main.js
// @updateURL    https://raw.githubusercontent.com/UT1C/vk_ale/release/main.js
// ==/UserScript==

// feed redirect disable
if (location.href == "https://vk.com/feed" && origin == "https://vk.com")
{
    location.replace("https://vk.com/im");
}

// remove ecosystem menu
document.addEventListener(
    "DOMContentLoaded",
    function (event) {
        document.getElementById("top_ecosystem_navigation_link").remove();
        document.getElementById("top_ecosystem_navigation_menu").remove();
    }
);

// remove mini chat
document.addEventListener(
    "DOMContentLoaded",
    function (event) {
        document
            .getElementsByClassName("FCPanel FCPanel--wide FCPanel")[0]
            .remove();
    }
);