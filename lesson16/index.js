import { getCookie, setCookie } from "./Modules/Cookies.js";
import { markupPopup } from "./Modules/Markup.js";

const main = document.getElementById("main");

window.addEventListener("load", onLoadPopup);

main.addEventListener("click", removePopup);


//Load Popup
function onLoadPopup() {
    if (getCookie("show")==="no") return;
    main.insertAdjacentHTML("beforeend", markupPopup());        
}

//Remove Popup
function removePopup(e) {

    if (!e.target.classList.contains("btn-danger") && !e.target.classList.contains("btn-primary")) return;

    if(e.target.classList.contains("btn-primary")){
        setCookie("show", "yes")
    } else {
        setCookie("show", "no")        
    }

    e.target.closest(".card").remove();
}




