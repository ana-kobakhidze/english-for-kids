const modal = document.getElementById("myModal");
const modalContent = document.getElementById("modalContent");
const span = document.getElementsByClassName("close")[0];
const image = document.createElement("img");



  window.onclick = (event) => {
    if (event.target == modalContent) {
      closeModal();
    }
  };


export const openModal = (isSuccess) => {
  modal.style.display = "block";
  image.src = isSuccess ? "../assets/images/win.svg" : "../assets/images/failure.svg";
  image.alt = isSuccess ? "win" : "failure";
  image.classList.add(isSuccess ? "win" : "failure");
  modalContent.appendChild(image);
  span.addEventListener("click", function () {
    closeModal();
  });
};

export const closeModal = () => {
  modal.style.display = "none";
  window.location.href = "https://ana-kobakhidze.github.io/english-for-kids/dist/index.html"
};
