import { createNavBar, createHero, ramenSection } from "./component/home.js";
import "./styles/main.css"

function render() {
    const content = document.getElementById("content")
    content.replaceChildren()
    content.append(createNavBar(), createHero(), ramenSection())
};

render();