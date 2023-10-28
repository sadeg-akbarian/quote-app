const button = document.querySelector("button");
const main = document.querySelector("main");

function renderState(xxx) {
  main.innerHTML = "";
  const quoteParagraph = document.createElement("p");
  const quoteText = document.createTextNode(xxx.quote);
  quoteParagraph.appendChild(quoteText);
  main.appendChild(quoteParagraph);
  const authorParagraph = document.createElement("p");
  const authorName = document.createTextNode("-- " + xxx.author);
  authorParagraph.appendChild(authorName);
  main.appendChild(authorParagraph);
}

button.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
    })
    .then((data) => {
      renderState(data);
    });
});
