let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.getElementById("ul");
let item = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click", crossOut);

    let dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}