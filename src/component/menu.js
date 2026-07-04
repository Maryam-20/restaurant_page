import { createNavBar } from "./home.js";

function createMenuPage(onNavigate) {
    const wrapper = document.createElement("div");
    wrapper.append(createNavBar(onNavigate)) ;

    return wrapper;
};

export {createMenuPage};