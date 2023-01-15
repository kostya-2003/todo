import UI from "./UI";

export default function (todoItems) {
  const todoArr = [];
  todoItems.forEach((items) => {
    if (items.classList.contains("active")) {
      todoArr.push(items);
    }
    UI.todoFooterElem(todoItems, todoArr);
  });
}
