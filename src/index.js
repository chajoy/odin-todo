import "./styles.css";

const Projects = (() => {
    const projects = [];

    const GetProject = (project) => projects.find(e => e.GetTitle() === project);

    const Add = (project) => projects.push(Project(project));

    return {
        GetProject,
        Add,
    }
})();

function Project(title) {
    const todos = [];
    const _title = title;

    const GetTitle = () => _title;
    const GetTodo = () => todos.length > 0 ? todos : `List Empty`;
    const AddTask = (title, desc, dueDate, prio) => todos.push(Task(title, desc, dueDate, prio));
    const RemoveTask = (value) => {
        let toRemove = todos.findIndex(e => e.GetTitle() === value.toLowerCase());
        if (toRemove >= 0) {
            todos.splice(toRemove, 1);
        } else {
            console.log(`Task Does Not Exist`);
        }
    };

    return {
        GetTitle,
        AddTask,
        GetTodo,
        RemoveTask,
    }
};

function Task(title, desc, dueDate, prio) {
    return {
        GetTitle: () => title,
        GetDesc: () => desc,
        GetDueDate: () => dueDate,
        GetPrio: () => prio,
    }
}

Projects.Add(`default`);
Projects.GetProject(`default`).AddTask(`work`, `do work`, `now`, `urgent`);
Projects.GetProject(`default`).RemoveTask(`test`);
console.log(Projects.GetProject(`default`).GetTodo());
