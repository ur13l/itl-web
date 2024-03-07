
console.log("Hello, world!");

const input = document.getElementById("input-task");
const button = document.getElementById("button-task");
const list = document.querySelector("#list-tasks");

button.addEventListener("click", addItem);
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addItem(event);
    }
});

function addItem(event) {
    console.log(event)
    const task = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = input.value;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Eliminar";

    task.append(checkbox);
    task.append(span);
    task.append(removeButton);

    list.append(task);
    input.value = "";
    input.focus();
}