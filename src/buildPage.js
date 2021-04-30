import nav from './nav/nav.js';
import home from './home/home.js';

const buildPage = (page) => {
    let navBar = nav();
    let homeContent = home();
    homeContent.id = 'content--item';

    page.appendChild(navBar);
    page.appendChild(homeContent);

    function clearContent() {
        let content = document.querySelector("#content--item");
        content.parentNode.removeChild(content);
    }

    function setContent(page, content) {
        content.id = 'content--item';
        page.appendChild(content);
    }

    return { clearContent, setContent }
}

export default buildPage;