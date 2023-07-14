const insertData = (key, data) => {
  let todoLocal = [];
  if (localStorage.getItem(key)) {
    todoLocal = JSON.parse(localStorage.getItem(key));
  }

  todoLocal.push(data);

  localStorage.setItem("todoLocal", JSON.stringify(todoLocal));
};

const updateData = (key, data) => {
  localStorage.setItem("key", JSON.stringify(data));
};

const getData = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};
