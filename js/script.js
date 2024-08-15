let cypherButton = document.getElementById("cypher");
let decypherButton = document.getElementById("decypher");
let copyButton = document.getElementById("copy");

let inputText = document.getElementById("input-text");
let resultDisplay = document.getElementById("result");

const textValues = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };

// Cifrado de texto
cypherButton.addEventListener("click", () => {
  let text = inputText.value;
  // if (isIncorrectInput(text)) {
  //   alert("Solo se permiten letras minúsculas y sin acentos");
  //   return;
  // }

  let cypherKeys = new RegExp(Object.keys(textValues).join("|"), "g");
  let newResult = text.replace(cypherKeys, (matched) => {
    return textValues[matched];
  });
  displayResult(newResult);
});

// decifrado de texto
decypherButton.addEventListener("click", () => {
  let text = inputText.value;

  // if (isIncorrectInput(text)) {
  //   alert("Solo se permiten letras minúsculas y sin acentos");
  //   return;
  // }

  let result = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  displayResult(result);
});

// para copiar texto de resultado
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(resultDisplay.querySelector("p").innerHTML);
});

// mostrar resultado de cifrado o descifrado
function displayResult(text) {
  let resultPlaceholder = document.getElementById("result-placeholder");
  let resultButtons = document.getElementById("result-buttons");
  resultPlaceholder.style.display = "none";
  resultDisplay.style.display = "block";
  resultButtons.style.display = "block";
  resultDisplay.innerHTML = "";
  resultDisplay.appendChild(document.createElement("p")).textContent = text;
}

// Ajuste de altura del textarea
inputText.style.height = "auto";
inputText.addEventListener("input", () => {
  inputText.style.height = inputText.scrollHeight + "px";
});

// validación de texto ingresado
function isIncorrectInput(text) {
  return /[A-Z]/.test(text);
}
