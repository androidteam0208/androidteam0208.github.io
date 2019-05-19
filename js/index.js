
var check = false;
function  showList() {
    // console.log("show list");
    var navbar = document.getElementById("nav");
    navbar.classList.add("navbarList");
    navbar.classList.remove("navbar");


}
function  hiddeList() {
    var listmav = document.getElementById("nav");
    listmav.classList.add("navbar");
    listmav.classList.remove("navbarList");


}
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

