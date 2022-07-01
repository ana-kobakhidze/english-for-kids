import cards from './cards';
import { CATEGORIES } from '../welcome-page/dom-elements';
const cardTitles = cards[0];

cardTitles.map(title => {
    const  listItems = document.createElement("li");
    listItems.classList.add('cards', `${title}`);
    // (get ul by id) ul appendchild listItems
    const catTitle = document.createElement("h3");
    catTitle.classList.add("categoryTitle");
    catTitle.innerHTML = title.toUpperCase();
    // listItems appendchild catTitle
    const image = document.createElement("img");
    image.src = `../assets/images/${title}.png`;
    image.alt = `${title}`;
    // listItems appendCHild image
    const quantity = document.createElement("h3");
    quantity.classList.add("quantity");
    quantity.innerHTML = "8 cards";
    // listItems appendchild quantity
    const stars = document.createElement("img");
    stars.src = "../assets/images/stars.svg";
    stars.alt = "stars";
    stars.classList.add("stars");
    // listItems appendCHild stars
    const triangle = document.createElement("span");
    triangle.classList.add("triangle");
    // listItems appendChild triangle
    const shaddow = document.createElement("span");
    shaddow.classList.add("shaddow");
    // listItems appendChild shaddow
    listItems.appendChild(catTitle);
    listItems.appendChild(image);
    listItems.appendChild(quantity);
    listItems.appendChild(stars);
    listItems.appendChild(triangle);
    listItems.appendChild(shaddow);
    CATEGORIES.appendChild(listItems);
  });