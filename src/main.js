import { createMainPageComponent } from './mainPageComponent.js';
import { menuPageComponent } from './menuPageComponent.js';
import { bookingPageComponent } from './bookingPageComponent.js';
import { aboutPageComponent } from './aboutPageComponent.js';

const appDiv = document.querySelector("#app");
const menuBtn = document.querySelector("#menu-button");
const bookingBtn = document.querySelector("#booking-button");
const aboutBtn = document.querySelector("#about-button");
const linksContainer = document.querySelector("#links-container")

const mainPageHTML = createMainPageComponent();
const menuPageHTML = menuPageComponent();
const bookingPageHTML = bookingPageComponent();
const aboutPageHTML = aboutPageComponent();


linksContainer.addEventListener("click", (event) => {
    switch(event.target.id) {
        case "menu-button":
            clearScrean()
            appDiv.innerHTML = menuPageHTML;
            break;
        case "booking-button":
            clearScrean()
            appDiv.innerHTML = bookingPageHTML;
            break;
        case "about-button":
            clearScrean()
            appDiv.innerHTML = aboutPageHTML;
            break;
        default:
            break;
    } 
})

function clearScrean() {
appDiv.innerHTML = ""
}

// appDiv.innerHTML = mainPageHTML;
appDiv.innerHTML = aboutPageHTML;