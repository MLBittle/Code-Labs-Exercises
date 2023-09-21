// Objective: Understand DOM Selection.

//Instructions:

//Use JavaScript to select the element with an ID of "myDiv" and change its background color to "lightblue". Select all the paragraph (<p>) elements on the page and log their inner text.




document.getElementById("myDiv").style.backgroundColor = "lightblue";

const paragraphs = document.querySelectorAll('p');

for (const paragraph of paragraphs) {
  console.log(paragraph.innerText);
}

