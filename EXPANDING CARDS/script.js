const panels = document.querySelectorAll(".panel");
const h3 = document.querySelectorAll(".panel h3");

function addClassActive(panel) {
    panel.classList.add("active");
}

function removeClassActive() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}

panels.forEach(panel => {
    panel.addEventListener("click", () => {
        removeClassActive();
        addClassActive(panel);
    });
});