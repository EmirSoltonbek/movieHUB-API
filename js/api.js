let cards = document.querySelector(".cards");
let input = document.querySelector("input");
let button = document.querySelector(".info button");
let data = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All");
let forSearch = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";
data
  .then((response) => {
    return response.json();
  })
  .then((info) => {
    console.log(info.Search);
    cards.innerHTML = "";
    info.Search.forEach((element) => {
      //   console.log(element);
      cards.innerHTML += `
        <div class="card">
        <div class="img-block"><img src="${element.Poster}" alt="img"></div>
        <div class="title-block"><h2>${element.Title}</h2></div>
        <div class="year-block"><h4>${element.Year}</h4></div>
    </div>
        `;
    });
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("ваш запрос прилетел");
  });

function search() {
  cards.innerHTML = "";
  let dataForSearch = fetch(forSearch);
  dataForSearch
    .then((res) => {
      return res.json();
    })
    .then((info) => {
      // console.log(info);
      let newLet = info.Search;
      console.log(newLet);
      newLet.forEach((elem) => {
        // console.log(elem);
        let inpLow = input.value.toLowerCase();
        let titLow = elem.Title.toLowerCase();
        if (titLow.includes(inpLow) || elem.Year.includes(inpLow)) {
          cards.innerHTML += `
          <div class="card">
          <div class="img-block"><img src="${elem.Poster}" alt="img"></div>
          <div class="title-block"><h2>${elem.Title}</h2></div>
          <div class="year-block"><h4>${elem.Year}</h4></div>
      </div>
          `;
        }
      });
    });
}
// input.addEventListener('input', search);
button.addEventListener("click", search);
