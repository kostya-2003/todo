export default function (removeBtn, url) {
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = btn.parentElement.id;
      fetch(`${url}/${id}`, {
        method: "DELETE",
      });
    });
  });
}
