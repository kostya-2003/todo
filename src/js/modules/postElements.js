export default function (todoForm, url){
    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = todoForm.firstElementChild.value.trim()
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({name: name, isComplete: false})
        })
    })
}