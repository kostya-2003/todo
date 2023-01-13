const root = document.getElementById("root")

export default {
    todoTitle: document.createElement("div"),
    titleElement: document.createElement("h2"),
    todoForm: document.createElement("form"),
    formInput: document.createElement("input"),
    formButton: document.createElement("button"),
    todoItems: document.createElement("div"),
    todoFooter: document.createElement("div"),

    elemName(){
        this.todoTitle.id = "todoTitle"
	    this.titleElement.textContent = "ToDo Application"
        this.todoForm.id = "todoForm"
        this.formInput.type = "text"
        this.formInput.placeholder = "Type Here"
        this.formButton.textContent = "Add"
        this.todoItems.id = "todoItems"
        this.todoFooter.id = "todoFooter"
    },

    elemStyle(){
        document.body.style = "margin: 24px"
        root.style = `max-width: 320px;margin: 50px auto;padding: 24px;border-radius: 7px;background: #303F9F;font-family: tahoma;`;
        this.titleElement.style = "color: #FFEB3B; font-size: 24px; margin-bottom: 24px;"
        this.todoForm.style = "margin-bottom: 24px; display: flex"
        this.formInput.style = `display: block;padding: 7px;border: 1px solid #3F51B5;outline: 0;border-radius: 7px 0px 0px 7px;width: 100%;`
        this.formButton.style = `padding: 7px;border: 1px solid #3F51B5;outline: 0;border-radius: 0px 7px 7px 0px;background: #FFEB3B;color: #111;cursor: pointer;font-weight: bold;`
    },

    appendElem(){
        this.todoTitle.append(this.titleElement);
        this.todoForm.append(this.formInput, this.formButton)
        root.append(this.todoTitle,this.todoForm, this.todoItems, this.todoFooter)
    },

    listElements(name, isComplete, id){
        this.todoItems.innerHTML += `
        <div class="${isComplete ? "listElement active" : "listElement"}" id="${id}"  style="
			display:flex;
			justify-content:space-between;
			align-items:center;
			margin-bottom: 12px;
		">
			<label style="display: block;color: #fff;">
				<input type="checkbox" class="isCompleteBtn">
				<span>${name}</span>
			</label>
			<button
				style="
					background: #3F51B5;
					color: #fff;
					border: none;
					padding: 7px;
					border-radius: 7px;
					font-size: 12px;
					cursor: pointer;
				"
				data-rm >
				Remove
			</button>
		</div>
        `
    },

    todoFooterElem(todoItems){
       const arr = []
        todoItems.forEach(items => { 
            if(items.classList.contains("active")){
                arr.push(items)
            }
            this.todoFooter.innerHTML = `
            <span style="font-style: italic;color: #FFEB3B">${arr.length} / ${todoItems.length}</span>`
        })
    },

    runApp(){
        this.appendElem()
        this.elemName()
        this.elemStyle()
    }
}