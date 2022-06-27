const buttons = document.querySelectorAll(".ripple")

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const ripple = document.createElement("span");
        ripple.classList.add("ripple-effect");
        ripple.style.top = `${yInside}px`;
        ripple.style.left = `${xInside}px`;

        e.target.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 500);
    })
})