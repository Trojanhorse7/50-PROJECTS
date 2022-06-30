const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const form = document.getElementById('form');
const textInput = document.getElementById("text-input");

let text = 'Input a Text Above and Submit';
let idx = 1;
let speed = 200 / speedEl.value;

writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}


speedEl.addEventListener('input', (e) => speed = 200 / e.target.value);

form.addEventListener('submit', (e) => {
    e.preventDefault();
    text = textInput.value;
    writeText();
});