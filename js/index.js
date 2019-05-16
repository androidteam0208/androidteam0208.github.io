let x = screen.width;
console.log(x);

var check = true;
function  showList() {
    console.log("show list");
    var navbar = document.getElementById("nav");
    navbar.classList.add("navbarList");
    navbar.classList.remove("navbar");


}
function  hiddeList() {
    console.log("hidde list");
    var listmav = document.getElementById("nav");
    listmav.classList.add("navbar");
    listmav.classList.remove("navbarList");



}
function checkIcon() {
    if(check){
        showList();
        check= false;
    }
    else {
        hiddeList();
        check= true;
    }
}

