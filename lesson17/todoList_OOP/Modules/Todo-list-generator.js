export class TodoList{

    constructor(selector){
        this.selector = selector;
        this.target = document.getElementById(selector);
        this.input = document.createElement('input');
        this.button = document.createElement('button');
        this.list = document.createElement('div')
        this.db = this.getStatus();
        this.initHTML();

    }

    //----------------Get data from LocalStorage-------------------------------
    getStatus() {  
        const item = localStorage.getItem(this.selector);
        return item ? JSON.parse(item) : [];  
    }
    //--------------------------------------------------------------------------

    initHTML(){
        this.input.placeholder = 'Inserisci un testo';
        this.input.type = 'text';
        this.input.classList.add('form-control',"mb-3");

        this.button.innerText = 'Crea';
        this.button.classList.add('btn','btn-primary',"mb-3");
        this.button.addEventListener('click', () => {
            this.addTodo()
        })
        this.target.append(this.input, this.button, this.list);
    //-----------------------------------------------------------------------
        if (!this.db.length) return;
        this.db.map(item => {
            this.createTodoItem(item);
        })
    }
    
    //----------------Save data in LocalStorage----------------------------------
    saveNewData(arr) {
        localStorage.setItem(this.selector, JSON.stringify(arr));
    }

    //----------------Create array for save in LocalStorage-----------------------
    setToLocal(data) {
        const arr = this.getStatus();
        arr.push(data);
        this.saveNewData(arr);
    }

    //---------------Create todo object for add to array for save to LocalStorage----------
    createTodoObj(content) {
         return {
            id: Math.random(),           
            content
        };
    } 

    //--------------Markup of todo item-----------------------------------------------
    createTodoItem(todoObj) {
        const newTodo = document.createElement('div');
        const deleteButton = document.createElement('button');
        
        newTodo.innerText = todoObj.content;
        newTodo.dataset.id = todoObj.id;
        newTodo.classList.add('alert','alert-success', "d-flex", "justify-content-between");
        deleteButton.innerText = 'Elimina';
        deleteButton.classList.add('btn','btn-danger');
        deleteButton.addEventListener('click', ()=>{
            this.deleteTodo(newTodo)
        })

        newTodo.append(deleteButton)
        this.list.append(newTodo)
    }

    //-----------------------------------------------------------------------------------
    addTodo() {            
        const todoObj = this.createTodoObj(this.input.value);
        this.createTodoItem(todoObj);

        this.setToLocal(todoObj);
        
        this.input.value = '';
    }  

    deleteTodo(todoElement) {
        
    const idToFind = todoElement.dataset.id;  

    todoElement.remove();

    const filteredArr = this.getStatus().filter(({ id }) => id !== Number(idToFind));

    this.saveNewData(filteredArr);
    }

}