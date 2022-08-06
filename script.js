let output = document.querySelector(".output");
let outPutTxt = String(output.innerText);
let textOccurance = document.querySelector(".occurance").innerText;
let searchBar = document.getElementById("searchBar").value;
let replaceBar = document.getElementById("replaceBar").value;

//upload and input text doc:\\
function textReader() {
  const [file] = document.querySelector("input[type=file]").files;

  const fileReader = new FileReader();

  fileReader.addEventListener(
    "load",
    () => {
      output.innerText = fileReader.result;
    },
    false
  );

  if (file) {
    fileReader.readAsText(file);
  }
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", findOccuranceS);
  searchBtn.addEventListener("click", preventDefault);
}

// Event Handlers\\

document.addEventListener("DOMContentLoaded", function () {
  const replaceBtn = document.getElementById("replaceBtn");
  const replaceTotal = document.getElementById("replaceTotal");
  replaceBtn.addEventListener("click", findReplace);
  replaceOcc.addEventListener("click", findOccuranceR);
  replaceOcc.addEventListener("click", preventDefault);
  replaceTotal.addEventListener("click", visible)
  replaceTotal.addEventListener("click", preventDefault);

});

const preventDefault = (e) => {
  e.preventDefault();
};
//Replace and Save \\
const findReplace = (e) => {
  e.preventDefault();

  let search = document.getElementById("searchBar").value;
  let replace = document.getElementById("replaceBar").value;
  let text = document.querySelector(".output");

  //Blob for text download\\
  if (
    typeof text.textContent === "string" ||
    text.textContent instanceof String
  ) {
    let changedText = text.textContent.replaceAll(search, replace);
    text.textContent = changedText;
    var blob = new Blob([changedText], {
      type: "text/plain;charset=utf-8",
    });
    saveText(blob, "dynamic.txt");
  } else {
    warn("not a string");
  }
};
//Occurance of string in Search\\
const findOccuranceS = () => {
  let outputText1 = document.querySelector(".output").innerText;
  console.log(typeof outputText1);
  let pOutput1 = document.getElementById("occurances");
  let search = document.getElementById("searchBar").value;
  console.log(search);
  let count1 = outputText1.split(search).length - 1;
  pOutput1.innerHTML = `Number of occurances from search = ${count1}`;
  console.log(pOutput1);
  reveal(count1)
};
//Occurance of string in Replace\\
const findOccuranceR = () => {
  let outputText2 = document.querySelector(".output").innerText;
  let replace = document.getElementById("replaceBar").value;
  console.log(replace);
  let pOutput2 = document.getElementById("occurancesR");
  let count2 = outputText2.split(replace).length - 1;
  pOutput2.innerHTML = `Number of occurances from replacement = ${count2}`;
  console.log(pOutput2);
};

//Occurances of replaced\\

const reveal = (count) => {
  let pOutput3 = document.getElementById("occurancesT");
  
  pOutput3.innerHTML = `Replaced string = ${count}`;
  console.log(count);
};
const visible = ()=>{
  let pOutput3 = document.getElementById("occurancesT");
  pOutput3.style.visibility = "visible";
}

//Save Text\\
const saveText = (doc, txt) => {
  if ((doc, txt)) {
    saveAs(doc);
  }
  return doc;
};

//reload\\
const reloadPage = () => {
  location.reload();
};
