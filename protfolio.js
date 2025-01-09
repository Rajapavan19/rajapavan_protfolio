const spans = document.querySelectorAll('.progress-bar span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});

let navbar = document.querySelector(".menu-icon");
function menui(){
    navbar.style.transfrom = "translateX(0px)"
}
function remove(){
    navbar.style.transfrom = "traslateX(550px)"
}

let menuList = document.getElementById("menuList")
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}
