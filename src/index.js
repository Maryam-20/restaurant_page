import { createHomePage } from "./component/home.js";
import { createMenuPage } from "./component/menu.js";
import "./styles/main.css"

const routes = {
    "home": createHomePage,
    "menu": createMenuPage,
   
}

function renderPage(pageKey = "home") {
    const content = document.getElementById("content")
    const pageFn = routes[pageKey] || routes.home;

    content.replaceChildren()
    content.append(pageFn(handleNavigate))
};

function getCurrentPageKey() {
    const path = window.location.pathname.replace("/", ""); 
    return path || "home";                                   
}

function handleNavigate(pageKey) {
    console.log(pageKey)
    history.pushState({}, "", `/${pageKey}`); 
    renderPage(pageKey)
};

// Handle browser back/forward buttons
window.addEventListener("popstate", () => {
    renderPage(getCurrentPageKey());
});

// Initial load — respect whatever URL the user actually landed on
renderPage(getCurrentPageKey());



