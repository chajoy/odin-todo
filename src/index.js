import "./styles.css";
import { page_home } from "./pages";
import { GetDate } from "./utils";
import { isAfter } from "date-fns";
import { Storage } from "./storage";

window.addEventListener(`beforeunload`, () => {
    if (Projects.GetProjects().length > 0) {
        Storage.Save();
    } else {
        Storage.Clear();
    }
})

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
    const GetProject = (project_id) => projects.find(e => e.GetProjectID() === Number(project_id));
    const Add = (project) => {
        if (projects.findIndex(e => e.title === project) >= 0) {
            console.error(`Project ${project} already exists`);
        } else {
            projects.push(Project(project));
        }

    }
    const Remove = (project_id) => {
        let index = projects.findIndex((e) => e.GetProjectID() === Number(project_id));
        if (index >= 0) {
            projects.splice(index, 1);
        } else {
            console.error(`Project ID ${project_id} doesn't exist`);
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
                    if (task.complete) {
                    } else if (isAfter(task.GetDateCreated(), lastTask.GetDateCreated())) {
                        recentTasks.push(task);
                        recentTasks.sort((a, b) => a.GetDateCreated().getTime() - b.GetDateCreated().getTime());
                        recentTasks.shift();
                    }
                }
            })
        })
        return recentTasks;
    }

    const GetUrgentTasks = () => {
        let urgentTasks = [];
        projects.forEach((project) => {
            project.GetTasks().forEach((task) => {
                if (urgentTasks.length < 3) {
                    urgentTasks.push(task);
                } else {
                    let lastTask = urgentTasks[0];
                    if (task.complete) {
                    } else if (isAfter(lastTask.dueDate, task.dueDate)) {
                        urgentTasks.push(task);
                        urgentTasks.sort((a, b) => a.dueDate - b.dueDate);
                        urgentTasks.shift();
                    }
                }
            })
        })
        return urgentTasks;
    }

    const CreateTaskID = () => {
        t_id++;
        return t_id;
    }

    const CreateProjectID = () => {
        p_id++;
        return p_id;
    }

    const toJSON = () => {
        return projects.map(project => ({
            id: project.GetProjectID(),
            title: project.title,
            tasks: project.GetTasks().map(task => ({
                id: task.GetTaskID(),
                task_title: task.title,
                desc: task.desc,
                dueDate: task.dueDate,
                prio: task.prio,
            }))
        }))
    }

    return {
        GetProject,
        GetProjects,
        Add,
        Remove,
        RecentTasks,
        CreateProjectID,
        CreateTaskID,
        GetUrgentTasks,
        toJSON,
    }
})();

export const GetProjects = Projects.GetProjects();

function Project(title) {

    const project_id = Projects.CreateProjectID();

    const tasks = [];

    const GetTasks = () => tasks;
    const GetTask = (task_id) => tasks.find(e => e.GetTaskID() === Number(task_id));
    const AddTask = (title, desc, dueDate, prio) => tasks.push(Task(title, desc, dueDate, prio));
    const RemoveTask = (task_id) => {
        let index = tasks.findIndex((e) => e.GetTaskID() === Number(task_id));
        if (index >= 0) {
            tasks.splice(index, 1);
        } else {
            console.error(`Task ID ${task_id} doesn't exist`);
        }
    }

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

    let completed = false;

    return {
        title,
        desc,
        dueDate,
        prio,
        GetDateCreated,
        GetTaskID,
    }
}

if (Storage.TestStorage()) {
    Storage.Retrieve();
}

page_home();
