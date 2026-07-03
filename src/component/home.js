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


export {createNavBar}