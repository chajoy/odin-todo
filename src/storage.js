import { Projects } from "./index";

export const Storage = (() => {
    const TestStorage = () => {
        if (localStorage.getItem(`projects_data`)) {
            return true;
        } else {
            return false;
        }
    }

    const Retrieve = () => {
        const json = localStorage.getItem(`projects_data`);
        const data = JSON.parse(json);
        for (let x = 0; x < data.length; x++) {
            let title = data[x].title;
            Projects.Add(title);
            let task_count = data[x].tasks.length;
            for (let y = 0; y < task_count; y++) {
                let title = data[x].tasks[y].task_title;
                let desc = data[x].tasks[y].desc;
                let dueDate = data[x].tasks[y].dueDate;
                let prio = data[x].tasks[y].prio;
                Projects.GetProjects()[x].AddTask(title, desc, dueDate, prio);
            }
        }
    }

    const Save = () => {
        localStorage.setItem(`projects_data`, JSON.stringify(Projects));
    }

    return {
        Retrieve,
        Save,
        TestStorage,
    }
})();