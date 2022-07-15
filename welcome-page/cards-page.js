import cards from "./cards";
import { TITLE } from "./dom-elements";
import { concatTitle, extendedCards } from "./cards-methods";
import { openModal } from "./modal";

let results = [];

const updateAvailableCards = (newCards) => {
  localStorage.setItem("availableCards", JSON.stringify(newCards));
};

const getAvailableCards = () => {
  const availableCards = localStorage.getItem("availableCards");
  return JSON.parse(availableCards);
};

const getCurrentWord = () => {
  const currWord = localStorage.getItem("currentWord");
  return JSON.parse(currWord);
};

const updateCurrentWord = (newWord) => {
  localStorage.setItem("currentWord", JSON.stringify(newWord));
};

const updateStats = (stat) => {
  const allStatsJson = localStorage.getItem("stats");
  const allStats = JSON.parse(allStatsJson);
  const statIndex = allStats.findIndex((s) => s.word === stat.word);
  allStats[statIndex] = stat;
  localStorage.setItem("stats", JSON.stringify(allStats));
};

const getStat = (word) => {
  const allStatsJson = localStorage.getItem("stats");
  const allStats = JSON.parse(allStatsJson);
  const itemIndex = allStats.findIndex((e) => e.word === word);
  return allStats[itemIndex];
};

const starsProgress = (state) => {
  const starParent = document.querySelector("#star-container");
  starParent.style.borderTop = "1px solid var(--cream)";
  const container = document.createElement("div");
  const star = document.createElement("img");
  star.classList.add(state ? "success-star" : "failure-star");
  star.src = state
    ? "./assets/images/success-star.svg"
    : "./assets/images/failure-star.svg";
  star.alt = state ? "success-star" : "failure-star";
  container.appendChild(star);
  starParent.appendChild(container);
};

const attachCardClickHandlers = () => {
  document.querySelectorAll(".container").forEach((cardContainer) => {
    const word = cardContainer.getAttribute("id");
    cardContainer.addEventListener("click", function () {
      makeMove(word);
    });
  });
};

const handleTrainingCardClick = (word) => {
  const availableCards = JSON.parse(localStorage.getItem("availableCards"));
  const cardData = availableCards.find((c) => c.word === word);
  const sound = new Audio("assets/" + `${cardData.audioSrc}`);
  sound.play();
  const stat = getStat(word);
  stat.clicks++;
  updateStats(stat);
};

const getNextRandomWord = () => {
  let currentCards = getAvailableCards();
  const randIndex = Math.floor(Math.random() * (currentCards.length - 1));
  const currentWord = {
    word: currentCards[randIndex].word,
    audioSrc: currentCards[randIndex].audioSrc,
  };
  updateCurrentWord(currentWord);
  return currentWord;
};

const makeMove = (word) => {
  const playModeIsOn = localStorage.getItem("playModeIsOn");
  if (playModeIsOn === "false") {
    handleTrainingCardClick(word);
    return;
  } else {
    const currentWord = getCurrentWord();
    const currentCards = getAvailableCards();
    const stat = getStat(word);
    //correct guess flow
    if (word === currentWord.word) {
      const successSound = new Audio("assets/audio/success.mp3");
      successSound.play();
      //update stats
      const currentIndex = currentCards.findIndex((c) => c.word === word);
      stat.correct++;
      updateStats(stat);
      currentCards.splice(currentIndex, 1);
      //update card styles
      let guessedCard = document.querySelector(`#${word}`);
      guessedCard.style.opacity = playModeIsOn ? 0.3 : 1;
      guessedCard.style.pointerEvents = playModeIsOn ? "none" : "auto";
      //update results
      updateAvailableCards(currentCards);
      results.push(true);
      starsProgress(true);
      //check if game is finished
      if (currentCards.length === 0 && results.length >= 8) {
        const isGameWon = results.every((elem) => elem === true);
        openModal(isGameWon);
      } else {
        //generate next word
        const nextWord = getNextRandomWord();
        const nextWordAudio = new Audio("./assets/" + `${nextWord.audioSrc}`);
        setTimeout(() => {
          nextWordAudio.play();
        }, "2000");
      }
    } else {
      //failed guess flow
      const failSound = new Audio("./assets/audio/failure.mp3");
      failSound.play();
      starsProgress(false);
      stat.wrong++;
      updateStats(stat);
      results.push(false);
    }
  }
};

