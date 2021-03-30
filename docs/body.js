var baseUrl = document.getElementById("ids").value;
if (!String(baseUrl).search("200")) {
    var cors = document.createElement("A");
    cors.href = "https://cors-anywhere.herokuapp.com/corsdemo";
    cors.target = "_blank";
    cors.click();
}
var today = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
var ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var hh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 

function gid(id) {
    return document.getElementById(id);
}

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

if (imgUrl == undefined || imgUrl == "undefined" || imgUrl == null || imgUrl == "null" || imgUrl == "") {
    setTimeout(function() { location.reload(); }, 2000);
}

var imgHeight = baseUrl;
var imgHeightLocation = Number(imgHeight.search("og:image:height\" content=\""));
imgHeight = imgHeight.substr(imgHeightLocation, (imgHeightLocation + 5));
imgHeight = imgHeight.split("rf=\"")[0];
imgHeight = imgHeight.split("\"")[2];
imgHeight = (imgHeight / 1.5);
imgHeight = Math.round(imgHeight);

var imgWidth = baseUrl;
var imgWidthLocation = Number(imgWidth.search("og:image:width\" content=\""));
imgWidth = imgWidth.substr(imgWidthLocation, (imgWidthLocation + 5));
imgWidth = imgWidth.split("rf=\"")[0];
imgWidth = imgWidth.split("\"")[2];
imgWidth = Number(Math.round(imgWidth));

var initImgWidth = baseUrl;
var initImgWidthLocation = Number(initImgWidth.search("og:image:width\" content=\""));
initImgWidth = initImgWidth.substr(initImgWidthLocation, (initImgWidthLocation + 5));
initImgWidth = initImgWidth.split("rf=\"")[0];
initImgWidth = initImgWidth.split("\"")[2];
initImgWidth = (initImgWidth / 1.5);
initImgWidth = Number(Math.round(initImgWidth));

if (window.innerWidth <= 1320) {
    imgWidth = Math.round(window.innerWidth / 2);
    $("#right_sidebar").hide(); $("#left_sidebar").hide(); $("#minimenu").show();
    $("#read_mini").css("opacity", "50%");
    $('main').css("width", "initial");
    declareThese();
} else {
    imgWidth = initImgWidth;
    $("#right_sidebar").show(); $("#left_sidebar").show(); $("#minimenu").hide();
    $('main').css("width", "70%");
    declareThese();
}

var imgAlt = baseUrl;
var imgAltLocation = Number(imgAlt.search("og:title\" content=\""));
imgAlt = imgAlt.substr(imgAltLocation, (imgAltLocation + 60));
imgAlt = imgAlt.split("rf=\"")[0];
imgAlt = imgAlt.split("\"")[2];

var imgDesc = baseUrl;
document.getElementById("theImgAlt").style.width = (imgWidth - 5)+"px";
var imgDescLocation = Number(imgDesc.search("id=\"iotd_desc\""));
imgDesc = imgDesc.substr(imgDescLocation, (imgDescLocation + 1000));
imgDesc = imgDesc.split(">")[1];
imgDesc = imgDesc.split("<")[0];

var readmore = baseUrl;
var readmoreLocation = Number(readmore.search("class=\"learn_more\""));
readmore = readmore.substr((readmoreLocation - 500), readmoreLocation);
readmore = readmore.split("href=\"")[1];
readmore = readmore.split("\"")[0];
readmore = "https://www.bing.com"+readmore;
readmore = readmore.replace(/&quot;/gi, "\"");

if (imgAlt == "undefined" || imgAlt == undefined || imgAlt == null || imgAlt == "") {
    setTimeout(function() { location.reload(); }, 2000);
} else {
    document.title = imgAlt+"...";
}

