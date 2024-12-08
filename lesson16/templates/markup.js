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
export {markupPopup}
