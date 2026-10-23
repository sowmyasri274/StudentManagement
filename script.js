
function add() {
    let name = document.getElementById("name").value;

    if (name == "") {
        alert("Enter student name");
    } else {
        let li = document.createElement("li");
        li.innerHTML = name;
        document.getElementById("list").appendChild(li);
        document.getElementById("name").value = "";
    }
}

