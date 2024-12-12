import { environment } from './environment.js';

const form = document.getElementById('create-form');

if(form){


    form.addEventListener('submit', e => {
        e.preventDefault();

        const fields = document.querySelectorAll('#create-form input');
        const [gusto, prezzo] = fields

        const newPizza = {
            gusto:gusto.value,
            prezzo:Number(prezzo.value)
        }

        createPizza(newPizza).then(pizzaResponse=>{
  
            console.log(pizzaResponse);
        })
        


    })


    async function createPizza(newPizza){
        const response =  await fetch(environment.apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPizza)
        })
        //fare controlli sulle response

        return response.json()
    }


}