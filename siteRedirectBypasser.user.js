// ==UserScript==
// @name         Site Redirect Bypasser
// @namespace    https://github.com/OrangutanGaming/siteRedirectBypasser
// @version      0.1.0
// @description  Bypasses redirect sites
// @author       OrangutanGaming
// @run-at       document-start
// @updateURL	 https://raw.githubusercontent.com/OrangutanGaming/siteRedirectBypasser/master/siteRedirectBypasser.user.js
// @downloadURL  https://raw.githubusercontent.com/OrangutanGaming/siteRedirectBypasser/master/siteRedirectBypasser.user.js
// @supportURL   https://github.com/OrangutanGaming/siteRedirectBypasser/issues
// @match        *bluemediafiles.com/creatinglinks8qJG9LfyFidlaldiwli1kTUSkSn82FylsejFCipVsahU2r2FXfgX2LgYHme3*
// @match        *steamcommunity.com/linkfilter/?url=*
// ==/UserScript==

var url = content.document.location;

var regexs = [
    [/https{0,1}:\/\/bluemediafiles\.com\/creatinglinks8qJG9LfyFidlaldiwli1kTUSkSn82FylsejFCipVsahU2r2FXfgX2LgYHme3\?xurl=(.+)/g, 'http'],
    [/https{0,1}:\/\/steamcommunity\.com\/linkfilter\/\?url=(.+)/g, '']
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
