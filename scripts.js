document.addEventListener('DOMContentLoaded', () => {
    fetch('/projects')
        .then(response => response.json())
        .then(projects