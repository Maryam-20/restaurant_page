import playIconUrl from "../asset/play.png";
import foodImg from "../asset/ramen-dark2.jpeg";
import spoonIcon from "../asset/silverware.svg";

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

function ramenSection() {
    const ramen_section = document.createElement("div");
    ramen_section.setAttribute("id", "ramen_section");

    const ramen_grid1 = document.createElement("div");
    ramen_grid1.setAttribute("id", "ramenGrid1");

    const ramen_grid2 = document.createElement("div");
    ramen_grid2.setAttribute("id", "ramenGrid");

    const ramen_text = document.createElement("div");
    ramen_text.classList.add("ramenText");
    ramen_text.textContent = "Synthetic Soul Ramen";

    const ramen_desc = document.createElement("div");
    ramen_desc.classList.add("ramen_desc");
    ramen_desc.textContent = "Bio-engineered broth infused with digital spices and bioluminescent noodles. A taste of the future"

    const ramen_div2 = document.createElement("div");
    ramen_div2.classList.add("ramen_div2");

    const food_img = document.createElement("img");
    food_img.classList.add("food_img");
    food_img.src = foodImg;

    const available_text_Div = document.createElement("div");
    available_text_Div.classList.add("available_text_div");


    const available_text = document.createElement("div");
    available_text.classList.add("available_text");
    available_text.textContent = "AVAILABLE 22:00- 04:00";

    const food_title = document.createElement("div");
    food_title.classList.add("food_title");
    food_title.textContent = "Liquid Data Cocktails";

    const food_desc = document.createElement("div");
    food_desc.classList.add("food_desc");
    food_desc.textContent = "Molecular mixology served in presurrized crystals"

    const ratingDiv = document.createElement("div");
    ratingDiv.classList.add("ratingDiv");

    const spoon_div = document.createElement("div");
    spoon_div.classList.add("spoon_div");

    const spoonIconContainer = document.createElement("div");
    spoonIconContainer.classList.add("spoonIconWrapper");
    const spoonIconRaw = typeof spoonIcon === 'object' ? spoonIcon.default : spoonIcon;
    spoonIconContainer.innerHTML = spoonIconRaw;

   const svgPath = spoonIconContainer.querySelector('svg');
    if (svgPath) {
        svgPath.setAttribute('fill', '#ff2d78');
    }

    const rating_text = document.createElement("p");
    rating_text.classList.add("rating_text");
    rating_text.textContent = "9.8/10"

    const rating_white_text = document.createElement("div");
    rating_white_text.classList.add("rating_white_text");
    rating_white_text.textContent = "Cyber-Fusion Rating";

    const rating_desc = document.createElement("div");
    rating_desc.classList.add("rating_desc");   
    rating_desc.textContent = "Ranked #1 for experimental sensory dining in the Neo-Shibuya district by the Global Gastronomy Net"

    ramen_grid1.append(ramen_text, ramen_desc);
    
    ramen_div2.append(food_img, available_text_Div);
    available_text_Div.append(available_text, food_title, food_desc);
    spoon_div.append(spoonIconContainer, rating_text);
    ratingDiv.append(spoon_div, rating_white_text, rating_desc);
    ramen_grid2.append(ramen_div2, ratingDiv )
    ramen_section.append(ramen_grid1, ramen_grid2);

    return ramen_section;
}
export {createNavBar, createHero, ramenSection}