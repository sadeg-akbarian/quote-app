const button = document.querySelector("button");
const main = document.querySelector("main");

button.addEventListener("click", function () {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (response.ok === true) {
        return response.json();
      }
    })
    .then((data) => {
      main.innerHTML = "";
      const quoteParagraph = document.createElement("p");
      const quoteText = document.createTextNode(data.quote);
      quoteParagraph.appendChild(quoteText);
      main.appendChild(quoteParagraph);
      const authorParagraph = document.createElement("p");
      const authorName = document.createTextNode("-- " + data.author);
      authorParagraph.appendChild(authorName);
      main.appendChild(authorParagraph);
    });
});
