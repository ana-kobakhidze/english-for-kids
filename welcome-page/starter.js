import cards from "./cards";
import  { CATEGORIES } from "./dom-elements";
import { concatTitle } from './cards-methods';

const categoryTitles = cards[0];

export const starter = (toggleState) => {
 // here on play mode change cards animation bouncing
  let fragment = new DocumentFragment();
  window.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.querySelectorAll('.switchBox')[0];
    toggle.addEventListener('toogleChanged',(ev) => {
      document.querySelectorAll(".cards").forEach((elem)=>{
        elem.style.animationPlayState = ev.detail ? "running" : "paused";
      });
    })
  });
  categoryTitles.map((title) => {
    const listItems = document.createElement("li");
    listItems.classList.add("cards", `${concatTitle(title)}`);
    
    listItems.addEventListener("click", () => {
      location.href = window.location.origin + 
      //"/Users/ana/english-for-kids/english-for-kids/dist/index-cards.html";
        "ana-kobakhidze.github.io/english-for-kids/index-cards.html";
      localStorage.setItem("category", title);
    });
   // TITLE
    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("categoryTitle");
    cardTitle.style.backgroundColor = `var(--${concatTitle(title)})`;
    cardTitle.innerHTML = title.toUpperCase();
   // IMAGE
    const image = document.createElement("img");
    image.src = `./assets/images/${concatTitle(title)}.png`;
    image.alt = `${title}`;
  // QUANTITY
    const quantity = document.createElement("h3");
    quantity.classList.add("quantity");
    quantity.innerHTML = "8 cards";
    quantity.style.color = `var(--${concatTitle(title)})`;
  // STARS
    const stars = document.createElement("img");
    stars.src = "./assets/images/stars.svg";
    stars.alt = "stars";
    stars.classList.add("stars");
  // triangle
    const triangle = document.createElement("span");
    triangle.classList.add("triangle");
  // shaddow
    const shaddow = document.createElement("span");
    shaddow.classList.add("shaddow");

    listItems.appendChild(cardTitle);
    listItems.appendChild(image);
    listItems.appendChild(quantity);
    listItems.appendChild(stars);
    listItems.appendChild(triangle);
    listItems.appendChild(shaddow);
    CATEGORIES.appendChild(listItems);
    
  });
  return fragment.appendChild(CATEGORIES);

};
