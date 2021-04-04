function stopIEbrowsing(ifNotIE) {
    if (navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1){
        document.body.innerHTML = "<div id=\"incompatibleBrowserDiv\"><title>Incompatble Browser</title><meta charset=\"utf-8\">"+
            "<link href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" rel=\"stylesheet\"/>" +
            "<center><h1>Your browser is not compatible with this webpage.</h1>" +
            "<p>Try one of these browsers: <a href=\"https://firefox.com\">Mozilla Firefox</a>, " +
            "<a href=\"https://chrome.com\">Google Chrome</a>, <a href=\"https://microsoft.com/edge\">Microsoft Edge</a></p>" +
            "<hr><code style=\""+
            "background-color: lightgrey; border: 1px solid black; border-radius: 6px; padding: 4px 8px; font-size: 12px; font-family: monospace;" +
            "\">" + navigator.userAgent +
            "</code></center></div>";
        return false; 
    }
}

$(function() {
    stopIEbrowsing(); 
});
