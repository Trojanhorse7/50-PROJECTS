const faqs = document.querySelectorAll(".faq");
const toggles = document.querySelectorAll(".faq-toggle");

// USING THE FAQ-TOGGLE CLASS TO TOGGLE
toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    })
});

// USING THE FAQ CLASS TO TOGGLE
// faqs.forEach(faq => {
//     faq.children[2].children[0].addEventListener("click", () => {
//         faq.classList.add("active");
//     });
// });


// faqs.forEach(faq => {
//     faq.children[2].children[1].addEventListener("click", () => {
//         faq.classList.remove("active");
//     });
// });