// alert("cihuyyy");
const adviceId = document.getElementById("advice-id");
const advice = document.getElementById("advice");
const button = document.getElementById("btn");

function fetchData() {
  fetch("https://api.adviceslip.com/advice", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      adviceId.innerHTML = data.slip.id;
      advice.innerHTML = data.slip.advice;
      button.disabled = false;
    })
    .catch((error) => {
      console.error(error);
    });
}

fetchData();
