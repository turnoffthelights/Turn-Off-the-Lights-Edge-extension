function $(id) { return document.getElementById(id); }
// Install on www.stefanvd.net
// Install on www.turnoffthelights.com
if(window.location.href.match(/^http(s)?:\/\/(www\.)?stefanvd.net/i)||window.location.href.match(/^http(s)?:\/\/(www\.)?turnoffthelights.com/i)){
	if($('turnoffthelights-edge-install-button')){
		$('turnoffthelights-edge-install-button').style.display = 'none';
		$('turnoffthelights-edge-thanks-button').style.display = 'block';
	}
}
var totlscreenshotpage = "https://www.turnoffthelights.com/extension/capture-screenshot-of-video.html";
var developerwebsite = "https://www.turnoffthelights.com";
var totloptionspage = "https://www.turnoffthelights.com/extension/options.html";
var ambientaureaproduct = "https://chrome.google.com/webstore/detail/ambient-aurea/pkaglmndhfgdaiaccjglghcbnfinfffa";
var datetodayproduct = "https://microsoftedge.microsoft.com/addons/detail/jjghcbgcfjikflbolfokiclnppkmdeci";
var turnoffthelightsproduct = "https://microsoftedge.microsoft.com/addons/detail/fmamkbgpnienhphflfdamlhnljffjdgm";
var financetoolbarproduct = "https://chrome.google.com/webstore/detail/finance-toolbar/cichbngoomgnobmmjpagmbkimbamigie";
var propermenubarproduct = "https://chrome.google.com/webstore/detail/proper-menubar/egclcjdpndeoioimlbbbmdhcaopnedkp";
var fullscreenproduct = "https://chrome.google.com/webstore/detail/full-screen/gmimocjjppdelmhpcmpkhekmpoddgima";
var zoomproduct = "https://microsoftedge.microsoft.com/addons/detail/akclpjahoedloodjomjhnlmmblikemjj";
var donatewebsite = "https://www.turnoffthelights.com/donate.html";
var writereview = "https://microsoftedge.microsoft.com/addons/detail/fmamkbgpnienhphflfdamlhnljffjdgm";
var linkchangelog = "https://www.turnoffthelights.com/extension/edgechangelog.html";
var linktranslate = "https://www.turnoffthelights.com/extension/translate.html";
var linksupport = "https://www.turnoffthelights.com/support/";
var linkwelcomepage = "https://www.turnoffthelights.com/extension/edgewelcome.html";
var linkuninstall = "https://www.turnoffthelights.com/extension/edgeuninstalled.html";
var linkguide = "https://www.turnoffthelights.com/extension/edgeguide.html";
var linkshare = "https://www.turnoffthelights.com/shareextension.html";
var linkthemedownload = "https://www.turnoffthelights.com/browser/theme.html";
var browsernewtab = "chrome://newtab/";
var browserstore = "https://chrome.google.com";
var linkyoutube = "https://www.youtube.com/c/turnoffthelights?sub_confirmation=1";
var linkauroraplayerapp = "https://www.stefanvd.net/project/aurora-player/";
var linktotlmobileapp = "https://www.turnoffthelights.com/mobile.html";
var devmode = false;