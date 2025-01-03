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

    return {
        GetTitle,
        AddTask,
        GetTodo,
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
console.log(Projects.GetProject(`default`).GetTodo());




