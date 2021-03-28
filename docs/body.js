var baseUrl = document.getElementById("ids").value;
var today = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
function toObjectUrl(url, outputTYPE,outputID) {
    fetch(url)
        .then ((response) => {
            return response.blob();
            })
        .then(blob=> {
            var blobUrl = URL.createObjectURL(blob);
            document.getElementById(outputID).setAttribute(outputTYPE, blobUrl);
        });
}

var imgUrl = baseUrl;
var imgUrlLocation = Number(imgUrl.search("og:image\" content=\""));
imgUrl = imgUrl.substr(imgUrlLocation, (imgUrlLocation + 100));
imgUrl = imgUrl.split("rf=\"")[0];
imgUrl = imgUrl.split("\"")[2];
setTimeout(function() { if (imgUrl == "undefined" || imgUrl == undefined || imgUrl == null || imgUrl == "") { window.location.reload(); }}, 2000);
document.getElementById('theImg').setAttribute("src", imgUrl);
toObjectUrl(imgUrl, "href", "openInNewTab");
toObjectUrl(imgUrl, "href", 'downloadPhoto'); document.getElementById("downloadPhoto").setAttribute("download", "bpotd_"+today+".jpg");
toObjectUrl(imgUrl, "href", 'downloadPhotoQuickmenu'); document.getElementById("downloadPhotoQuickmenu").setAttribute("download", "bpotd_"+today+".jpg");

var imgHeight = baseUrl;
var imgHeightLocation = Number(imgHeight.search("og:image:height\" content=\""));
imgHeight = imgHeight.substr(imgHeightLocation, (imgHeightLocation + 5));
imgHeight = imgHeight.split("rf=\"")[0];
imgHeight = imgHeight.split("\"")[2];
imgHeight = (imgHeight / 1.5);
imgHeight = Math.round(imgHeight);
document.getElementById('theImg').setAttribute("height", imgHeight);

var imgWidth = baseUrl;
var imgWidthLocation = Number(imgWidth.search("og:image:width\" content=\""));
imgWidth = imgWidth.substr(imgWidthLocation, (imgWidthLocation + 5));
imgWidth = imgWidth.split("rf=\"")[0];
imgWidth = imgWidth.split("\"")[2];
imgWidth = (imgWidth / 1.5);
imgWidth = Math.round(imgWidth);
document.getElementById('theImg').setAttribute("width", imgWidth);

var imgAlt = baseUrl;
var imgAltLocation = Number(imgAlt.search("og:title\" content=\""));
imgAlt = imgAlt.substr(imgAltLocation, (imgAltLocation + 60));
imgAlt = imgAlt.split("rf=\"")[0];
imgAlt = imgAlt.split("\"")[2];
document.getElementById('theImg').setAttribute("alt", imgAlt);
document.getElementById('theImg').setAttribute("title", imgAlt);
document.getElementById("theImgTitleAEm").innerHTML = imgAlt;
if (imgAlt == "undefined" || imgAlt == undefined || imgAlt == null || imgAlt == "") {
    document.title = document.title;
} else { document.title = imgAlt+"..."; }

var imgDesc = baseUrl;
document.getElementById("theImgAlt").style.width = (imgWidth - 5)+"px";
var imgDescLocation = Number(imgDesc.search("id=\"iotd_desc\""));
imgDesc = imgDesc.substr(imgDescLocation, (imgDescLocation + 1000));
imgDesc = imgDesc.split(">")[1];
imgDesc = imgDesc.split("<")[0];
document.getElementById('theImgAlt').innerHTML = imgDesc;

var readmore = baseUrl;
var readmoreLocation = Number(readmore.search("class=\"learn_more\""));
readmore = readmore.substr((readmoreLocation - 500), readmoreLocation);
readmore = readmore.split("href=\"")[1];
readmore = readmore.split("\"")[0];
readmore = "https://www.bing.com"+readmore;
readmore = readmore.replace(/&quot;/gi, "\"");
//console.log(readmore);
document.getElementById("read_more").setAttribute("href", readmore);
document.getElementById('theImgTitleA').href = readmore;

$(document).ready(function(){
    $("#share_quick").click(function() {
        document.getElementById("left").style.filter = "blur(8px)";
        document.getElementById("right").style.filter = "blur(8px)";
        $("#share_menu").css("display", "initial");
    });
});

$(document).ready(function(){
    $("#share_email").click(function() {
        var shareEmail = document.createElement("A");   // Create a <button> element
        shareEmail.href = "mailto:?subject="+imgAlt+"&body=Check out today's photo on Bing%E2%84%A2 with bpotd!%0D%0A"+location.href+"%0D%0A%0D%0ASent on behalf of "+location.href.split("/")[2]+".";
        shareEmail.click();
        $("#share_email").html("check");
        $("#share_email").css("color", "green");
        setTimeout(function() {
            $("#share_menu").hide();
            $("#left").css("filter","none");
            $("#right").css("filter","none");
            $("#share_email").html("email");
            $("#share_email").css("color", "initial");
        }, 750);
    });
});
$(document).ready(function(){
    $("#share_link").click(function() {
        navigator.clipboard.writeText(location.href+"?ref=internal_menu").then(function() {
            $("#share_link").html("check");
            $("#share_link").css("color", "green");
            setTimeout(function() {
                $("#share_menu").hide();
                $("#left").css("filter","none");
                $("#right").css("filter","none");
                $("#share_link").html("link");
                $("#share_link").css("color", "initial");
            }, 750);
          }, function() {
            window.alert("Failed to write to the clipboard.")
          });
    });
});
$(document).ready(function(){
    $("#share_close").click(function() {
        $("#share_menu").hide();
        $("#left").css("filter","none");
        $("#right").css("filter","none");
        $("#share_email").html("email");
        $("#share_email").css("color", "initial");
        $("#share_link").html("link");
        $("#share_link").css("color", "initial");
    });
});
if (document.getElementById("theImgTitleAEm").innerText.search("undefined") == 0) {
    location.reload();
}