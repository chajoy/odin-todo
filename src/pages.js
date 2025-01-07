import plusIcon from "./img/plus-circle-fill.svg";
import dropdownIcon from "./img/arrow-down-short.svg";
import { addProject } from "./index";
import { GetProjects } from "./index";

const container = document.querySelector(`main`);

document.querySelectorAll(`.sidebar div`).forEach((e) => e.addEventListener(`click`, () => {
    switch (e.getAttribute(`id`)) {
        case `btn-home`:
            home();
            break;
        case `btn-projects`:
            projects(GetProjects);
            break;
        default:
            break;
    }
}))

function clearDOM() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

export const home = () => {
    if (!document.querySelector(`main`)) {
        console.error(`Can't Find "main" Container`);
    } else {
        clearDOM();

        let content = document.createElement(`h1`);
        content.textContent = `what's next on your todo. list?`;

        container.appendChild(content);
    }
};

export const projects = () => {
    if (!document.querySelector(`main`)) {
        console.error(`Can't Find "main" Container`);
    } else {
        clearDOM();

        const content = {
            header: {
                container: document.createElement(`div`),
                title: document.createElement(`h1`),
                icon: document.createElement(`img`),
            },
            body: document.createElement(`div`),
        }

        //generate header and append to main container
        content.header.container.classList.add(`page-title`);

        content.header.title.textContent = `projects.`;
        content.header.icon.src = plusIcon;

        content.header.icon.classList.add(`svg-plus`);
        content.header.icon.addEventListener(`click`, () => {
            addProject();
        })

        content.header.container.appendChild(content.header.title);
        content.header.container.appendChild(content.header.icon);

        container.appendChild(content.header.container);

        content.body.classList.add(`page-body`);

        //generate projects list and append to main container
        if (!GetProjects) {
            console.warn(`Projects Array is Null`);
        } else {
            for (let x = 0; x < GetProjects.length; x++) {
                const project = {
                    container: document.createElement(`div`),
                    title: {
                        container: document.createElement(`div`),
                        text: document.createElement(`h2`),
                        dropdownIcon: document.createElement(`img`),
                    },
                }

                project.container.classList.add(`project`);
                project.container.classList.add(`box`);
                project.title.container.classList.add(`project_title`);
                project.title.text.classList.add(`f_orange`);
                project.title.text.textContent = `${GetProjects[x].title} (${GetProjects[x].GetTasks().length})`;

                project.title.text.addEventListener(`click`, (event) => {
                    projectPage(GetProjects[x]);
                })
                project.title.dropdownIcon.src = dropdownIcon;
                project.title.dropdownIcon.classList.add(`svg-arrow`);

                project.title.container.appendChild(project.title.text);
                project.title.container.appendChild(project.title.dropdownIcon);


                project.container.appendChild(project.title.container);

                for (let y = 0; y < GetProjects[x].GetTasks().length; y++) {
                    let taskList = GetProjects[x].GetTasks();
                    project.task = {
                        container: document.createElement(`div`),
                        checkbox: document.createElement(`input`),
                        description: {
                            container: document.createElement(`div`),
                            title: document.createElement(`h3`),
                            text: document.createElement(`p`),
                        }
                    }

                    project.task.container.classList.add(`project_task`);
                    project.task.container.style.display = `none`;
                    project.task.checkbox.setAttribute(`type`, `checkbox`);
                    project.task.description.title.textContent = taskList[y].title;
                    project.task.description.text.textContent = taskList[y].desc;

                    project.task.description.container.appendChild(project.task.description.title);
                    project.task.description.container.appendChild(project.task.description.text);

                    project.task.container.appendChild(project.task.checkbox);
                    project.task.container.appendChild(project.task.description.container);
                    project.container.appendChild(project.task.container);

                    content.body.appendChild(project.container);
                }

                project.title.dropdownIcon.addEventListener(`click`, (event) => {
                    event.stopPropagation();
                    project.container.classList.toggle(`active`);
                    project.container.querySelectorAll(`.project_task`).forEach((e) => {
                        if (project.container.classList.contains(`active`)) {
                            e.style.display = `flex`;
                        } else {
                            e.style.display = `none`;
                        }
                    })
                })

                project.container.addEventListener(`click`, () => {
                    projectPage(GetProjects[x]);
                })

                content.body.appendChild(project.container);
            }

            container.appendChild(content.body);
        }
    }
};

const projectPage = (project) => {
    clearDOM();

    let content = {
        title: document.createElement(`h1`),
        body: document.createElement(`div`),
    }

    content.title = document.createElement(`h1`);
    content.title.textContent = project.title;
    content.title.classList.add(`page-title`);

    for (let x = 0; x < project.GetTasks().length; x++) {
        let task = {
            container: document.createElement(`div`),
            title: document.createElement(`h2`),
            desc: document.createElement(`p`),
        }

        task.title.textContent = project.GetTasks()[x].title;
        task.desc.textContent = project.GetTasks()[x].desc;

        task.container.appendChild(task.title);
        task.container.appendChild(task.desc);
        task.container.classList.add(`box`);

        content.body.appendChild(task.container);
    }

    container.appendChild(content.title);
    container.appendChild(content.body);
}
