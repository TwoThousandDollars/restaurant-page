const menu = (page) => {
    let menuItems = [
                        {
                            name: "BBQ Burger",
                            price: "$11.34"
                        },
                        {
                            name: "Farmers Burger",
                            price: "$11.34"
                        },
                        {
                            name: "Salad",
                            price: "$11.34"
                        },
                        {
                            name: "BBQ Burger",
                            price: "$11.34"
                        },
                        {
                            name: "BBQ Burger",
                            price: "$11.34"
                        }
                    ]
    let menu = document.createElement("div");
    menu.innerText = menuItems;

    return menu;
}

export default menu;