// TODO: Autocomplete the input with AJAX calls.

const results = document.querySelector("ul#results");

const fetchAPI = (keyword) => {
  const url = `https://wagon-dictionary.herokuapp.com/autocomplete/${keyword}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const words = data.words.slice(0, 5);
      // before inserting, empty the UL
      results.innerHTML = "";
      // insert each result to the DOM
      words.forEach((word) => {
        results.insertAdjacentHTML("beforeend", `<li>${word}</li>`);
      });
    });
};

// find the search bar for the inputs
const input = document.getElementById("search");
// add the event type
input.addEventListener("keyup", (event) => {
  // callback function / function that returns the results of the search
  const newWord = input.value;
  fetchAPI(newWord);
})
