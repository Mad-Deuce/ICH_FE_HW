// Создать навигационное меню, которое будет открываться, выезжая из края экрана.
// Само меню - абсолютно позиционированный блок с заданным свойством transform: translateX,
// которое будет меняться в зависимости от состояния меню.
// Добавить подпункты меню таким образом чтобы при клике на любой пункт меню снизу появились еще два - три подраздела.

const menuStructure = [
    {
        title: "main1",
        href: "main1",
        items: [
            {
                title: "sub11",
                href: "sub11",
            },
            {
                title: "sub12",
                href: "sub12",
                items: [
                    {
                        title: "sub121",
                        href: "sub121",
                    },
                    {
                        title: "sub122",
                        href: "sub122",
                    },
                ]
            },
            {
                title: "sub13",
                href: "sub13",
            },
            {
                title: "sub14",
                href: "sub14",
            },
        ],
    },
    {
        title: "main2",
        href: "main2",
        items: [
            {
                title: "sub21",
                href: "sub21",
            },
        ],
    },
];


const navMenu = document.getElementById("navMenu");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");
const toggleMenu = () => {
    navMenu.classList.toggle("nav-menu--open");
};
openButton.addEventListener("click", () => {
    toggleMenu();
});
closeButton.addEventListener("click", () => {
    toggleMenu();
});

const createMenu = (menuStructure, parent, lv = -1) => {
    let level = lv + 1;

    const parentElem = document.createElement("ul");
    parentElem.addEventListener("click", (e) => {
        e.stopPropagation();
        e.target.parentElement.classList.toggle('children__visible-none');
    });

    parent.appendChild(parentElem);
    menuStructure.forEach(item => {
        let title = document.createElement("p");
        title.innerHTML = item.title;
        const childElem = document.createElement("li");
        childElem.style.marginLeft = `${level * 20}px`;
        childElem.classList.add('children__visible-none');
        childElem.appendChild(title);
        parentElem.appendChild(childElem);
        if (item.items) {
            createMenu(item.items, childElem, level);
        }
    });
};

createMenu(menuStructure, navMenu);