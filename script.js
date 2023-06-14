//your code here
let todoList = document.getElementById("todoList");
let input = document.getElementById("newTodoInput");
let addBtn = document.getElementById("addTodoBtn");

addBtn.addEventListener("click",()=>{
    // console.log(input.value);
    if(input.value!=""){
        let list = `<li>${input.value}</li>`;
        todoList.innerHTML += list;
        input.value = "";
    }
    else{
        alert("<<<--Please enter ToDo-->>>>")
    }
})