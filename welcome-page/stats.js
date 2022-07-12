export const statsContent = () => {
  let fragment = new DocumentFragment();

  window.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.querySelectorAll('.switchBox')[0];
    toggle.addEventListener('toogleChanged',(ev) => {
      console.log(ev.detail);
    })
  });
  
  const statsJson = localStorage.getItem("stats");
  const stats = JSON.parse(statsJson);

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
      clicks.innerHTML = element.clicks;
      tr.appendChild(clicks);

      const correct = document.createElement("td");
      correct.innerHTML = element.correct;
      tr.appendChild(correct);

      const incorrect = document.createElement("td");
      incorrect.innerHTML = element.wrong;
      tr.appendChild(incorrect);

      const errors = document.createElement("td");
      errors.innerHTML = 0;
      tr.appendChild(errors);
      fragment.appendChild(tr);
    });
    
  return fragment;
};
