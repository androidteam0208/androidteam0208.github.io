var menuicon = document.getElementById("menuicon");
var check = false;
menuicon.onclick= function() {checkIcon()};
function checkIcon() {
    if(!check){
        showList();
        check= true;
    }
    else {
        hiddeList();
        check= false;
    }
}
function  showList() {
    var navbar = document.getElementById("nav");
    navbar.classList.add("navbarList");
    navbar.classList.remove("navbar");
}
function  hiddeList() {
    var listmav = document.getElementById("nav");
    listmav.classList.add("navbar");
    listmav.classList.remove("navbarList");
}

document.getElementsByTagName("BODY")[0].onresize = function() {getWidth()};

function getWidth() {
    let x = screen.width;
    if(x>1024){
        hiddeList();
        }
    else{
        if(this.check === true){
            this.check = !this.check;
            checkIcon();
        }
    }
}
//add vent click item menu to show dropdown
function addEventClick() {
    let dropBtn1 = document.querySelectorAll(".dropbtn");
    for (const btn of dropBtn1) {
        btn.addEventListener('click', function (event) {
            let dropDownDiv = this.parentNode.querySelector("div .dropdown-content");
            dropDownDiv.classList.toggle('show');
        })
    }
}
addEventClick();
//when click out item menu with class dropbtn -> hide dropdown content
window.addEventListener("click", function(event){
    let contents = document.getElementsByClassName('dropdown-content');
    if (!event.target.matches(".dropbtn")){
        for (let i = 0; i < contents.length; i++) {
            contents[i].classList.remove("show");
        }
    }
});








