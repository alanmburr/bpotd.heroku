var baseUrl = document.getElementById("ids").innerHTML;
var today = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2);
var ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var hh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 

function toObjectUrl(url, outputTYPE,outputID) {
    fetch(url).then (function(response) {
            return response.blob();
            }).then(function(blob) {
            var blobUrl = URL.createObjectURL(blob);
            document.getElementById(outputID).setAttribute(outputTYPE, blobUrl);
        });
}

function toDataUrl(url, outputType, outputId) {
    var dwnl = new Image();
    dwnl.crossOrigin = 'Anonymous';

    // The magic begins after the image is successfully loaded
    dwnl.onload = function () {
        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
        canvas.height = dwnl.naturalHeight;
        canvas.width = dwnl.naturalWidth;
        ctx.drawImage(dwnl, 0, 0);
        // Unfortunately, we cannot keep the original image type, so all images will be converted to PNG
        // For this reason, we cannot get the original Base64 string
        var uri = canvas.toDataURL('image/png'),
            b64 = uri.replace(/^data:image.+;base64,/, 'data:image/png;base64,');

        document.getElementById(outputId).setAttribute(outputType, b64); //-> "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWP4z8DwHwAFAAH/q842iQAAAABJRU5ErkJggg=="
    };
    dwnl.src = url;
    //from: https://base64.guru/developers/javascript/examples/convert-image
}

var imgUrl = baseUrl;
var imgUrlLocation = Number(imgUrl.search("og:image\" content=\""));
imgUrl = imgUrl.substr(imgUrlLocation, (imgUrlLocation + 100));
imgUrl = imgUrl.split("rf=\"")[0];
imgUrl = imgUrl.split("\"")[2];

var imgDesc = baseUrl;
document.getElementById("theImgAlt").style.width = (imgWidth - 5)+"px";
var imgDescLocation = Number(imgDesc.search("id=\"iotd_desc\""));
imgDesc = imgDesc.substr(imgDescLocation, (imgDescLocation + 1000));
imgDesc = imgDesc.split("&gt;")[1];
imgDesc = imgDesc.split("&lt;")[0];

var imgWidth;
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
    $('main').css("width", "calc(70% + 100)");
    document.getElementById('theImg').setAttribute("width", imgWidth);
    declareThese();
} else {
    imgWidth = initImgWidth;
    $("#right_sidebar").show(); $("#left_sidebar").show(); $("#minimenu").hide();
    $('main').css("width", "70%");
    $("#theImgAlt").css("width", (initImgWidth - 5)+"px");
    document.getElementById('theImg').setAttribute("width", imgWidth);
    declareThese();
}
/*if (navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1){
    document.getElementById("stgs").style.display = "none";
    document.getElementById("ieprobOIINT").style.display = "none";
    document.getElementById("ieprobDP").style.display = "none";
}*/

var readmore = baseUrl;
var readmoreLocation = Number(readmore.search("class=\"learn_more\""));
readmore = readmore.substr((readmoreLocation - 500), readmoreLocation);
readmore = readmore.split("href=\"")[1];
readmore = readmore.split("\"")[0];
readmore = "https://www.bing.com"+readmore;
readmore = readmore.replace(/&quot;/gi, "\"");
readmore = readmore.replace(/&amp;/gi, "&");

var doit;
$(window).on('resize', function() {
    clearTimeout(doit);
    doit = setTimeout(function() {
        if (window.innerWidth <= 1320) {
            imgWidth = Math.round(window.innerWidth / 2);
            $("#right_sidebar").hide(); $("#left_sidebar").hide(); $("#minimenu").show();
            $("#read_mini").css("opacity", "50%");
            $('main').css("width", "initial");
            $("#theImgAlt").css("width", "70%");
            document.getElementById('theImg').setAttribute("width", imgWidth);
            declareThese();
        } else {
            imgWidth = initImgWidth;
            $("#right_sidebar").show(); $("#left_sidebar").show(); $("#minimenu").hide();
            $('main').css("width", "calc(70% + 100)");
            $("#theImgAlt").css("width", (initImgWidth - 5)+"px");
            document.getElementById('theImg').setAttribute("width", imgWidth);
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
        if (document.getElementById('mini_shareMenu').style.display == "none") {
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
    $("#font_toggle_mini").on("click", function() {
        if (document.getElementById("init_body").style.fontFamily == "serif") {
            $("#init_body").css("font-family", "var(--font-family-sans-serif)");
        } else {
            $("#init_body").css("font-family", "serif");
        }
    });
    $("#font_toggle").on("click", function() {
        if (document.getElementById("init_body").style.fontFamily == "serif") {
            $("#init_body").css("font-family", "var(--font-family-sans-serif)");
        } else {
            $("#init_body").css("font-family", "serif");
        }
    });
});
function declareThese() {
    if (navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > -1){
        toDataUrl(imgUrl, "href", "openInNewTab");
        toDataUrl(imgUrl, "href", 'downloadPhoto');
        toDataUrl(imgUrl, "href", 'downloadPhotoQuickmenu');
        toDataUrl(imgUrl, "href", 'downloadPhotoQuickmenu_mini');
    } else {
        toObjectUrl(imgUrl, "href", "openInNewTab");
        toObjectUrl(imgUrl, "href", 'downloadPhoto');
        toObjectUrl(imgUrl, "href", 'downloadPhotoQuickmenu');
        toObjectUrl(imgUrl, "href", 'downloadPhotoQuickmenu_mini');
    }
    document.getElementById("downloadPhoto").setAttribute("download", "bpotd_"+today+".jpg");
    document.getElementById("downloadPhotoQuickmenu").setAttribute("download", "bpotd_"+today+".jpg");
    document.getElementById("downloadPhotoQuickmenu_mini").setAttribute("download", "bpotd_"+today+".jpg");
    document.getElementById("theImgAlt").innerHTML = imgDesc;
}
declareThese();
