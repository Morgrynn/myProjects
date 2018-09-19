var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");



// https://www.youtube.com/watch?v=VMRo6Uv856E&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=7


// delete button 
function deleteBtn(e) {
    if(e.target.className == 'delete')
    //find the li
    var li = e.target.parentElement;
    ul.removeChild(li);
}


function inputLength() {
    return input.value.length;
}

function createListElement() {
    // create Elements
    var li = document.createElement("li");
    var deleteBtn = document.createElement("button");

    //add content
    deleteBtn.textContent = 'delete';

    //add classes
    deleteBtn.classList.add('delete');

    //append to dom
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteBtn);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(e) {
    if (inputLength() > 0 && e.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

ul.addEventListener('click', deleteBtn);


// deleteBtn.addEventListener("click", deleteListAfterclick);




