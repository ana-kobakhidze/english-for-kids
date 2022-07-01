import cards from './cards';
import {STARTBTN, CATEGORIES, CATEGORYLIST, OVERLAY, MENU} from './dom-elements';
console.log(CATEGORIES);
console.log(CATEGORIES.style.display);

const categoryTitles = cards[0];



// menu category items
categoryTitles.map(title => {
  const  listItems = document.createElement("li");
  const item = document.createElement("a");
  item.innerHTML = title;
  listItems.appendChild(item);
  CATEGORYLIST.appendChild(listItems);
});

// category cards
categoryTitles.map(title => {
    const titleStr = title.split(" ").join("");
    
    const imageTitle = titleStr.substring(0, 1).toLowerCase() + titleStr.substring(1);
    

    const  listItems = document.createElement("li");
    listItems.classList.add('cards', `${imageTitle}`);
    // (get ul by id) ul appendchild listItems
    const catTitle = document.createElement("h3");
    catTitle.classList.add("categoryTitle");
    catTitle.style.backgroundColor = `var(--${imageTitle})`;
    catTitle.innerHTML = title.toUpperCase();
    // listItems appendchild catTitle
    const image = document.createElement("img");
    image.src = `../assets/images/${imageTitle}.png`;
    image.alt = `${title}`;
    // listItems appendCHild image
    const quantity = document.createElement("h3");
    quantity.classList.add("quantity");
    quantity.innerHTML = "8 cards";
    quantity.style.color = `var(--${imageTitle})`;
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


STARTBTN.addEventListener("click", () => {
STARTBTN.style.display = "none";
CATEGORIES.style.display = "flex";
})
OVERLAY.addEventListener("click", ()=>{
    MENU.checked = false;
})
