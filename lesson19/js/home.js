import { environment } from './environment.js';
import { Loader } from './loader.js';

async function getPizze(){
    Loader.startLoading()
    const response = await fetch(environment.apiUrl,{
        method: 'GET',
        headers: { 'Content-type': 'application/json'}
    })

    Loader.stopLoading()
    //Controllo che la response non contenga errori 

    return response.json()
}


async function buildTable(){
    const target = document.querySelector('#target');
    const pizze = await getPizze();

    pizze.forEach((p,i) => {

        const tr = document.createElement('tr');
        const idTd = document.createElement('td');
        const gustoTd = document.createElement('td');
        const prezzoTd = document.createElement('td');
        const azioniTd = document.createElement('td');
        const deleteBtn = document.createElement('button');
        const editLink = document.createElement('a');

        deleteBtn.classList.add('btn','btn-danger');
        editLink.classList.add('btn','btn-warning');

        idTd.innerText = i + 1;
        gustoTd.innerText = p.gusto;
        prezzoTd.innerText = p.prezzo + '€';
        deleteBtn.innerText = 'Elimina';
        editLink.innerText = 'Modifica';

        editLink.href = `/update.html?id=${p.id}`;
        deleteBtn.addEventListener('click',() => {
            deletePizza(p.id)
            .then(() => {
                tr.remove();
            })
        })

        azioniTd.append(editLink, deleteBtn);
        tr.append(idTd, gustoTd, prezzoTd, azioniTd);
        target.appendChild(tr)
    })

}

buildTable()


async function deletePizza(id){
    Loader.startLoading()
    try{
        const response = await fetch(`${environment.apiUrl}/${id}`,{
            method:'DELETE'
        });
        //mappatura dei codici d'errore
        return response.json()
    }catch(error){
        //gestione dell'errore
    }finally{
        Loader.stopLoading()
    }
}