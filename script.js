let mobile_button = document.getElementById("small-width-menu-button");
let menu_container = document.getElementById("menu-container");
let cont = 0;





function open_mobile_menu(){
    if(cont % 2 == 0){
    menu_container.style.maxHeight = "30em";
    }
    else{
        menu_container.style.maxHeight = "0";
    }
    cont++;
}


mobile_button.addEventListener("click", open_mobile_menu);