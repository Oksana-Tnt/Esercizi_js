var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { markupCard } from "./Modules/Markup.js";
const selectEl = document.getElementById("album");
function getPhotos() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "https://jsonplaceholder.typicode.com/photos";
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const photos = yield response.json();
            const newPhotos = photos.slice(0, 10);
            selectEl === null || selectEl === void 0 ? void 0 : selectEl.insertAdjacentHTML("beforeend", markupCard(newPhotos));
        }
        catch (error) {
            console.error(error);
        }
    });
}
getPhotos();
