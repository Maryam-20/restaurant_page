import { createNavBar } from "./home.js";

function createContactPage(onNavigate) {
    const wrapper = document.createElement("div");
    wrapper.append(createNavBar(onNavigate));

    return wrapper;
};

export {createContactPage};
