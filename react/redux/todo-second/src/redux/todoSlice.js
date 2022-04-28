import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {
                id: Math.random(),
                text: 'asd',
                completed: false
            },
            {
                id: Math.random(),
                text: 'asd',
                completed: true
            }
        ],
    },

    reducers: {
        addTask(state, action) {
            state.tasks.push({
                id: Math.random(),
                text: '',
                completed: false
            })
        },
        setTaskText(state, action) {
            const currentTask = state.tasks.find(item => action.payload.id === item.id);
            currentTask.text = action.payload.text;
        },
        toggleCompleted(state, action) {
            const currentTask = state.tasks.find(item => action.payload.id === item.id);
            currentTask.completed = !currentTask.completed;
        },
        removeTask(state, action) {
            state.tasks = state.tasks.filter(item => item.id !== action.payload.id);
        },
        clearCompletedTasks(state, action) {
            state.tasks = state.tasks.map(item => {
                item.completed = false;
                return item;
            });
        }
    }
})

export const {
    addTask,
    setTaskText,
    toggleCompleted,
    removeTask,
    clearCompletedTasks
} = todoSlice.actions;
export default todoSlice.reducer;