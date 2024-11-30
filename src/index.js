import "./styles.css";

const Project = (title) => {
    const todos = [];

    const getTitle = () => {
        return title;
    }

    const getTodo = () => {
        return todos;
    }

    const addTask = (task) => {
        todos.push(task);
    }

    return {
        getTitle,
        addTask,
        getTodo,
    }
};

class Task {
    constructor(title, desc, dueDate, prio) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.prio = prio;
    }


}

const projects = [];

projects.push(Project(`default`));

projects[0].addTask(new Task(`work`, `do work`, `now`, `urgent`));

console.log(projects[0].getTodo())