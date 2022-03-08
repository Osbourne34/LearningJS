import {IsLogged} from "./isLogged.js";
import {Routing} from "./routing.js";
import {Dropdown} from "./dropdown.js";
import {Logout} from "./logout.js";
import {SetUserName} from "./setUserName.js";
import {AddTask} from "./addTask.js";
import {DeleteTask} from "./deleteTask.js";
import {EditTask} from "./editTask.js";
import {Search} from "./search.js";
import {Tabs} from "./tabs.js";
import {DragAndDrop} from "./draganddrop.js";
import {RenderTasks} from "./renderTasks.js";
import {GoToSettings} from "./goToSettings.js";

IsLogged.init();
Routing.init();

const dropdown = new Dropdown();
dropdown.init();

const logout = new Logout('logout');
logout.init();

const setUserName = new SetUserName('.account__user');
setUserName.init();

const renderTasks = new RenderTasks(
    '.todolist__list',
    'process-container',
    'important-container',
    'done-container',
);

const addTask = new AddTask(
    'todo-form',
    'input-date',
    'input-title',
    'important'
);
addTask.init();

const deleteTask = new DeleteTask('.todolist__list');

const editTask = new EditTask('modal-date', 'modal-task', 'modal', 'modal-form', '.todolist__list');

const search = new Search('.search__input', '.todolist__list');

const tabs = new Tabs('.todolist__tasks', '.category', '.tabs-item');

const dragAndDrop = new DragAndDrop('.task', '.category-container');

const goToSettings = new GoToSettings();
