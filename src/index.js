import buildPage from './buildPage.js';

import './variables.css';
import './about/about.css';
import './contact/contact.css';
import './home/home.css';
import './menu/menu.css';
import './nav/nav.css';


window.onload = () => {

    let mainContent = document.querySelector("#content");
    buildPage(mainContent);

}