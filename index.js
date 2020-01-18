var coopImg = document.querySelector("#cooper");
var coopText = document.querySelector("#cooperText");

coopImg.addEventListener("mouseover", function(){
    coopText.style.color="grey";
});
coopImg.addEventListener("mouseout", function(){
    coopText.style.color="black";
});

var musicVideoImg = document.querySelector("#musicVideo");
var musicVideoTxt = document.querySelector("#musicVideoText");

musicVideoImg.addEventListener("mouseover", function(){
    musicVideoTxt.style.color="grey";
});
musicVideoImg.addEventListener("mouseout", function(){
    musicVideoTxt.style.color="black";
});

var vrImg = document.querySelector("#vr");
var vrTxt = document.querySelector("#vrText");

vrImg.addEventListener("mouseover", function(){
    vrTxt.style.color = "grey";
});

vrImg.addEventListener("mouseout", function(){
    vrTxt.style.color = "black";
});

var graphcisImg = document.querySelector("#graphics");
var graphicsTxt = document.querySelector("#graphicsText");

graphcisImg.addEventListener("mouseover", function(){
    graphicsTxt.style.color = "grey";
});
graphcisImg.addEventListener("mouseout", function(){
    graphicsTxt.style.color = "black";
});

var codeImg = document.querySelector("#coding");
var codeTxt = document.querySelector("#codingText");

codeImg.addEventListener("mouseover", function(){
    codeTxt.style.color = "grey";
});

codeImg.addEventListener("mouseout", function(){
    codeTxt.style.color = "black";
});
