// ==UserScript==
// @name         Site Redirect Bypasser
// @namespace    https://github.com/OrangutanGaming/siteRedirectBypasser
// @version      0.1.3
// @description  Bypasses redirect sites
// @author       OrangutanGaming
// @run-at       document-start
// @updateURL	 https://raw.githubusercontent.com/OrangutanGaming/siteRedirectBypasser/master/siteRedirectBypasser.user.js
// @downloadURL  https://raw.githubusercontent.com/OrangutanGaming/siteRedirectBypasser/master/siteRedirectBypasser.user.js
// @supportURL   https://github.com/OrangutanGaming/siteRedirectBypasser/issues
// @include      *bluemediafiles.com/creatinglinks8qJG9LfyFidlaldiwli1kTUSkSn82FylsejFCipVsahU2r2FXfgX2LgYHme3*
// @include      *steamcommunity.com/linkfilter/?url=*
// @include      *rover.ebay.*/rover/0/0/0?mpre=*
// @include      *anon.to/?*
// @include      *creativecow.net/interstitial.php?url=*
// ==/UserScript==

var url = content.document.location;

var regexs = [
    [/https{0,1}:\/\/(?:www\.){0,1}bluemediafiles\.com\/creatinglinks8qJG9LfyFidlaldiwli1kTUSkSn82FylsejFCipVsahU2r2FXfgX2LgYHme3\?xurl=(.+)/g, 'http'],
    [/https{0,1}:\/\/(?:www\.){0,1}steamcommunity\.com\/linkfilter\/\?url=(.+)/g, ''],
    [/https{0,1}:\/\/(?:www\.){0,1}rover\.ebay\.[a-z.]+\/rover\/0\/0\/0\?mpre=(.+)/g, ''],
    [/https{0,1}:\/\/(?:www\.){0,1}anon\.to\/\?(.+)/g, ''],
    [/https{0,1}:\/\/(?:www\.){0,1}creativecow\.net\/interstitial\.php\?url=(.+)&id=\d/g, '']
];

for (i = 0; i < regexs.length; i++) {
    regex = regexs[i][0];
    redirect = regex.exec(url);
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
