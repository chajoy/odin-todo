import "./styles.css";
import * as build from "./pages";

const Projects = (() => {
    const projects = [];

    const GetProjects = () => projects;
    const GetProject = (project) => projects.find(e => e.title === project);
    const Add = (project) => {
        if (projects.findIndex(e => e.title === project) >= 0) {
            console.error(`Project ${project} already exists`);
        } else {
            projects.push(Project(project));
        }

    }
    const Remove = (project) => {
        let index = projects.findIndex(e => e.GetTitle() === project);
        if (index >= 0) {
            projects.splice(index, 1);
        } else {
            console.error(`Project ${project} doesn't exist`);
        }
    }

    return {
        GetProject,
        GetProjects,
        Add,
        Remove,
    }
})();

export const GetProjects = Projects.GetProjects();

function Project(title) {
    const tasks = [];

    const GetTasks = () => tasks.length > 0 ? tasks : `[Project: ${title}] Task List Empty`;
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
        title,
        AddTask,
        GetTasks,
        RemoveTask,
        GetTask,
    }
};

function Task(title, desc, dueDate, prio) {
    return {
        title,
        desc,
        dueDate,
        prio,
    }
}

export function addProject() {
    let title = prompt("Enter Project Title");
    let task = {
        title: prompt("Enter Task Title"),
        desc: prompt("Enter Task Description"),
    }

    Projects.Add(title);
    Projects.GetProject(title).AddTask(task.title, task.desc, 'today', 'high');

    build.projects(Projects.GetProjects());
}

build.home();


