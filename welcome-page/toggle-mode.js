export const toggleModes = () => {

    const toggleBtn = document.querySelector(".switchBox");
    toggleBtn.addEventListener("click", () =>{
        toggleBtn.dispatchEvent(createEvent(toggleBtn.checked));
    });
}

const createEvent = (curVal)=> { return new CustomEvent('toogleChanged',{detail: curVal})}
