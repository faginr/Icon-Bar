let homeTip = document.querySelector("#active");
let productTip = document.querySelector(".product-tip");
let mapTip = document.querySelector(".map-tip");
let contactTip = document.querySelector(".contact-tip");
let helpTip = document.querySelector(".help-tip");

function homeTrans(val){
    homeTip.style.opacity = val;
}

function productTrans(val){
    productTip.style.opacity = val;
}

function mapTrans(val){
    mapTip.style.opacity = val;
}

function contactTrans(val){
    contactTip.style.opacity = val;
}

function helpTrans(val){
    helpTip.style.opacity = val;
}