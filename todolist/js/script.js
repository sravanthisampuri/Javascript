var todoList = []
var deleteList = []
var inputdata;


function hideValidationMessage() {
    document.getElementById('alertmsg').style.display = "none";
}
hideValidationMessage();

function showValidationMessage() {
    document.getElementById('alertmsg').style.display = "block";
}

function addList() {
    inputdata = document.getElementById('input_txt').value;
    if (inputdata) {
        hideValidationMessage();
        activeList(inputdata);
    } else {
        showValidationMessage();
    }

}
function activeList(inputdata) {
    document.getElementById('active').innerHTML += "<li>" + inputdata + "</li>";
    todoList.push({ "data": inputdata, "Done": false, "istrashed": false })
    //console.log(todoList)
    //    active.push(inputdata);
    document.getElementById('input_txt').value = ""
    updatedList();
}
function updatedList() {
    document.getElementById('active').innerHTML = "";
    document.getElementById('done').innerHTML = "";
    document.getElementById('delete').innerHTML = "";
    for (i = 0; i < todoList.length; i++) {
        if (todoList[i].istrashed) {
            document.getElementById('delete').innerHTML += "<li>" + todoList[i].data + " <button class='btn btn-info' onclick='redoList(" + i + ")' >Retrieve</button>" + "</li>";
        }
        else if (todoList[i].Done) {
            document.getElementById('done').innerHTML +=
                "<li class='strike'>" + todoList[i].data + " <button class='btn btn-primary' onclick='redoList(" + i + ")' >Undo</button>" + "</li>";
        } else {
            document.getElementById('active').innerHTML +=
                "<li>" + todoList[i].data + "  <button class='btn btn-danger' onclick='deletelist(" + i + ")' >Delete</button> <button class='btn btn-success' onclick='newDoneList(" + i + ")'>Done</button></li>";
        }
    }
}
function deletelist(index) {
    todoList[index].istrashed = true;
    // todoList.splice(index, 1);


    updatedList();
}

function newDoneList(i) {
    // document.getElementById('active').innerHTML +="<del>"+"<li>" + todoList[i].data + "</li>"+"</del>";
    todoList[i].Done = true;
    updatedList();
}
function redoList(i) {
    todoList[i].Done = false;
    todoList[i].istrashed = false;
    updatedList();

}



