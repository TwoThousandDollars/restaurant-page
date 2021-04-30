const home = () => {
    
    let home = document.createElement('div');
    home.classList.add('content--home');
    home.id = 'homeContent'
    home.textContent = "Welcome to my restaurant";

    return home;
    
}

export default home;