var doit;
$(window).on('resize', function() {
    clearTimeout(doit);
    doit = setTimeout(function() {
        if (window.innerWidth <= 1320) {
            imgWidth = Math.round(window.innerWidth / 2);
            $("#right_sidebar").hide(); $("#left_sidebar").hide(); $("#minimenu").show();
            $("#read_mini").css("opacity", "50%");
            $('main').css("width", "initial");
            declareThese();
        } else {
            imgWidth = initImgWidth;
            $("#right_sidebar").show(); $("#left_sidebar").show(); $("#minimenu").hide();
            $('main').css("width", "70%");
            declareThese();
        }
    }, 100);
});
$(function () {
    $("#read").on("click", function() {
        if (document.getElementById("right_sidebar").style.display == "initial") {
            $("#right_sidebar").hide(); $("#left_sidebar").hide();
            $("#minimenu").css("display", "inline");
            $('main').css("width", "initial");
            $("#stgs").trigger("click");
            $("#share_close").trigger("click");
            function read2x() {
                var a = $("#read_mini");
                a.html("description");
                setTimeout(function () {
                    a.html("close");
                  }, 1000);
            }
            read2x();
            setInterval(read2x, 2000);
            declareThese();
        } else {
            $("#right_sidebar").show(); $("#left_sidebar").show(); $("#minimenu").hide();
            $('main').css("width", "initial"); $("#mini_shareMenu").hide();
            declareThese();
        }
    });
    $("#read_mini").on("click", function() {
        if (window.innerWidth <= 1320) {
            void(0);
        } else {
            if (document.getElementById("right_sidebar").style.display == "initial") {
                $("#right_sidebar").hide(); $("#left_sidebar").hide();
                $("#minimenu").css("display", "inline");
                $('main').css("width", "initial");
                declareThese();
            } else {
                $("#right_sidebar").css("display", "initial");
                $("#left_sidebar").show(); $("#minimenu").hide(); $("#mini_shareMenu").hide();
                $('main').css("width", "initial");
                declareThese();
            }
        }
    });
    $("#stgs").on("click", function() {
        $("#stgs").css("transform", "rotate(0deg)");
        document.getElementById("stgs").style.opacity = "50%";
        var x = document.getElementById("myLinks");
        if (x.style.display == "inline-block") {
            x.style.display = "none";
            document.getElementById("stgs").style.opacity = "100%";
        } else {
            x.style.display = "inline-block";
            $("#stgs").css("transform", "rotate(90deg)");
        }
    });
    $("#share_quick").on("click", function(){
        if (document.getElementById('rl_shareMenu').style.display == "none") {
            $("#rl_shareMenu").show(); } else { $("#rl_shareMenu").hide(); 
        }
    });
    $(".emailshare").on("click", function() {
        var shareEmail = document.createElement("A");
        shareEmail.href = "mailto:?subject="+imgAlt+"&body=Check out today's photo on Bing%E2%84%A2 with bpotd!%0D%0A"+location.href+"%0D%0A%0D%0ASent on behalf of "+location.href.split("/")[2]+".";
        shareEmail.click();
        $(this).html("check");
        $(this).css("color", "green");
        setTimeout(function() {
            $("#share_menu").hide();
            $("#left").css("filter","none");
            $("#right_sidebar").css("filter","none");
            $("#share_email").html("email");
            $("#share_email").css("color", "initial");
        }, 750);
    });
    $(".linkshare").on("click", function() {
        navigator.clipboard.writeText(location.href+"?ref=internal_menu").then(function() {
            $("#share_link").html("check");
            $("#share_link").css("color", "green");
            setTimeout(function() {
                $("#share_menu").hide();
                $("#left").css("filter","none");
                $("#right_sidebar").css("filter","none");
                $("#share_link").html("link");
                $("#share_link").css("color", "initial");
            }, 750);
        }, function() {
            window.alert("Failed to write to the clipboard.")
        });
    });
    $("#share_close").on("click", function() {
        $("#rl_shareMenu").css("display", "none");
        $("#share_email").html("email");
        $("#share_email").css("color", "initial");
        $("#share_link").html("link");
        $("#share_link").css("color", "initial");
    });
    $("#share_mini").on("click", function(){
        if (gid('mini_shareMenu').style.display == "none") {
            $("#mini_shareMenu").css("display", "inline");
            $("#mini_shareMenu").css("filter", "none");
        } else {
            $("#mini_shareMenu").hide();
            $("#mini_shareMenu").css("filter", "none");
        }
    });
    $("#share_close_mini").on("click", function() {
        $("#mini_shareMenu").css("display", "none");
        $("#share_email").html("email");
        $("#share_email").css("color", "initial");
        $("#share_link").html("link");
        $("#share_link").css("color", "initial");
    });
});

function declareThese() {
    document.getElementById('theImg').setAttribute("src", imgUrl);
    toObjectUrl(imgUrl, "href", "openInNewTab");
    toObjectUrl(imgUrl, "href", 'downloadPhoto');
    document.getElementById("downloadPhoto").setAttribute("download", "bpotd_"+today+".jpg");
    toObjectUrl(imgUrl, "href", 'downloadPhotoQuickmenu');
    document.getElementById("downloadPhotoQuickmenu").setAttribute("download", "bpotd_"+today+".jpg");
    toObjectUrl(imgUrl, "href", 'downloadPhotoQuickmenu_mini');
    document.getElementById("downloadPhotoQuickmenu_mini").setAttribute("download", "bpotd_"+today+".jpg");
    document.getElementById('theImg').setAttribute("width", imgWidth);
    document.getElementById('theImg').setAttribute("alt", imgAlt);
    document.getElementById('theImg').setAttribute("title", imgAlt);
    document.getElementById("theImgTitleAEm").innerHTML = imgAlt;
    document.getElementById('theImgAlt').innerHTML = imgDesc;
    document.getElementById("read_more").setAttribute("href", readmore);
    document.getElementById('theImgTitleA').href = readmore;
}
declareThese();
