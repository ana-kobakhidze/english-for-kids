const reset = document.querySelector(".red");
const resetUi = () => {
  
}
export const statsContent = () => {
  let fragment = new DocumentFragment();

  const statsJson = localStorage.getItem("stats");
  const stats = JSON.parse(statsJson);

  reset.addEventListener("click", () => {
    const allStats = stats;
    stats.forEach((element) => {
      element.clicks = 0;
      element.correct = 0;
      element.wrong = 0;
      element.errors = 0;
      document.querySelectorAll(".correct").forEach(item =>{
        item.innerHTML = 0;
      });
      document.querySelectorAll(".clicks").forEach(item => {
        item.innerHTML = 0;
      });
      document.querySelectorAll(".incorrect").forEach( item => {
        item.innerHTML = 0;
      });
    localStorage.setItem("stats", JSON.stringify(allStats));
  });
})
  stats.forEach((element) => {
    const tr = document.createElement("tr");
    tr.classList.add("rowInfo");

    const title = document.createElement("td");
    title.innerHTML = element.category;
    tr.appendChild(title);

    const word = document.createElement("td");
    word.innerHTML = element.word;
    tr.appendChild(word);

    const translation = document.createElement("td");
    translation.classList.add("georgian");
    translation.innerHTML = element.translation;
    tr.appendChild(translation);

    const clicks = document.createElement("td");
    clicks.classList.add("clicks");
    clicks.innerHTML = element.clicks;
    tr.appendChild(clicks);

    const correct = document.createElement("td");
    correct.classList.add("correct");
    correct.innerHTML = element.correct;
    tr.appendChild(correct);

    const incorrect = document.createElement("td");
    incorrect.classList.add("incorrect");
    incorrect.innerHTML = element.wrong;
    tr.appendChild(incorrect);

    const errors = document.createElement("td");
    errors.innerHTML = 0;
    
    tr.appendChild(errors);
    fragment.appendChild(tr);
  });

  return fragment;
};
