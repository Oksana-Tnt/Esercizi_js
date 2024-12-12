import { iPhoto } from "./Models/iPhoto.js";
import { markupCard } from "./Modules/Markup.js";

const selectEl:HTMLElement|null = document.getElementById("album");

async function getPhotos(): Promise<void> {    
  
  const url: string = "https://jsonplaceholder.typicode.com/photos"; 
  
    try {
      const response: Response = await fetch(url);
      
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

      const photos:iPhoto[] = await response.json();
      const newPhotos: iPhoto[] = photos.slice(0, 10);
      
      selectEl?.insertAdjacentHTML("beforeend", markupCard(newPhotos))
      
  } catch (error) {
    console.error(error);
  }
}     

getPhotos()
