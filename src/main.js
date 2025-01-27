import { createMainPageComponent } from './mainPageComponent.js';
const appDiv = document.querySelector("#app");


const mainPageHTML = createMainPageComponent();

appDiv.innerHTML = mainPageHTML;