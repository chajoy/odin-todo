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
    const tasks = [];

    const GetTitle = () => title;
    const GetTaskList = () => tasks.length > 0 ? tasks : `[Project: ${title}] Task List Empty`;
    const GetTask = (input) => tasks.length > 0 ? tasks[input] : `[Project: ${title}] Task List Empty`;
    const AddTask = (title, desc, dueDate, prio) => tasks.push(Task(title, desc, dueDate, prio));
    const RemoveTask = (input) => {
        let toRemove = tasks.findIndex(e => e.GetTitle() === input.toLowerCase());
        if (toRemove >= 0) {
            tasks.splice(toRemove, 1);
        } else {
            console.log(`Task Does Not Exist`);
        }
    };

    return {
        GetTitle,
        AddTask,
        GetTaskList,
        RemoveTask,
        GetTask,
    }
};

function Task(title, desc, dueDate, prio) {
    const Edit = (toEdit, value) => {

    }

    return {
        GetTitle: () => title,
        GetDesc: () => desc,
        GetDueDate: () => dueDate,
        GetPrio: () => prio,
        Edit,
    }
}

Projects.Add(`default`);
Projects.GetProject(`default`).AddTask(`work`, `do work`, `now`, `urgent`);
Projects.GetProject(`default`).GetTask(0).Edit(`title`, `test`);
console.log(Projects.GetProject(`default`).GetTask(0).GetTitle());
