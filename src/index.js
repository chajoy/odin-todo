import "./styles.css";
import { home as build_home, projects as build_projects } from "./pages";
//remove this when not using temp_data.js
import { generateTempData } from "./temp_data";

//remove 'export' when not using temp_data.js
export const Projects = (() => {
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

    const GetTasks = () => tasks;
    const GetTask = (input) => tasks.length > 0 ? tasks[input] : `[Project: ${title}] Task List Empty`;
    const AddTask = (title, desc, dueDate, prio) => tasks.push(Task(title, desc, dueDate, prio));
    const RemoveTask = (input) => {
        if (input >= 0) {
            tasks.splice(input, 1);
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

export function addProject(value) {
    Projects.Add(value);
}

build_home();

//remove this when not using temp_data.js
generateTempData();