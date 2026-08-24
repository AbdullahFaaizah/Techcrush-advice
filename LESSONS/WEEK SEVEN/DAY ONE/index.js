const btn = document.getElementById("btm");
const text = document.getElementById("text");

btn.addEventListener("click" , () =>{
    text.textContent = "button was clicked";
});

const style = document.getElementById("style");

style.addEventListener("mouseover" , () => {
    style.style.backgroundColor = "blue";
    style.style.color = "white";
});

style.addEventListener("mouseleave" , () => {
    style.style.backgroundColor = "transparent";
    style.style.color = "red";
})