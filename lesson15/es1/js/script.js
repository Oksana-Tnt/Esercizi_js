const form = document.getElementById("myForm");
        const input = document.querySelector('#myForm input');
        const target = document.getElementById('target');

form.addEventListener('submit', addItems);

function addItems(e) {
            e.preventDefault();

            const testo = input.value;//Sempre una stringa

            if(!testo){
                alert('Devi inserire un testo!');
                return;
            }
                
    const cloneTemplate = document.querySelector('template')
    const clone = cloneTemplate.content.cloneNode(true);
    
    clone.querySelector('.title').innerText = testo;
    const item = clone.getElementById("item");
    clone.getElementById("button").addEventListener("click", function () { item.remove() })
    
    target.append(clone);
    
    input.value = '';
        }


        