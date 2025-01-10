import "./styles.css";
import { page_home } from "./pages";
//remove this when not using temp_data.js
import { generateTempData } from "./temp_data";
import { GetDate } from "./utils";

document.getElementById(`btn_darkMode`).addEventListener(`click`, (e) => {
    document.body.classList.toggle(`dark`);
    if (document.body.classList.contains(`dark`)) {
        e.target.textContent = `light mode.`;
    } else {
        e.target.textContent = `dark mode.`;
    }
});

export const Projects = (() => {

    let p_id = 0, t_id = 0;

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
                    if (lastTask.GetDateCreated().getTime() < task.GetDateCreated().getTime()) {
                        recentTasks.push(task);
                        recentTasks.sort((a, b) => a.GetDateCreated().getTime() - b.GetDateCreated().getTime());
                        recentTasks.shift();
                    }
                }
            })
        })
        return recentTasks;
    }

    const CreateTaskID = () => {
        t_id++;
        return t_id;
    }

    const CreateProjectID = () => {
        p_id++;
        return p_id;
    }

    return {
        GetProject,
        GetProjects,
        Add,
        Remove,
        RecentTasks,
        CreateProjectID,
        CreateTaskID,
    }
})();

export const GetProjects = Projects.GetProjects();

function Project(title) {

    const project_id = Projects.CreateProjectID();

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

    const GetProjectID = () => project_id;

    return {
        title,
        AddTask,
        GetTasks,
        RemoveTask,
        GetTask,
        GetProjectID,
    }
};

function Task(title, desc, dueDate, prio) {

    const task_id = Projects.CreateTaskID();

    const dateCreated = GetDate().datewTime;

    const GetDateCreated = () => dateCreated;

    const GetTaskID = () => task_id;

    return {
        title,
        desc,
        dueDate,
        prio,
        GetDateCreated,
        GetTaskID,
    }
}

//remove this when not using temp_data.js
generateTempData();

page_home();