export const cardsPage = () => {
  //delete category titles from data
  const categoryCardData = [...cards];
  categoryCardData.shift();

  window.addEventListener("DOMContentLoaded", (event) => {
    attachCardClickHandlers();

    localStorage.setItem("playModeIsOn", false);
    const selectedCategory = localStorage.getItem("category");
    updateAvailableCards(extendedCards[selectedCategory]);

    const toggle = document.querySelectorAll(".switchBox")[0];
    toggle.addEventListener("toogleChanged", (ev) => {
  
      const playModeIsOn = ev.detail;
      localStorage.setItem("playModeIsOn", ev.detail);
      if (!playModeIsOn) {
        document.querySelectorAll(".container").forEach((cardContainer) => {
          cardContainer.style.opacity = 1;
          cardContainer.style.pointerEvents = "auto";
        });
        document.querySelector("#star-container").style.display = "none";
      }
      const selectedCategory = localStorage.getItem("category");
      const playBtn = document.querySelector("#title-heading");
      updateAvailableCards(extendedCards[selectedCategory]);

      playBtn.innerHTML = playModeIsOn
        ? "PLAY"
        : selectedCategory.toUpperCase();
      playBtn.style.cursor = playModeIsOn ? "pointer" : "auto";

      document.querySelectorAll(".infoContainer").forEach((elem) => {
        elem.style.display = playModeIsOn ? "none" : "flex";
      });
      document.querySelectorAll(".cardImage").forEach((elem) => {
        elem.style.border = playModeIsOn
          ? `1px solid var(--${concatTitle(selectedCategory)})`
          : "none";
        elem.style.borderRadius = playModeIsOn ? "25%" : "none";
      });

      playBtn.addEventListener("click", () => {
        const playModeIsOn = localStorage.getItem("playModeIsOn");
        if (playModeIsOn === "false") {
          return;
        }
        const currentWord = getCurrentWord();
        if (currentWord) {
          playBtn.innerHTML = '<img src="./assets/images/flip.svg" alt="repeat" class="repeat-icon">'
          const wordSound = new Audio("./assets/" + `${currentWord.audioSrc}`);
          wordSound.play();
        } else {
          playBtn.innerHTML = '<img src="./assets/images/flip.svg" alt="repeat" class="repeat-icon">'
          const nextRandWord = getNextRandomWord();
          updateCurrentWord(nextRandWord);
          const wordSound = new Audio(
            "./assets/" + `${nextRandWord.audioSrc}`
          );
          wordSound.play();
        }
      });
    });
  });

  let fragment = new DocumentFragment();

  // get selected Category title from local storage
  const selectedCategory = localStorage.getItem("category");
  if (selectedCategory) {
    const index = cards[0].indexOf(selectedCategory);
    TITLE.innerHTML = selectedCategory.toUpperCase();
    TITLE.style.backgroundColor = `var(--${concatTitle(selectedCategory)})`;

    // create card elements
    categoryCardData[index].forEach((card) => {
      const container = document.createElement("div");
      container.classList.add("container");
      container.setAttribute("id", card.word);
      container.setAttribute("data-listener-attached", false);
      fragment.appendChild(container);

      const frontContainer = document.createElement("div");
      frontContainer.classList.add("front");
      container.appendChild(frontContainer);

      const backContainer = document.createElement("div");
      backContainer.classList.add("back");
      backContainer.addEventListener("mouseout", () => {
        container.style.transform = "rotateY(0deg)";
      });
      container.appendChild(backContainer);

      const image = document.createElement("img");
      image.src = "./assets/" + card.image;
      image.alt = card.word;

      image.classList.add("cardImage");
      frontContainer.appendChild(image);

      const backImage = image.cloneNode(true);
      backContainer.appendChild(backImage);

      const infoContainer = document.createElement("div");
      infoContainer.classList.add("infoContainer");
      infoContainer.style.backgroundColor = `var(--${concatTitle(
        selectedCategory
      )})`;
      frontContainer.appendChild(infoContainer);

      const backinfoContainer = document.createElement("div");
      backinfoContainer.classList.add("backinfoContainer");
      backinfoContainer.style.backgroundColor = `var(--${concatTitle(
        selectedCategory
      )})`;
      backContainer.appendChild(backinfoContainer);

      const soundIcon = document.createElement("img");
      soundIcon.classList.add("audio");
      soundIcon.src = "./assets/images/audio.svg";
      infoContainer.appendChild(soundIcon);

      const sound = new Audio("./assets/" + `${card.audioSrc}`);
      soundIcon.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();
      });

      const backSoundIcon = soundIcon.cloneNode(true);
      backinfoContainer.appendChild(backSoundIcon);

      const word = document.createElement("h4");
      word.classList.add("word");
      word.innerHTML = card.word.toUpperCase();
      infoContainer.appendChild(word);

      const backWord = document.createElement("h4");
      backWord.classList.add("translation");
      backWord.setAttribute("lang", "ka-GE");
      backWord.innerHTML = card.translation.toUpperCase();
      backinfoContainer.appendChild(backWord);

      const flipIcon = document.createElement("img");
      flipIcon.src = "./assets/images/flip.svg";
      flipIcon.classList.add("flip");
      flipIcon.addEventListener("click", () => {
        container.style.transform = "rotateY(-180deg)";
      });
      infoContainer.appendChild(flipIcon);
    });
  }
  return fragment;
};
