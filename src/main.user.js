// ==UserScript==
// @name         vk_ale
// @description  lets disable it.
// @version      0.0.0.2
// @author       lightmanLP & mikk357

// @license      MIT
// @homepageURL  https://github.com/UT1C/vk_ale
// @supportURL   https://github.com/UT1C/vk_ale/issues
// @downloadURL  https://raw.githubusercontent.com/UT1C/vk_ale/release/src/main.user.js
// @updateURL    https://raw.githubusercontent.com/UT1C/vk_ale/release/src/main.user.js

// @match        https://vk.com/*
// @run-at       document-start
// @grant        GM_addStyle
// @grant        window.onurlchange

// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://raw.githubusercontent.com/UT1C/vk_ale/release/src/utils.js
// ==/UserScript==

$(window).on(
    "DOMContentLoaded urlchange",
    () => {
        // redirect from feed to im
        if (location.href == "https://vk.com/feed" || location.pathname == "/al_feed.php")
        {
            location.replace("https://vk.com/im");
        }
    
        // redirect on my music instead of govnovoz2007 choose of year
        else if (location.href.match(/^https:\/\/vk.com\/audios\d+$/) || location.pathname == "/al_audio.php")
        {
            location.replace("https://vk.com/audios0?section=all");
        }
    }
);

// remove ecosystem menu
deleteElement("#top_ecosystem_navigation_link");
deleteElement("#top_ecosystem_navigation_menu");

// remove mini chat
deleteElement("#fastchat-reforged");

// remove some ecosystem shit from top profile menu
deleteElement("#react_rootEcosystemAccountMenuEntry");
waitForElement(
    "#top_profile_menu",
    (elements) => {
        elements[0].style["boxShadow"] = "0 0 0 0.5px rgba(0, 0, 0, 0.25)";
    }
);

// remove shitty border radius
waitForElement(
    "#top_profile_menu",
    (elements) => {
        elements[0].style["borderRadius"] = "0 0 3px 3px";
    }
);

// remove family-friendly simplified left menu icons
deleteElement(".LeftMenu__icon");

// remove conversation recomendation
deleteElement(".ConvoRecommendList");