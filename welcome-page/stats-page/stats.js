import { extendedCards } from "../cards-methods";

export const statsContent = () => {
  let fragment = new DocumentFragment();

  const keys = Object.keys(extendedCards);

  keys.forEach((item) => {
    extendedCards[item].forEach((element) => {
      const tr = document.createElement("tr");
      tr.classList.add("rowInfo");

      const title = document.createElement("td");
      title.innerHTML = item;
      tr.appendChild(title);

      const word = document.createElement("td");
      word.innerHTML = element.word;
      tr.appendChild(word);

      const translation = document.createElement("td");
      translation.classList.add("georgian");
      translation.innerHTML = element.translation;
      tr.appendChild(translation);

      const clicks = document.createElement("td");
      clicks.innerHTML = 0;
      tr.appendChild(clicks);

      const correct = document.createElement("td");
      correct.innerHTML = 0;
      tr.appendChild(correct);

      const incorrect = document.createElement("td");
      incorrect.innerHTML = 0;
      tr.appendChild(incorrect);

      const errors = document.createElement("td");
      errors.innerHTML = 0;
      tr.appendChild(errors);
      fragment.appendChild(tr);
    });
    
  });
  return fragment;
};
