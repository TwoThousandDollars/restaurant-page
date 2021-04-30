import nav from './nav/nav.js';
import home from './home/home.js';

const buildPage = (page) => {
    let navBar = nav();
    let homeContent = home();
    page.appendChild(navBar);
    page.appendChild(homeContent);
}

export default buildPage;