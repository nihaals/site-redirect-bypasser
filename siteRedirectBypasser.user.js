// ==UserScript==
// @name         Site Redirect Bypasser
// @namespace    https://github.com/OrangutanGaming/siteRedirectBypasser
// @version      0.1.10
// @description  Bypasses redirect sites
// @author       Nihaal Sangha
// @run-at       document-start
// @updateURL	 https://raw.githubusercontent.com/nihaals/site-redirect-bypasser/master/siteRedirectBypasser.user.js
// @downloadURL  https://raw.githubusercontent.com/nihaals/site-redirect-bypasser/master/siteRedirectBypasser.user.js
// @supportURL   https://github.com/nihaals/site-redirect-bypasser/issues
// @include      *bluemediafiles.com/creatinglinks8qJG9LfyFidlaldiwli1kTUSkSn82FylsejFCipVsahU2r2FXfgX2LgYHme3*
// @include      *steamcommunity.com/linkfilter*
// @include      *rover.ebay.*/rover/0/0/0?mpre=*
// @include      *anon.to/*
// @include      *creativecow.net/interstitial.php*
// @include      *guildwars2.com/home/leaving*
// @include      *checktinyurl.com/redirect*
// @include      *t.umblr.com/redirect*
// @include      *plus.url.google.com/url*
// ==/UserScript==

'use strict';

var url = document.location;

var regexs = [
    [/^https{0,1}:\/\/(?:www\.){0,1}bluemediafiles\.com\/creatinglinks8qJG9LfyFidlaldiwli1kTUSkSn82FylsejFCipVsahU2r2FXfgX2LgYHme3\?(?:[^&/]*?=[^&/]*?&?)*?xurl=([^&/]+)/g, 'http'],
    [/^https{0,1}:\/\/(?:www\.){0,1}steamcommunity\.com\/linkfilter\/\?(?:[^&/]*?=[^&/]*?&?)*?url=([^&/]+)/g, ''],
    [/^https{0,1}:\/\/(?:www\.){0,1}rover\.ebay\.[a-z.]+\/rover\/0\/0\/0\?(?:[^&/]*?=[^&/]*?&?)*?mpre=([^&/]+)/g, ''],
    [/^https{0,1}:\/\/(?:www\.){0,1}anon\.to\/\?(?:[^&/]*?=[^&/]*?&?)*?([^&/]+)/g, ''],
    [/^https{0,1}:\/\/(?:www\.){0,1}creativecow\.net\/interstitial\.php\?(?:[^&/]*?=[^&/]*?&?)*?url=([^&/]+)&id=\d/g, ''],
    [/^https{0,1}:\/\/(?:en|fr|es|de)-forum\.guildwars2\.com\/home\/leaving\?(?:[^&/]*?=[^&/]*?&?)*?target=([^&/]+)/g, ''],
    [/^https{0,1}:\/\/(?:www\.){0,1}checktinyurl\.com\/redirect\?(?:[^&/]*?=[^&/]*?&?)*?url=([^&/]+)/g, ''],
    [/^https{0,1}:\/\/(?:www\.){0,1}t\.umblr\.com\/redirect\?(?:[^&/]*?=[^&/]*?&?)*?z=([^&/]+)&.+/g, ''],
    [/^https{0,1}:\/\/(?:www\.){0,1}plus\.url\.google\.com\/url\?(?:[^&/]*?=[^&/]*?&?)*?url=([^&/]+)/g, '']
];

for (var i = 0; i < regexs.length; i++) {
    var regex = regexs[i][0];
    var redirect = regex.exec(url);
    if (redirect) {
        if (redirect.length == 2) {
            var prefix = regexs[i][1];
            redirect = redirect[1];
            redirect = decodeURIComponent(redirect);
            redirect = prefix + redirect;
            window.location.href = redirect;
            break;
        }
    }
}
