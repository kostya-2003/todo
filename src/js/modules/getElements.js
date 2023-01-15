import UI from "./UI";
import removeElements from "./removeElements";
import elementComplete from "./elementComplete";
import todoFooter from "./todoFooter";

export default function (url) {
  fetch(url)
    .then((data) => data.json())
    .then((data) =>
      data.forEach((obj) => UI.listElements(obj.name, obj.isComplete, obj.id))
    )
    .then(() => {
      removeElements(document.querySelectorAll("[data-rm]"), url);
      elementComplete(document.querySelectorAll(".isCompleteBtn"), url);
      todoFooter(document.querySelectorAll(".listElement"));
    });
}
