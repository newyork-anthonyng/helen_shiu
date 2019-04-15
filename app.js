const pageContainers = document.querySelectorAll(".page-container");
const previousLink = document.querySelector(".js-previous-link");
const nextLink = document.querySelector(".js-next-link");
const menu = document.querySelector(".js-menu");

const menuLinkObject = {};
const menuLinks = document.querySelectorAll(".js-menu-link");
menuLinks.forEach(menuLink => {
    const id = menuLink.getAttribute("href").slice(1);
    menuLinkObject[id] = menuLink;
});
let activeMenuLink = null; // this holds the ID of the active view

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

document.addEventListener("scroll", handleScroll);

function handleScroll() {
    let currentView;

    for (let i = pageContainers.length - 1; i >= 0; i--) {
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

    if (activeMenuLink === id) {
        return;
    }

    // hide menu links if on 'Home' or 'About Me' page
    if (id === "home" || id === "about-me") {
        menu.classList.add("hidden");
    } else {
        menu.classList.remove("hidden");
    }

    const oldMenuLink = menuLinkObject[activeMenuLink];
    if (oldMenuLink) {
        oldMenuLink.classList.remove("active");
    }

    const newActiveView = menuLinkObject[id];
    if (newActiveView) {
        newActiveView.classList.add("active");
    }

    activeMenuLink = id;
}

function isInView(ele) {
    const bounding = ele.getBoundingClientRect();
    const { top, height } = bounding;
    const roundedTop = Math.floor(top);
    const isInView = (roundedTop <= 0) && (Math.abs(roundedTop) < height);

    return isInView;
}

function init() {
    handleScroll();

    // If page hides menu links when first loaded, we don't want a transition effect.
    menu.style.transition = `opacity 0.3s ease-in-out`;
}

init();