"use strict";
class TodoList {
    constructor(id, name, completed) {
        // Lấy dữ liệu từ localStorage nếu có, nếu không thì khởi tạo một mảng rỗng
        const storedTodoList = localStorage.getItem("todoList");
        this.todoList = storedTodoList ? JSON.parse(storedTodoList) : [];
        this.id = id;
        this.name = name;
        this.completed = completed;
    }
    renderJob() {
        let elementRender = document.getElementById("render");
        const myInput = document.getElementById('namework');
        const inputValue = myInput.value;
        let text = "";
        for (let index = 0; index < this.todoList.length; index++) {
            text += `
        
       

        <div> <input type="checkbox" />${inputValue} <button>
        <div>
       
            <span class="material-symbols-outlined"> edit </span></button
          ><button>
            <span id="d1" class="material-symbols-outlined"> delete </span>
          </button>
         </div>
       
        `;
        }
        elementRender.innerHTML = text;
        this.saveToLocalStorage();
    }
    ;
    createJob() {
        // Tạo mới một công việc và thêm vào Todolist
        const newJob = {
            id: this.todoList.length + 1,
            name: "inputValue",
            completed: false,
        };
        this.todoList.push(newJob);
        // console.log(11111,this.todoList);
        this.saveToLocalStorage();
    }
    updateJob(id, completed) {
        // Cập nhật trạng thái của một công việc trong Todolist
        const jobIndex = this.todoList.findIndex((job) => job.id === id);
        if (jobIndex !== -1) {
            this.todoList[jobIndex].completed = completed;
            this.saveToLocalStorage();
        }
    }
    deleteJob(id) {
        // Xóa một công việc khỏi Todolist
        const jobIndex = this.todoList.findIndex((job) => job.id === id);
        if (jobIndex !== -1) {
            this.todoList.splice(jobIndex, 1);
            this.saveToLocalStorage();
        }
    }
    saveToLocalStorage() {
        // Lưu Todolist vào localStorage
        localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
}
// lấy element button add
//các cách làm việc với TodoList
const todoList = new TodoList(1, "đánh răng", true);
// todoList.createJob();
// todoList.createJob();
// todoList.renderJob();
todoList.updateJob(1, true);
todoList.deleteJob(2);
let elementAdd = document.getElementById("add11");
console.log(777777, elementAdd);
elementAdd.addEventListener("click", () => {
    const myInput = document.getElementById('namework');
    const inputValue = myInput.value;
    if (inputValue === '') {
        alert("không được để chống");
        return 0;
    }
    todoList.createJob();
    todoList.renderJob();
});
// ...
// deleteJob(id: number): void {
//   // Xóa một công việc khỏi Todolist
//   const jobIndex = this.todoList.findIndex((job) => job.id === id);
//   if (jobIndex !== -1) {
//     this.todoList.splice(jobIndex, 1);
//     this.saveToLocalStorage();
//   }
// }
// // ...
const deleteButtons = document.querySelectorAll('.material-symbols-outlined#d1');
deleteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Get the job id from the button or any other source
        const id = parseInt(button.id, 10); // Convert the ID to a number
        todoList.deleteJob(id);
        todoList.renderJob();
    });
});
