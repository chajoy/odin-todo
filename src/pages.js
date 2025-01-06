const container = document.querySelector(`main`);

function clearDOM() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

export function projects(title = `placeholder`) {
    if (!document.querySelector(`main`)) {
        console.error(`Can't Find "main" Container`);
    } else {
        clearDOM();

        let text = document.createElement(`h1`);
        text.textContent = `placeholder`;
        container.appendChild(text);
    }
}