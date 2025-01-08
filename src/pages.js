import plusIcon from "./img/plus-circle-fill.svg";
import dropdownIcon from "./img/arrow-down-short.svg";
import deleteIcon from "./img/trash-fill.svg";
import editIcon from "./img/pencil-fill.svg";
import { Projects } from "./index";

const container = document.querySelector(`main`);

export const modal = (() => {
    const container = document.getElementById(`modal-container`);
    const content = document.getElementById(`modal-content`);
    const input = document.querySelector(`#modal-container input`);
    const submit = document.getElementById(`btn-submit`);
    const back = document.getElementById(`btn-back`);
    const form = document.querySelector(`#modal-container form`);

    const form_proj = (type, project) => {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        const form = {
            container: document.createElement(`form`),
            input: document.createElement(`input`),
            btn_back: document.createElement(`button`),
            btn_submit: document.createElement(`button`),
        }

        form.container.classList.add(`proj`);

        form.input.setAttribute(`input`, `text`);
        form.input.setAttribute(`placeholder`, `project title`);
        form.input.required = true;
        if (type === `edit`) {
            form.input.value = project.title;
        }

        form.btn_back.classList.add(`button`);
        form.btn_back.setAttribute(`id`, `btn-back`);
        form.btn_back.setAttribute(`type`, `button`);
        form.btn_back.textContent = `back`;

        form.btn_submit.classList.add(`button`);
        form.btn_submit.setAttribute(`type`, `submit`);
        form.btn_submit.textContent = type;

        form.container.append(
            form.input,
            form.btn_back,
            form.btn_submit,
        );

        form.btn_back.addEventListener(`click`, () => {
            Close();
        })

        form.container.addEventListener(`input`, () => {
            form.input.setCustomValidity(``);
            if (Projects.GetProjects().find((e) => e.title.toLowerCase() === form.input.value.toLowerCase()) && project.title.toLowerCase() != form.input.value.toLowerCase()) {
                form.input.setCustomValidity(` `);
                return;
            }
            form.input.reportValidity();
        })

        form.container.addEventListener(`submit`, (e) => {
            e.preventDefault();
            if (type === `edit`) {
                project.title = form.input.value;
                Close();
                projectPage(project);
            } else {
                Projects.Add(form.input.value);
                Close();
                projects();
            }
        })

        content.appendChild(form.container);

        return form.input;
    }

    const form_task = (type, project, task) => {
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        const form = {
            container: document.createElement(`form`),
            input: {
                title: document.createElement(`input`),
                desc: document.createElement(`textarea`),
            },
            btn_back: document.createElement(`button`),
            btn_submit: document.createElement(`button`),
        }

        form.container.classList.add(`task`);

        form.input.title.setAttribute(`input`, `text`);
        form.input.title.setAttribute(`placeholder`, `task title`);
        form.input.title.required = true;

        if (type === `edit`) {
            form.input.title.value = task.title;
            form.input.desc.value = task.desc;
        }

        form.input.desc.setAttribute(`input`, `textarea`);
        form.input.desc.setAttribute(`placeholder`, `task description`);
        form.input.desc.required = true;

        // if (type === `edit`) {
        //     form.input.value = project.title;
        // }

        form.btn_back.classList.add(`button`);
        form.btn_back.setAttribute(`id`, `btn-back`);
        form.btn_back.setAttribute(`type`, `button`);
        form.btn_back.textContent = `back`;

        form.btn_submit.classList.add(`button`);
        form.btn_submit.setAttribute(`type`, `submit`);
        form.btn_submit.textContent = type;

        form.container.append(
            form.input.title,
            form.input.desc,
            form.btn_back,
            form.btn_submit,
        );

        form.btn_back.addEventListener(`click`, () => {
            Close();
        })

        // form.container.addEventListener(`input`, () => {
        //     form.input.setCustomValidity(``);
        //     if (Projects.GetProjects().find((e) => e.title.toLowerCase() === form.input.value.toLowerCase()) && project.title.toLowerCase() != form.input.value.toLowerCase()) {
        //         form.input.setCustomValidity(` `);
        //         return;
        //     }
        //     form.input.reportValidity();
        // })

        form.container.addEventListener(`submit`, (e) => {
            e.preventDefault();
            if (type === `edit`) {
                task.title = form.input.title.value;
                task.desc = form.input.desc.value;
                Close();
                projectPage(project);
            } else {
                project.AddTask(form.input.title.value, form.input.desc.value, `test`, `test`);
            }
            Close();
            projectPage(project);
        })

        content.appendChild(form.container);

        return form.input.title;
    }

    const Open = (type, project, task) => {
        let form;
        switch (type) {
            case `create-proj`:
                form = form_proj(`create`);
                break;
            case `edit-proj`:
                form = form_proj(`edit`, project);
                break;
            case `create-task`:
                form = form_task(`create`, project);
                break;
            case `edit-task`:
                form = form_task(`edit`, project, task);
                break;
        }
        container.style.display = `flex`;
        form.focus();
    }

    const Close = () => {
        container.style.display = `none`;
    }

    return {
        Open,
        Close,
    }
})();

