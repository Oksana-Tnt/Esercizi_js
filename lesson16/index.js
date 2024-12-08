// import { markupPopup } from "./templates/markup";

const main = document.getElementById("main");

window.addEventListener("load", onLoadPopup);

main.addEventListener("click", removePopup);


function onLoadPopup() {
    if (getCookie("show")==="no") return;
    main.insertAdjacentHTML("beforeend", markupPopup());        
}

function removePopup(e) {

    if (!e.target.classList.contains("btn-danger") && !e.target.classList.contains("btn-primary")) return;

    if(e.target.classList.contains("btn-primary")){
        setCookie("show", "yes")
    } else {
        setCookie("show", "no")        
    }

    e.target.closest(".card").remove();
}


//Set cookie
function setCookie(key, value) {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    let espires = "expires" + date.toUTCString();
    document.cookie = `${key} = ${value}; ${espires}; path=/`
}

//Get cookie
function getCookie(key) {
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find(s => s.startsWith(`${key}=`));
    return cookie ? cookie.split("=")[1] : null;
}

//Create markup of popup
function markupPopup(){
    return `
<div class="card position-absolute" style="width: 800px;">
  <img src="https://picsum.photos/id/237/800" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Advert</h5>
    <p class="card-text">I'm just an innocent advertisement, if you don't want to see me again, let me know</p>
    <button class="btn btn-primary" id="show">Do you want to see me again?</button>
    <button class="btn btn-danger" id="remove">Don't show more</button>
  </div>
</div> `
};