const pageContainers = document.querySelectorAll(".page-container");

const previousLink = document.querySelector(".js-previous-link");
const nextLink = document.querySelector(".js-next-link");

const menuLinkObject = {};
const menuLinks = document.querySelectorAll(".js-menu-link");
menuLinks.forEach(menuLink => {
    const id = menuLink.getAttribute("href").slice(1);
    menuLinkObject[id] = menuLink;
});
let activeMenuLink = null; // this will hold the ID of the active view

previousLink.addEventListener("click", function(e) {
    e.preventDefault();

    if (!activeMenuLink) return;

    const previousSibling = document.getElementById(activeMenuLink).previousElementSibling;

    location.href = `#${previousSibling.getAttribute("id")}`;
});

nextLink.addEventListener("click", function(e) {
    e.preventDefault();

    if (!activeMenuLink) return;

    const nextSibling = document.getElementById(activeMenuLink).nextElementSibling;

    location.href = `#${nextSibling.getAttribute("id")}`;
});

document.addEventListener("scroll", function() {
    let currentView;

    for (let i = 0; i < pageContainers.length; i++) {
        const currentPageContainer = pageContainers[i];

        if (isInView(currentPageContainer)) {
            currentView = currentPageContainer;
            break;
        }
    }

    if (!currentView) {
        console.error("This is weird");
        return;
    }

    const id = currentView.getAttribute("id");
    if (activeMenuLink !== id) {
        activeMenuLink && menuLinkObject[activeMenuLink].classList.remove("active");
        id && menuLinkObject[id].classList.add("active");

        activeMenuLink = id;
        console.log("newActiveMenuLink", activeMenuLink);
    }
});

function isInView(ele) {
    const bounding = ele.getBoundingClientRect();
    const { top, height } = bounding;
    const isInView = (top <= 0) && (Math.abs(top) <= height);

    return isInView;
}

