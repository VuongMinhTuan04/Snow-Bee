const menu = [
    {
        id: "home",
        title: `<i class="fa-solid fa-house"></i> Home Page`,
        link: "home-page.html"
    },
    {
        id: "product",
        title: `<i class="fa-solid fa-tag"></i> Products`,
        link: "product.html",
        dropMenu: [
            {
                id: "dog-food",
                title: `<i class="fa-solid fa-bone"></i> Dog Food`,
                link: "product.html?category=dog-food"
            },
            {
                id: "cat-food",
                title: `<i class="fa-solid fa-bowl-food"></i> Cat Food`,
                link: "product.html?category=cat-food"
            },
            {
                id: "dog",
                title: `<i class="fa-solid fa-dog"></i> Dog`,
                link: "product.html?category=dog"
            },
            {
                id: "cat",
                title: `<i class="fa-solid fa-cat"></i> Cat`,
                link: "product.html?category=cat"
            },
            {
                id: "accessory",
                title: `<i class="fa-solid fa-hat-wizard"></i> Accessory`,
                link: "product.html?category=accessory"
            },
            {
                id: "toy",
                title: `<i class="fa-solid fa-shapes"></i> Toy`,
                link: "product.html?category=toy"
            }
        ]
    },
    {
        id: "service",
        title: `<i class="fa-solid fa-tower-broadcast"></i> Service`,
        link: "service.html"
    },
    {
        id: "about",
        title: `<i class="fa-solid fa-circle-info"></i> About`,
        link: "about.html"
    },
    {
        id: "contact",
        title: `<i class="fa-solid fa-phone"></i> Contact Shop`,
        link: "contact.html"
    }
];
function showMenu() {
    let str = `
        <ul class="nav justify-content-center align-middle">
    `;
    menu.forEach(m => {
        if (m.dropMenu) {
            str += `
                <li class="nav-item dropdown">
                    <a class="nav-link" href="../html/${m.link}" id="${m.id}-dropdown" role="button" aria-expanded="false" onmouseover="showDropdown('${m.id}-dropdown')" onmouseout="hideDropdown('${m.id}-dropdown')">
                        ${m.title}
                    </a>
                
                    <ul class="dropdown-menu" aria-labelledby="${m.id}-dropdown" id="${m.id}-dropdown-menu">
            `;
            m.dropMenu.forEach(drop => {
                str += `
                    <li>
                        <a class="dropdown-item" href="../html/${drop.link}">
                            ${drop.title}
                        </a>
                    </li>
                `;
            });
            str += `
                    </ul>
                </li>
            `;
        }
        else {
            str += `
                <li class="nav-item">
                    <a class="nav-link" href="../html/${m.link}">
                        ${m.title}
                    </a>
                </li>
            `;
        }
    });
    str += `</ul>`;
    return str;
}
;
document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector("#menu-container");
    if (menuContainer) {
        menuContainer.innerHTML = showMenu();
    }
});
function showDropdown(dropdownId) {
    const dropdownMenu = document.getElementById(dropdownId + '-menu');
    if (dropdownMenu) {
        dropdownMenu.style.display = 'block';
        dropdownMenu.style.opacity = '1';
    }
}
function hideDropdown(dropdownId) {
    const dropdownMenu = document.getElementById(dropdownId + '-dropdown-menu');
    if (dropdownMenu) {
        dropdownMenu.style.display = 'none';
        dropdownMenu.style.opacity = '0';
    }
}
