console.log("Cześć")
let hideQuotes = document.querySelector(".js-buttonHideQuotes");
let favoriteQuotes = document.querySelector(".section__js-favoriteQuotes");


hideQuotes.addEventListener("click", () => {
    favoriteQuotes.classList.toggle("section__js-showQuotes");
    if (favoriteQuotes.classList.contains("section__js-showQuotes")) {
        hideQuotes.innerText = "Pokaż cytaty";
    }
    else {
        hideQuotes.innerText = "Ukryj cytaty";

    }
});


