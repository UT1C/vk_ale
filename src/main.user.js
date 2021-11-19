// ==UserScript==
// @name         vk_ale
// @description  lets disable it.
// @version      0.0.0.1
// @author       lightmanLP & mikk357

// @license      MIT
// @homepageURL  https://github.com/UT1C/vk_ale
// @supportURL   https://github.com/UT1C/vk_ale/issues
// @downloadURL  https://raw.githubusercontent.com/UT1C/vk_ale/release/src/main.user.js
// @updateURL    https://raw.githubusercontent.com/UT1C/vk_ale/release/src/main.user.js

// @match      *://vk.com/*
// @run-at       document-start

// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://raw.githubusercontent.com/UT1C/vk_ale/release/src/utils.js
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
        deleteElement("#top_ecosystem_navigation_link");
        deleteElement("#top_ecosystem_navigation_menu");
    }
);

// remove mini chat
document.addEventListener(
    "DOMContentLoaded",
    function (event) {
        deleteElement("#fastchat-reforged");
    }
);