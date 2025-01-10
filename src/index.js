import "./styles.css";
import { home as build_home, projects as build_projects } from "./pages";
//remove this when not using temp_data.js
import { generateTempData } from "./temp_data";
import { getDate } from "./utils";

document.getElementById(`btn_darkMode`).addEventListener(`click`, (e) => {
    document.body.classList.toggle(`dark`);
    if (document.body.classList.contains(`dark`)) {
        e.target.textContent = `light mode.`;
    } else {
        e.target.textContent = `dark mode.`;
    }
});

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
        let index = projects.findIndex((e) => e.title.toLowerCase() === project.toLowerCase());
        if (index >= 0) {
            projects.splice(index, 1);
        } else {
            console.error(`Project ${project} doesn't exist`);
        }
    }
    const RecentTasks = () => {
        let recentTasks = [];
        projects.forEach((project) => {
            project.GetTasks().forEach((task) => {
                if (recentTasks.length < 3) {
                    recentTasks.push(task);
                } else {
                    let lastTask = recentTasks[0];
                    if (lastTask.getDateCreated().getTime() < task.getDateCreated().getTime()) {
                        recentTasks.push(task);
                        recentTasks.sort((a, b) => a.getDateCreated().getTime() - b.getDateCreated().getTime());
                        recentTasks.shift();
                    }
                }
            })
        })
        return recentTasks;
    }

    return {
        GetProject,
        GetProjects,
        Add,
        Remove,
        RecentTasks,
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
    const dateCreated = getDate().datewTime;

    const getDateCreated = () => dateCreated;

    return {
        title,
        desc,
        dueDate,
        prio,
        getDateCreated,
    }
}

//remove this when not using temp_data.js
generateTempData();

build_home();

