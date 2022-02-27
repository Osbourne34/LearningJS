import { IsLogged } from "./isLogged.js";
import { Routing } from "./routing.js";
import { Dropdown } from "./dropdown.js";
import { Logout } from "./logout.js";
import { SetUserName } from "./setUserName.js";
import { AddTask } from "./addTask.js";
import { DeleteTask } from "./deleteTask.js";

IsLogged.init();
Routing.init();

const dropdown = new Dropdown();
dropdown.init();

const logout = new Logout('logout');
logout.init();

const setUserName = new SetUserName('.account__user');
setUserName.init();

const addTask = new AddTask('todo-form', 'input-date', 'input-title', 'important', '.todolist__list');
addTask.init();

const deleteTask = new DeleteTask('.todolist__list');