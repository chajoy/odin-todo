import downArrow from "./img/arrow-down-short.svg";

export const createProject = (title = `placeholder`) => {
    if (!document.querySelector(`#projContainer`)) {
        console.error(`Can't Find Project Container`);
    } else {
        const container = document.querySelector(`#projContainer`);

        const project = {
            container: document.createElement(`div`),
            title_container: document.createElement(`div`),
            title: document.createElement(`h2`),
            icon: document.createElement(`img`),
        }

        project.container.classList.add(`project`);
        project.title_container.classList.add(`p_title`);
        project.title.classList.add(`f_orange`);
        project.icon.classList.add(`svg-arrow`);

        project.title.textContent = title;

        project.icon.src = downArrow;

        project.title_container.appendChild(project.title);
        project.title_container.appendChild(project.icon);

        project.container.appendChild(project.title_container);

        container.appendChild(project.container);

        return project.container;
    }
};