import {RenderTasks} from "./renderTasks.js";

export class Tabs {
    constructor(tasksWrap, categoryWrap, tabsItems) {
        this.tasksWrap = document.querySelector(tasksWrap);
        this.categoryWrap = document.querySelector(categoryWrap);
        this.tabsItems = document.querySelectorAll(tabsItems);

        this.categoryWrap.style.display = 'none';
        this.tasksWrap.style.display = 'block';

        this.tabsItems.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                this.tabsItems.forEach(item => {
                    item.classList.remove('active');
                })
                tab.classList.add('active');

                const users = JSON.parse(localStorage.getItem('users'));
                const user = JSON.parse(localStorage.getItem('user'));

                const renderTasks = new RenderTasks(
                    '.todolist__list',
                    'process-container',
                    'important-container',
                    'done-container',
                );

                users.forEach(item => {
                    if (item.login === user) {
                        renderTasks.renderTasks(item.tasks);
                        renderTasks.renderTasksForCategories(item.tasks);
                    }
                });

                if (index === 0) {
                    this.tasksWrap.style.display = 'block';
                    this.categoryWrap.style.display = 'none';
                } else if (index === 1) {
                    this.tasksWrap.style.display = 'none';
                    this.categoryWrap.style.display = 'flex';
                }
            })
        })
    }
}