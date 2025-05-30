const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function AddTask() {
  if (InputBox.value === "") {
    alert("Enter something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  InputBox.value = "";
  saveData();
}

ListContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ListContainer.innerHTML);
}

function showData() {
  ListContainer.innerHTML = localStorage.getItem("data");
}

showData();
