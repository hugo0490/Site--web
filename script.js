document.getElementById("menu-button").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("open");
});

document.getElementById("close-button").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.remove("open");
});