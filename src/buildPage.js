import nav from './nav/nav.js';

const buildPage = (page) => {
    let navBar = nav();
    page.appendChild(navBar);

    // return page;
}

export default buildPage;