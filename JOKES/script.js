const joke = document.querySelector(".joke");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getJoke);
getJoke();



// Using Async and Await to fetch data
async function getJoke() {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });

    const data = await response.json();
    joke.innerText = data.joke;
}

// USING .THEN() SYNTAX TO FETCH DATA

// function getJoke() {
//     fetch("https://icanhazdadjoke.com/", {
//         method: "GET",
//         headers: {
//             "Accept": "application/json"
//         }
//     })
//     .then((res) => res.json())
//     .then((data) => {
//         joke.innerText = data.joke;
//     })
// }
