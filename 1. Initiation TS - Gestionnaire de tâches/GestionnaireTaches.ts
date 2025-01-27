export enum EState {
    toDo,
    done
}

export interface ITask {
    id: number;
    title: string;
    description?: string;
    state: EState;
}

class Task implements ITask {
    constructor(public id: number, public title: string, public description: string, public state: EState) {

    }
}

export class GestionnaireTasks {
    private taskList: ITask[] = [];

    addTask(newTask: ITask) {
        this.taskList.push(newTask);
    }

    removeTask(id: number) {
        const index = this.taskList.findIndex(task => task.id === id);
        if(index !== -1) {
            this.taskList.splice(index, 1);
        }
    }

    updateTask(taskToUpdate: ITask) {
        const index = this.taskList.findIndex(task => task.id === taskToUpdate.id);
        if(index !== -1) {
            this.taskList[index] = taskToUpdate;
        }
    }

    getAllTask() : ITask[] {
        return this.list;
    }
}