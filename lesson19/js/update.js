import { environment } from './environment.js';

const form =  document.getElementById('edit-form');
const gusto =  document.getElementById('gusto');
const prezzo = document.getElementById('prezzo');

async function init(){

    //Grazie ad URL search parames posso gestire i query params in maniera strutturata e controllata. 
    const url = new URLSearchParams(location.search);//Search è la proprietà di location che contiene i query params. 

    //Il metodo Haz è un metodo booleano che ci dice se un determinato parametro è presente nell'url oppure no 
    if(!url.has('id')){
       //Se se il parametro richiesto non è presente, rispedisco l'utente alla home. 
        location.href = '/index.html'
        return
    }
    
    const id = url.get('id')

    const pizza = await getPizzaById(id);

    gusto.value = pizza.gusto;
    prezzo.value = pizza.prezzo;


    form.addEventListener('submit', e => {
        e.preventDefault();

        const pizza = {
            id,
            gusto: gusto.value,
            prezzo: prezzo.value
        }

        updatePizza(pizza)
        .then(()=>{
            alert('pizza modificata con successo');
        })

    })


}

init()

async function getPizzaById(id){
    const response = await fetch(`${environment.apiUrl}/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.json();
}

async function updatePizza(pizza){
    const response = await fetch(`${environment.apiUrl}/${pizza.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pizza)
    })

    return response.json();
}