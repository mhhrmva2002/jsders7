let increaseBtn = document.querySelector(".increase");
let decreaseBtn = document.querySelector(".decrease");
let count = document.querySelector(".count");
let removeBtn = document.querySelector(".remove");

console.log(localStorage);
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("count")) {
        count.textContent = localStorage.getItem("count");
    }
    else {
        count.textContent = 0;
    }
});

// increase button clic
increaseBtn.addEventListener(".click", () => {
    localStorage.setItem("count", ++count.textContent);
    count.textContent = localStorage.getItem("count");
});

// decrease button clic
decreaseBtn.addEventListener(".click", () => {
    localStorage.setItem("count", --count.textContent);
    count.textContent = localStorage.getItem("count");
});

// remove local storage
removeBtn.addEventListener("click", () => {
    if (localStorage.getItem("count")) {
        // localStorage.removeItem("count");   ---tek tek remove etmek
        localStorage.clear();     // hamsini bir yerde remove etmek
        count.textContent=0;
    }
})