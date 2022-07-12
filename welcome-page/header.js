import cards from "./cards";

const categoryTitles = cards[0];

export const header = () => {
  let fragment = new DocumentFragment();

  const header = document.createElement("header");
  header.setAttribute("id", "header");
  fragment.appendChild(header);

  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  header.appendChild(menu);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");
  menu.appendChild(checkbox);

  const menuIcon = document.createElement("div");
  menuIcon.setAttribute("id", "menu-icon");
  menu.appendChild(menuIcon);

  iconLines(menuIcon, "line1");
  iconLines(menuIcon, "line2");
  iconLines(menuIcon, "line3");

  overlay(menu, checkbox);

  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");
  menu.appendChild(menuItems);

  const listItemOne = document.createElement("li");
  menuItems.appendChild(listItemOne);

  const homeLink = document.createElement("a");
  homeLink.href =
          "ana-kobakhidze.github.io/english-for-kids/index.html";
    //file:///Users/ana/english-for-kids/english-for-kids/dist/index.html";
  homeLink.innerHTML = "Home";
  listItemOne.appendChild(homeLink);

  const listItemTwo = document.createElement("li");
  menuItems.appendChild(listItemTwo);

  const statsLink = document.createElement("a");
  statsLink.href =
          "ana-kobakhidze.github.io/english-for-kids/statistics.html";
    //"file:///Users/ana/english-for-kids/english-for-kids/dist/statistics.html";
  statsLink.innerHTML = "Statistics";
  listItemTwo.appendChild(statsLink);
  listItem(menuItems);

  // toggle button
  const label = document.createElement("label");
  label.setAttribute("id", "switch");
  header.appendChild(label);

  const switchBox = document.createElement("input");
  switchBox.type = "checkbox";
  switchBox.name = "checkbox";
  switchBox.classList.add("switchBox");
  label.appendChild(switchBox);

  const slider = document.createElement("span");
  slider.classList.add("slider", "round");
  label.appendChild(slider);

  const labels = document.createElement("span");
  labels.classList.add("labels");
  labels.setAttribute("data-on", "PLAY");
  labels.setAttribute("data-OFF", "TRAIN");
  label.appendChild(labels);

  return fragment;
};

const iconLines = (menuIcon, lineNum) => {
  const line = document.createElement("span");
  line.classList.add("line", lineNum);
  menuIcon.appendChild(line);
};

const overlay = (menu, checkbox) => {
  const overlay = document.createElement("span");
  overlay.setAttribute("id", "overlay");
  menu.appendChild(overlay);
  overlay.addEventListener("click", () => {
    checkbox.checked = false;
  });
};
const listItem = (menuItems) => {
  categoryTitles.map((title) => {
    const listcategories = document.createElement("li");
    const item = document.createElement("a");
    item.innerHTML = title;
    listcategories.appendChild(item);
    listcategories.addEventListener("click", () => {
      location.href = window.location.origin + 
        "ana-kobakhidze.github.io/english-for-kids/index-cards.html";
      localStorage.setItem("category", title);
    });
    menuItems.appendChild(listcategories);
  });
};