document.querySelectorAll(`.sidebar button`).forEach((e) => e.addEventListener(`click`, () => {
    switch (e.getAttribute(`id`)) {
        case `btn-home`:
            home();
            break;
        case `btn-projects`:
            projects(Projects.GetProjects());
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
                dropdownIcon: document.createElement(`img`),
                addIcon: document.createElement(`img`),
            },
            body: document.createElement(`div`),
        }

        //generate header and append to main container
        content.header.container.classList.add(`page-header`);

        content.header.dropdownIcon.src = dropdownIcon;
        content.header.dropdownIcon.classList.add(`svg-large`);
        content.header.dropdownIcon.addEventListener(`click`, () => {
            let projects = document.querySelectorAll(`.project`);
            let active_projects = document.querySelectorAll(`.project.active`);
            if (projects.length === active_projects.length) {
                projects.forEach((e) => {
                    let tasksContainer = e.querySelector(`.tasksContainer`);
                    e.classList.remove(`active`);
                    tasksContainer.style.display = `none`;
                });
            } else {
                projects.forEach((e) => {
                    let tasksContainer = e.querySelector(`.tasksContainer`);
                    e.classList.add(`active`);
                    tasksContainer.style.display = `flex`;
                })
            }
        })

        content.header.title.textContent = `projects.`;
        content.header.addIcon.src = plusIcon;

        content.header.addIcon.classList.add(`svg-mid`);
        content.header.addIcon.addEventListener(`click`, () => {
            modal.Open(`create-proj`);
        })

        content.header.container.append(
            content.header.title,
            content.header.dropdownIcon,
            content.header.addIcon,
        );

        container.appendChild(content.header.container);

        content.body.classList.add(`page-body`);

        //generate projects list and append to main container
        if (!Projects.GetProjects()) {
            console.warn(`Projects Array is Null`);
        } else {
            for (let x = 0; x < Projects.GetProjects().length; x++) {
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
                project.title.text.textContent = `${Projects.GetProjects()[x].title} (${Projects.GetProjects()[x].GetTasks().length})`;

                project.title.dropdownIcon.src = dropdownIcon;
                project.title.dropdownIcon.classList.add(`svg-large`);

                project.title.container.append(
                    project.title.text,
                    project.title.dropdownIcon,
                );

                project.container.appendChild(project.title.container);

                project.tasks = document.createElement(`div`);
                project.tasks.classList.add(`tasksContainer`);
                project.tasks.style.display = `none`;

                for (let y = 0; y < Projects.GetProjects()[x].GetTasks().length; y++) {
                    let task = Projects.GetProjects()[x].GetTasks()[y];
                    project.task = {
                        container: document.createElement(`div`),
                        description: {
                            container: document.createElement(`div`),
                            title: document.createElement(`h3`),
                            text: document.createElement(`p`),
                        }
                    }

                    project.task.container.classList.add(`project_task`);
                    project.task.description.title.textContent = task.title;
                    project.task.description.text.textContent = task.desc;

                    project.task.description.container.append(
                        project.task.description.title,
                        project.task.description.text,
                    );

                    project.task.container.append(
                        project.task.description.container,
                    );

                    project.tasks.appendChild(project.task.container);
                }

                project.container.appendChild(project.tasks);

                project.title.dropdownIcon.addEventListener(`click`, (event) => {
                    event.stopPropagation();
                    project.container.classList.toggle(`active`);
                    if (project.container.classList.contains(`active`)) {
                        project.tasks.style.display = `flex`;
                    } else {
                        project.tasks.style.display = `none`;
                    }
                })

                project.container.addEventListener(`click`, () => {
                    projectPage(Projects.GetProjects()[x]);
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
        header: {
            container: document.createElement(`div`),
            title: document.createElement(`h1`),
            editIcon: document.createElement(`img`),
            deleteIcon: document.createElement(`img`),
            addIcon: document.createElement(`img`),
        },
        body: document.createElement(`div`),
    }

    content.header.title.textContent = project.title;
    content.header.title.classList.add(`f_orange`);

    content.header.editIcon.src = editIcon;
    content.header.editIcon.classList.add(`svg-mid`);
    content.header.editIcon.addEventListener(`click`, () => {
        modal.Open(`edit-proj`, project);
    })

    content.header.deleteIcon.src = deleteIcon;
    content.header.deleteIcon.classList.add(`svg-mid`);
    content.header.deleteIcon.addEventListener(`click`, () => {
        Projects.Remove(project.title);
        projects();
    })

    content.header.addIcon.src = plusIcon;
    content.header.addIcon.classList.add(`svg-mid`);
    content.header.addIcon.addEventListener(`click`, () => {
        modal.Open(`create-task`, project);
    })

    content.header.container.append(
        content.header.title,
        content.header.addIcon,
        content.header.editIcon,
        content.header.deleteIcon,
    )

    content.header.container.classList.add(`page-header`);
    content.body.classList.add(`page-body`);

    if (project.GetTasks().length === 0) {
        let text = document.createElement(`p`);
        text.textContent = `Can't see any todos, Create some tasks to get started`;
        content.body.appendChild(text);
    } else {
        for (let x = 0; x < project.GetTasks().length; x++) {
            let task = {
                container: document.createElement(`div`),
                text: {
                    container: document.createElement(`div`),
                    title: document.createElement(`h2`),
                    desc: document.createElement(`p`),
                },
                btn_delete: document.createElement(`img`),
                btn_edit: document.createElement(`img`),
            }

            task.text.title.textContent = project.GetTasks()[x].title;
            task.text.desc.textContent = project.GetTasks()[x].desc;

            task.btn_delete.src = deleteIcon;
            task.btn_delete.classList.add(`svg-mid`);

            task.btn_edit.src = editIcon;
            task.btn_edit.classList.add(`svg-mid`);

            task.btn_delete.addEventListener(`click`, (event) => {
                event.stopPropagation();
                project.RemoveTask(x);
                projectPage(project);
            })

            task.btn_edit.addEventListener(`click`, (e) => {
                e.stopPropagation();
                modal.Open(`edit-task`, project, project.GetTasks()[x]);
            })

            task.text.container.append(
                task.text.title,
                task.text.desc,
            );

            task.container.append(
                task.text.container,
                task.btn_edit,
                task.btn_delete,
            );

            task.container.classList.add(`box`);
            task.container.classList.add(`task`);

            content.body.appendChild(task.container);
        }
    }

    container.append(
        content.header.container,
        content.body,
    )
}

