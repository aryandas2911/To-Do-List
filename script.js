const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function AddTask() {
  if (InputBox.value === "") {
    alert("Enter something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    ListContainer.appendChild(li);
  }
  InputBox.value = "";
}
