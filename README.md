# Text File Upload
[Try now:](https://vwithun.github.io/UploadTextDocSearch/)
![screenshot of app](https://cdn.myportfolio.com/09ab80af-6638-485d-9a0e-fc8b193a105a/013e8c38-58d0-4f67-b22e-ff00d1b7d7a5_rw_1200.png?h=a6f7fd238cb9d3ac2aa02161240ee447)

### Features
- File Uploader that renders onto the UI for editing. 
- Can replace instance of a string within a text and resaved.

### Built with

- JS
- CSS
- HTML5

## Getting started
- Choose text doc: Uploader will except script files and other documents and convert them to a string.
- The "Get Occurance (search)" button will reveal the number of all occurances of the search bar value found within the text document. 
- The "Replace and Save" button will replace all occurances of the search value with the replace value.
- "Get Occurance (replace)" button will show all of the occurances of the replace bar value.
- The "Get Total Replaced" will reveal what has been replaced.


### Other considerations for improvement:

- Currently the code is verbose with variable namees that could be simplified.
- The value of the search and replace can be updated without refreshing the page. However,the input  will output the total replaced string for the first string. 
- A counter will have to be created in order to store the value and update the total count.
- The save button is currently attached to the replaced button. Ideailly, there should be a save button once all changes are met. 
- Conditional statements and error handlers can be added to ensure that the values are imputed correctly. 

### References for this project:
- [FileReader.js](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText)
- [onchange event](https://www.w3schools.com/jsref/event_onchange.asp)
- [Replace Method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
