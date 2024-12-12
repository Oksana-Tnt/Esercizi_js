export class Loader{
    static selector = 'loader';

    static startLoading(){
        const loader = document.createElement('div')
        loader.id = this.selector
        loader.innerText = 'Loading...';
        document.body.appendChild(loader)
    }

    static stopLoading(){
        const loader = document.getElementById(this.selector)
        loader.remove()
    }

}