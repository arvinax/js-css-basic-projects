const from = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loaEventListeners();

function loaEventListeners() {
  from.addEventListener("submit", (e) => {
    if (taskInput.value === "") {
      alert("Add A Task");
      return;
    }

    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);

    // store in local storage
    storeInLS(taskInput.value);

    taskInput.value = "";

    e.preventDefault();
  });
}

function storeInLS(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
      removeFromLS(e.target.parentElement.parentElement);
    }
  }
});

function removeFromLS(taskItem){
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task, index) => {
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

clearBtn.addEventListener("click", (e) => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLS();
});

function clearTasksFromLS(){
  localStorage.clear();
}

filter.addEventListener("keyup", (e) => {
  const txt = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach((el) => {
    const item = el.firstChild.textContent;
    if (item.toLocaleLowerCase().indexOf(txt) != -1) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
  console.log(txt);
});

document.addEventListener("DOMContentLoaded", (e) => {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(el => {
    const li = document.createElement("li");
    li.className = "collection-item";
    li.appendChild(document.createTextNode(el));

    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
  })
});
