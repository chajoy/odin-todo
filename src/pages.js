import plusIcon from "./img/plus-circle-fill.svg";
import dropdownIcon from "./img/arrow-down-short.svg";
import { addProject } from "./index";
const container = document.querySelector(`main`);

function clearDOM() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

export const projects = (projects_array) => {
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
            list: {
                container: document.createElement(`div`),
            }
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

        //generate projects list and append to main container
        for (let x = 0; x < projects_array.length; x++) {
            const project = {
                container: document.createElement(`div`),
                title: {
                    container: document.createElement(`div`),
                    text: document.createElement(`h2`),
                    dropdownIcon: document.createElement(`img`),
                },
            }

            project.container.classList.add(`project`);
            project.title.container.classList.add(`p_title`);
            project.title.text.classList.add(`f_orange`);
            project.title.text.textContent = projects_array[x].title;
            project.title.dropdownIcon.src = dropdownIcon;
            project.title.dropdownIcon.classList.add(`svg-arrow`);

            project.title.container.appendChild(project.title.text);
            project.title.container.appendChild(project.title.dropdownIcon);
            project.container.appendChild(project.title.container);

            for (let y = 0; y < projects_array[x].GetTasks().length; y++) {
                let taskList = projects_array[x].GetTasks();
                project.task = {
                    container: document.createElement(`div`),
                    checkbox: document.createElement(`input`),
                    description: {
                        container: document.createElement(`div`),
                        title: document.createElement(`h3`),
                        text: document.createElement(`p`),
                    }
                }

                project.task.container.classList.add(`p_task`);
                project.task.checkbox.setAttribute(`type`, `checkbox`);
                project.task.description.title.textContent = taskList[y].title;
                project.task.description.text.textContent = taskList[y].desc;

                project.task.description.container.appendChild(project.task.description.title);
                project.task.description.container.appendChild(project.task.description.text);

                project.task.container.appendChild(project.task.checkbox);
                project.task.container.appendChild(project.task.description.container);
                project.container.appendChild(project.task.container);
            }

            container.appendChild(project.container);

        }
    }
};