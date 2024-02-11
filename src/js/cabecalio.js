let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volte agora 😡";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})