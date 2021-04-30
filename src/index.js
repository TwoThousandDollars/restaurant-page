import buildPage from './buildPage.js';
import home from './home/home.js';
import menu from './menu/menu.js';


import './variables.css';
import './about/about.css';
import './contact/contact.css';
import './home/home.css';
import './menu/menu.css';
import './nav/nav.css';


window.onload = () => {

    let initialContent = document.querySelector("#content");
    let pageController = buildPage(initialContent);

    let homeButton = document.querySelector("#home");
    homeButton.addEventListener("click", () => {
        pageController.clearContent();
        pageController.setContent(initialContent, home());
    });

    let menuButton = document.querySelector("#menu");
    menuButton.addEventListener("click", () => {
        pageController.clearContent();
        pageController.setContent(initialContent, menu());
    });

}