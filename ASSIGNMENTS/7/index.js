const joke = document.getElementById("joke");
const btn = document.getElementById("btn");

async function getJoke() {

    joke.textContent = "Loading joke...";
    
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=single&safemode");
        
        const data = await response.json();

        joke.textContent = data.joke;

    } catch (error) {
        joke.textContent = "Something went wrong!";
    }
}

btn.addEventListener("click", getJoke);