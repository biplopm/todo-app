const createTodoInput = document.querySelector(".todo .add-new-todo input");
const createTodoButton = document.querySelector(".todo .add-new-todo .btn");
const todoList = document.querySelector(".todo ul");

const showTodo = () => {
  let todoLocal = [];
  if (localStorage.getItem("todoLocal")) {
    todoLocal = JSON.parse(localStorage.getItem("todos"));
  }

  let content = "";
  todos.map((item) => {
    content += `<li>
    <i class="fa fa-check"></i> ${item}
    <button onclick="deleteTodos('${item}')"><i class="fa fa-trash"></i></button>
  </li>`;
  });
  todoList.innerHTML = content;
};

showTodo();

createTodoButton.onclick = () => {
  const todo = createTodoInput.value;
  if (todo) {
    insertData("todos", todo);
    //todos.push(todo);
    createTodoInput.value = "";
  } else {
    alert("Please select a new todo");
  }

  showTodo();
};

const deleteTodos = (item) => {
  const updateTodo = todos.filter((data) => data !== item);
  const todos = getData(todos);

  updateData("todos", updateTodo);

  showTodo();
};
