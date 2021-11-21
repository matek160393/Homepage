{
    const welcome = () => {
        console.log("Cześć!")
    }
    welcome();

    let hideQuotes = document.querySelector(".js-buttonHideQuotes");
    const toggleClassQuotes = () => {
        const favoriteQuotes = document.querySelector(".section__js-favoriteQuotes");
        favoriteQuotes.classList.toggle("section__js-showQuotes");
        hideQuotes.innerText = favoriteQuotes.classList.contains("section__js-showQuotes") ? "Pokaż cytaty" : "Ukryj cytaty";
    }
    
    const init = () => {
        hideQuotes.addEventListener("click", toggleClassQuotes);
    }
    init();
}


