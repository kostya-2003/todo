"use strict";
import UI from "./modules/UI";
import getElements from "./modules/getElements";
import postElements from "./modules/postElements";

const url = "http://localhost:8888/todos"


UI.runApp();
getElements(url)
postElements(document.getElementById("todoForm"), url)

