function addNewTask() {
    var list = document.getElementById("List");
    var text = document.getElementById("task_name").value.trim();

    if (text === "") {
        alert("Por favor, insira o nome da tarefa.");
        return;
    }

    var listItem = document.createElement("li");
    listItem.className = "list-item";

    var textElement = document.createElement("span");
    textElement.textContent = text;
    textElement.onclick = function () {
        listItem.classList.toggle("completed");
    };

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Excluir";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(textElement);
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    document.getElementById("task_name").value = "";
}