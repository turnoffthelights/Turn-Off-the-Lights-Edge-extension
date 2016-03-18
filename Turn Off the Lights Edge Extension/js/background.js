//================================================
/*

Turn Off the Lights
The entire page will be fading to dark, so you can watch the videos as if you were in the cinema.
Copyright (C) 2016 Stefan vd
www.stefanvd.net
www.turnoffthelights.com

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.


To view a copy of this license, visit http://creativecommons.org/licenses/GPL/2.0/

*/
//================================================


if (typeof msBrowser !== 'undefined') {
    chrome = msBrowser;
}
else if (typeof browser != 'undefined') {
    chrome = browser;
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.storage.local.get(['pageaction'], function (chromeset) {
        if ((tab.url.match(/^http/i) || tab.url.match(/^file/i)) && (chromeset["pageaction"] != true) && (chromeset["pageaction"] != true)) {
            if (tabId != null) {
                // fix Chrome bug, can't show icon on HDPI screen
                // chrome.pageAction.setIcon({tabId: tab.id, path: {'19': 'icons/icon1.png', '38':'icons/icon1@2x.png'}});
                // https://code.google.com/p/chromium/issues/detail?id=381383
                chrome.pageAction.show(tabId);
            }
        }
    });
});

chrome.pageAction.onClicked.addListener(function (tabs) {
    chrome.storage.local.get(['alllightsoff'], function (chromeset) {
        if ((chromeset["alllightsoff"] != true) && (chromeset["alllightsoff"] != true)) {
            chrome.tabs.executeScript(tabs.id, { file: "js/light.js" }, function () {
                if (chrome.runtime.lastError) {
                    // console.error(chrome.runtime.lastError.message);
                }
            });
        } else {
            chrome.tabs.executeScript(tabs.id, { file: "js/mastertab.js" }, function () {
                if (chrome.runtime.lastError) {
                    // console.error(chrome.runtime.lastError.message);
                }
            });
        }
    });
});

initwelcome();

function initwelcome() {
    chrome.storage.local.get(['firstRun'], function (chromeset) {
        if ((chromeset["firstRun"] != "false") && (chromeset["firstRun"] != false)) {
            chrome.tabs.create({ url: "https://www.turnoffthelights.com/extension/edgewelcome.html", selected: true })
            chrome.tabs.create({ url: "https://www.turnoffthelights.com/extension/edgeguide.html", selected: false })
            chrome.storage.local.set({ "firstRun": false, "version": "2.4" });
        }
    });
}