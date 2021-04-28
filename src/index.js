import nav from './nav.js';
import home from './home.js';
import about from '.about.js'
import './styles.css';


window.onload = () => {

    let mainContent = home();
    let navBar = nav();
    
    mainContent.appendChild(navBar);
    
    // main.appendChild(navBar);
}