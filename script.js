
const searchBtn = document.getElementById("searchBtn");
const output = document.querySelector(".output");

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
    searchBtn.addEventListener("click", searchText);
    
  }
  

}

  function searchText() {
    const searchBar = document.getElementById("searchBar").value;
   
    console.log(searchBar);
  }



