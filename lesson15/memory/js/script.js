//icone = https://www.w3schools.com/charsets/ref_emoji_animals.asp
let icone = ['🐁','🐀','🐂','🐃','🐄','🐅','🐆','🐇'];

//Crea le ripetizioni nell'array. 
icone = [...icone, ...icone];

//Mescola randomicamente l'array.
function shuffle(arr){
    let resultArray = [];

    while(arr.length){
        const rand = Math.floor(Math.random() * arr.length - 1) + 1;
        resultArray.push(arr[rand]);
        arr.splice(rand,1)
    }

    return resultArray
}

icone = shuffle(icone);

//Genera dinamicamente una card per ogni elemento, nell'array icone

const memory = document.getElementById('memory')
icone.forEach((icona, i) => {

    const card = document.createElement('div');
    card.classList.add('card');
    card.addEventListener('click',show)
    card.id = 'card' + i;
    
    const iconBox = document.createElement('div');
    iconBox.classList.add('icon');
    iconBox.innerHTML = icona

    card.appendChild(iconBox);

    memory.append(card)
})

//Crea la funzione che effettivamente permette di giocare. 
let check = [];

function show(e){  

     const card = e.target;

    if(check.length < 2){
        
        card.classList.add('show')
        check.push(card)

    }else{

        if (check[0].innerHTML != check[1].innerHTML) {
            check[0].classList.remove('show')
            check[1].classList.remove('show')
        }
        
        check = []
    }

  
    console.log(check);
    }

