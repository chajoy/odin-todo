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

    if (!title || !task) {

    } else {
        Projects.Add(title);
        Projects.GetProject(title).AddTask(task.title, task.desc, 'today', 'high');

        build.projects(Projects.GetProjects());
    }

}

build.home();

Projects.Add('project 1');
Projects.GetProject('project 1').AddTask('task 1', 'this is the description for task 1', 'today', 'high');

Projects.Add('project 2');
Projects.GetProject('project 2').AddTask('task 2', 'this is the description for task 2', 'tomorrow', 'medium');

Projects.Add('project 3');
Projects.GetProject('project 3').AddTask('task 3', 'this is the description for task 3', 'next week', 'low');
Projects.GetProject('project 3').AddTask('task 3', 'this is the description for task 3', 'next week', 'low');
Projects.GetProject('project 3').AddTask('task 3', 'this is the description for task 3', 'next week', 'low');

Projects.Add('project 4');
Projects.GetProject('project 4').AddTask('task 4', 'this is the description for task 4', 'today', 'high');

Projects.Add('project 5');
Projects.GetProject('project 5').AddTask('task 5', 'this is the description for task 5', 'next week', 'medium');

Projects.Add('project 6');
Projects.GetProject('project 6').AddTask('task 6', 'this is the description for task 6', 'tomorrow', 'low');
Projects.GetProject('project 6').AddTask('task 6', 'this is the description for task 6', 'tomorrow', 'low');

Projects.Add('project 7');
Projects.GetProject('project 7').AddTask('task 7', 'this is the description for task 7', 'today', 'high');

Projects.Add('project 8');
Projects.GetProject('project 8').AddTask('task 8', 'this is the description for task 8', 'next month', 'medium');
Projects.GetProject('project 8').AddTask('task 8', 'this is the description for task 8', 'next month', 'medium');
Projects.GetProject('project 8').AddTask('task 8', 'this is the description for task 8', 'next month', 'medium');
Projects.GetProject('project 8').AddTask('task 8', 'this is the description for task 8', 'next month', 'medium');

Projects.Add('project 9');
Projects.GetProject('project 9').AddTask('task 9', 'this is the description for task 9', 'tomorrow', 'low');

Projects.Add('project 10');
Projects.GetProject('project 10').AddTask('task 10', 'this is the description for task 10', 'next week', 'high');
