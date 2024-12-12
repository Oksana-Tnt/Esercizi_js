export function markupCard(arr) {
    return arr.map(({ title, url }) => `

    <div class="card" style="width: 18rem;">
    <img src=${url} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${title} </h5>
    </div>
    </div>

    `).join("");
}
