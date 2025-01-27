import { GestionnaireTasks, EState, ITask } from "./GestionnaireTaches";

document.addEventListener("DOMContentLoaded", () => {

    const TaskMaker = new GestionnaireTasks()
    const taskList = document.getElementById("task-list")
    const addTaskBtn = document.getElementById("add-task")

    function showTask() : void {
        const allTask: ITask[] = TaskMaker.getAllTask();

        allTask.map(task => {
            document.createElement
        })
    }

})