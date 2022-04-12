let mobile_button = document.getElementById("small-width-menu-button");
let menu_container = document.getElementById("menu-container");
let cont = 0;





function open_mobile_menu(){
    menu_container.style = "";
    if(cont % 2 == 0)
        menu_container.style.maxHeight = "30em";
    else
        menu_container.style.maxHeight = "0";
    cont++;
}


function close_mobile_menu_desktop_mode(){
    if(window.matchMedia("(min-width: 900px)").matches){
    menu_container.style.transition = "none";
    menu_container.style.maxHeight = "0";
    cont = 0;
    }
}


window.addEventListener("resize", close_mobile_menu_desktop_mode);
mobile_button.addEventListener("click", open_mobile_menu);