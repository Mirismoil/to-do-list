let body = document.body;

let box = body.querySelector(".box");

let form = body.querySelector(".form");

let formInput = body.querySelector(".form__input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let task = formInput.value;
  if(task.length <= 3){
    modal.style.display= 'block'
  }else{    
      let taskInput = document.createElement("input");
      taskInput.type = "checkbox";
      taskInput.className = "task__input";
    
      let taskDesc = document.createElement("div");
      taskDesc.textContent = task ;
      taskDesc.className= "task__text"; 
    
      let taskEdit = document.createElement("button");
      taskEdit.textContent = "Edit";
    
      let taskDelete = document.createElement("button");
      taskDelete.textContent = "Delete";
    
      let taskDiv = document.createElement("div");
      taskDiv.className = "task";
      taskDiv.append(taskInput, taskDesc, taskEdit, taskDelete);
      box.appendChild(taskDiv);
  }
  
  formInput.value = "";
});




let modal = document.querySelector('.modal') 
let button = document.querySelector(".butun1")

body.addEventListener("click",()=>{
  modal.style.display= 'none'
})

button.addEventListener("click",()=>{
  modal.style.display= 'none'
})