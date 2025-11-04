export class TodoTask {
    todoText;
    doneTask;

    constructor (todoText: string, doneTask: boolean) {
        this.todoText = todoText;
        this.doneTask = doneTask; 
    }
}