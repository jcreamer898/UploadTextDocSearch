const searchBtn = document.getElementById("searchBtn");
let output = document.querySelector(".output");
let changeText = document.getElementById("changeText");
const saveBtn = document.getElementById("saveBtn");
let outPutTxt = String(output.innerText);

//upload and input text doc:
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
}

// Replace occurance

document.addEventListener("DOMContentLoaded", function () {
  const replaceBtn = document.getElementById("replaceBtn");
  replaceBtn.addEventListener("click", findReplace);
  searchBtn.addEventListener("click", findOccurance);
 
});

const findReplace = (e) => {
  e.preventDefault();

  let searchBar = document.getElementById("searchBar").value;
  let replaceBar = document.getElementById("replaceBar").value;

  let text = document.querySelector(".output");
  


  if (
    typeof text.textContent === "string" ||
    text.textContent instanceof String
    
  ) {
    text.textContent = text.textContent.replaceAll(searchBar, replaceBar);
  } else {
    console.log("not string");
  }

 
};
  
const findOccurance = ()=>{
let search = document.getElementById("searchBar").value;
let textOccurance = document.querySelector(".output").textContent;
let pOutput = document.getElementById("occurance");
let count = (textOccurance.split(search).length -1);
pOutput.innerHTML =`Number of occurances = ${count}`


  console.log(count);
}

// const saveText =()=>{
//  const changedFile = document.getElementById("changedFile");
//  saveAs(changedFile);
// }
