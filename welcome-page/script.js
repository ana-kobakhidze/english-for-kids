
import cards from './cards';
import {STARTBTN, CATEGORIES, CARD, TITLE, WRAPPER, CARD_PAGE_WRAPPER, STATS_PAGE_WRAPPER} from './dom-elements';
import {header} from "./header";

const categoryTitles = cards[0];

const concatTitle = (title) => {
    const titleStr = title.split(" ").join("");
    const imageTitle = titleStr.substring(0, 1).toLowerCase() + titleStr.substring(1);
    return imageTitle;
}
// first page
if( location.href === 'file:///Users/ana/english-for-kids/english-for-kids/dist/index.html'){
    

    WRAPPER.insertBefore(header(), WRAPPER.firstChild);

    categoryTitles.map(title => {
    const  listItems = document.createElement("li");
    listItems.classList.add('cards', `${concatTitle(title)}`);
    listItems.addEventListener("click", () => {
        location.href = 'file:///Users/ana/english-for-kids/english-for-kids/dist/index-cards.html';
        localStorage.setItem('category', title);
    })

    const catTitle = document.createElement("h3");
    catTitle.classList.add("categoryTitle");
    catTitle.style.backgroundColor = `var(--${concatTitle(title)})`;
    catTitle.innerHTML = title.toUpperCase();

    const image = document.createElement("img");
    image.src = `../assets/images/${concatTitle(title)}.png`;
    image.alt = `${title}`;

    const quantity = document.createElement("h3");
    quantity.classList.add("quantity");
    quantity.innerHTML = "8 cards";
    quantity.style.color = `var(--${concatTitle(title)})`;

    const stars = document.createElement("img");
    stars.src = "../assets/images/stars.svg";
    stars.alt = "stars";
    stars.classList.add("stars");

    const triangle = document.createElement("span");
    triangle.classList.add("triangle");

    const shaddow = document.createElement("span");
    shaddow.classList.add("shaddow");

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

}

/// cards page 
if(location.href === 'file:///Users/ana/english-for-kids/english-for-kids/dist/index-cards.html')
{
    CARD_PAGE_WRAPPER.insertBefore(header(), CARD_PAGE_WRAPPER.firstChild);
    //delete category elements from data
    const categoryCardData = [...cards];
    categoryCardData.shift();
    // get selected Category title from local storage
    const selectedCategory = localStorage.getItem("category");
    if(selectedCategory){
    const index = cards[0].indexOf(selectedCategory);
    TITLE.innerHTML = selectedCategory.toUpperCase();
    TITLE.style.backgroundColor = `var(--${concatTitle(selectedCategory)})`;
    // create card elements
    categoryCardData[index].forEach(card => {
        const container = document.createElement("div");
        container.classList.add("container");
        CARD.appendChild(container);

        const frontContainer = document.createElement("div");
        frontContainer.classList.add("front");
        container.appendChild(frontContainer);

        const backContainer = document.createElement("div");
        backContainer.classList.add("back");
        backContainer.addEventListener("mouseout", ()=>{
            container.style.transform =  "rotateY(0deg)";
        })
        container.appendChild(backContainer);

        const image = document.createElement("img");
        image.src = "../assets/" + card.image;
        image.alt = card.word;
        image.classList.add("cardImage");
        frontContainer.appendChild(image);

        const backImage = image.cloneNode(true);
        backContainer.appendChild(backImage);

        const infoContainer = document.createElement("div");
        infoContainer.classList.add("infoContainer");
        infoContainer.style.backgroundColor = `var(--${concatTitle(selectedCategory)})`;
        frontContainer.appendChild(infoContainer);
        
        const backinfoContainer = document.createElement("div");
        backinfoContainer.classList.add("backinfoContainer");
        backinfoContainer.style.backgroundColor = `var(--${concatTitle(selectedCategory)})`;
        backContainer.appendChild(backinfoContainer);

        const soundIcon = document.createElement("img");
        soundIcon.classList.add("audio")
        soundIcon.src = "../assets/images/audio.svg";
        infoContainer.appendChild(soundIcon);

        const sound = new Audio("../assets/" + `${card.audioSrc}`);
        soundIcon.addEventListener("click", () =>{
            sound.currentTime = 0;
            sound.play();
        })

        const backSoundIcon = soundIcon.cloneNode(true);
        backinfoContainer.appendChild(backSoundIcon);

        const word = document.createElement("h4");
        word.classList.add("word")
        word.innerHTML = card.word.toUpperCase();
        infoContainer.appendChild(word);

        const backWord = document.createElement("h4");
        backWord.classList.add("translation");
        backWord.setAttribute("lang", "ka-GE");
        backWord.innerHTML = card.translation.toUpperCase();
        backinfoContainer.appendChild(backWord);

        const flipIcon = document.createElement("img");
        flipIcon.src = "../assets/images/flip.svg";
        flipIcon.classList.add("flip");
        flipIcon.addEventListener("click", ()=>{
            container.style.transform =  "rotateY(-180deg)";
        });
        
        infoContainer.appendChild(flipIcon);
    })
 }};

 if(location.href === 'file:///Users/ana/english-for-kids/english-for-kids/dist/statistics.html'){
    debugger;
    STATS_PAGE_WRAPPER.insertBefore(header(), STATS_PAGE_WRAPPER.firstChild);
    const getData = localStorage.getItem("category");
    console.log(getData);
 }

