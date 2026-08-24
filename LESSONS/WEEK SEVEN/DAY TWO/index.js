// "https://api.adviceslip.com/advice"

const id = document.getElementById("id");
const advice = document.getElementById("advice");
const btn = document.getElementById("btn");

async function getAdvice() {
    // try catch block 
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        // console.log(response);
        const data = await response.json();
        console.log(data);
        id.textContent = `advice #${data.slip.id}`;
        advice.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        advice.textContent = "Something is wrong somewhere!";
    }
}

getAdvice();

btn.addEventListener("click", getAdvice);