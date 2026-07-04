import playIconUrl from "../asset/play.png";

function createNavBar () {
    const navContainer = document.createElement("div");
    navContainer.setAttribute("id", "navContainer");

    const logoText = document.createElement("div");
    logoText.classList.add("logo_text");
    logoText.textContent = "NEON TOKYO";

    const navList = document.createElement("ul");
    navList.classList.add("navList")
    const items = ["HOME", "MENU", "CONTACT"];
    items.forEach(item => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        listItem.classList.add("listItem");
        anchor.classList.add("anchorList");
        anchor.textContent = item;
        listItem.appendChild(anchor)
        navList.appendChild(listItem);

    });

    const orderBtn = document.createElement("button");
    orderBtn.classList.add("orderBtn");
    orderBtn.textContent = "ORDER NOW";

    navContainer.append(logoText, navList, orderBtn)

    return navContainer;
};

function createHero() {
    const heroContainer = document.createElement("div");
    heroContainer.setAttribute("id","heroContainer");

    const sectionText = document.createElement("div");
    sectionText.classList.add("sectionText");
    sectionText.textContent = "SYSTEM ONLINE // SECTION 7";

    const neon = document.createElement("div");
    neon.classList.add("neon");
    neon.textContent = "NEON";

    const tokyo = document.createElement("div");
    tokyo.classList.add("tokyo");
    tokyo.textContent = "TOKYO";

    const cuisine = document.createElement("div");
    cuisine.classList.add("cuisine");
    cuisine.textContent = "CYBER - FUSION CUISINE";

    const viewContainer = document.createElement("div");
    viewContainer.classList.add("viewContainer");

    const view = document.createElement("div");
    view.classList.add("view");
    view.textContent = "VIEW MENU";

    const iconContainer = document.createElement("div");
    iconContainer.classList.add("iconContainer");

    const icon = document.createElement("img");
    icon.classList.add("icon");
    icon.src = playIconUrl;
    

    const experience = document.createElement("p");
    experience.classList.add("experience");
    experience.textContent = "THE EXPERIENCE";

    iconContainer.appendChild(icon)

    viewContainer.append(view, iconContainer, experience);

    heroContainer.append(sectionText, neon, tokyo, cuisine, viewContainer)

    return heroContainer;
}
export {createNavBar, createHero}