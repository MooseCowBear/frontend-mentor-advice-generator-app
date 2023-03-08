const apiUrl = "https://api.adviceslip.com/advice";

getAdvice(); 

//need to add event listener for click on dice to get new advice...
const adviceButton = document.querySelector("button");
adviceButton.addEventListener("click", () => {
    console.log("button clicked");
    getAdvice();
});

async function getAdvice(){
    console.log("calling getAdvice");
    const response = await fetch(apiUrl, {cache: "no-cache"}); //firefox needed no-cache
    const data = await response.json();
    console.log(data);

    const id = data.slip.id;
    const advice = data.slip.advice;

    displayAdvice(id, advice);
}

function displayAdvice(id, advice) {
    const adviceSpan = document.getElementById("advice");
    const header = document.querySelector("h1");

    header.innerText = `Advice #${id}`;
    adviceSpan.innerText = advice;
}
