const nav = () => {

    let navClass = 'nav';
    let navChildClass = 'nav--item';
    
    // Create dom elements
    let nav = document.createElement("nav");
    nav.classList.add(navClass);
    nav.id = 'nav';

    let home = document.createElement("div");
    home.id = 'home';

    let about = document.createElement('div');
    about.id = 'about'

    let menu = document.createElement("div");
    menu.id = 'menu';

    let contact = document.createElement('div');
    contact.id = 'contact'
    
    // Append nav items to navBar
    nav.appendChild(home);
    nav.appendChild(about);    
    nav.appendChild(menu);    
    nav.appendChild(contact);

    // Add classes to children
    let children = nav.children;
    for (let i = 0; i < children.length; i++) {
        let child = children[i]
        child.classList.add(navChildClass);
        child.textContent = child.id;
    }
    

    return nav;
}

export default nav;