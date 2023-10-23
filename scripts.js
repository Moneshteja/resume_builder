let educationCounter = 0;
let projectCounter = 0;

function addEducationField() {
    educationCounter++;
    const container = document.getElementById("dynamicEducationFields");
    container.innerHTML += `
        <div id="education${educationCounter}">
            <label>Degree/School:</label>
            <input type="text" id="degree${educationCounter}">
            <label>Institution/College Name:</label>
            <input type="text" id="institution${educationCounter}">
            <label>Pass Percentage:</label>
            <input type="text" id="percentage${educationCounter}">
        </div>
    `;
}

function addProjectField() {
    projectCounter++;
    const container = document.getElementById("dynamicProjectFields");
    container.innerHTML += `
        <div id="project${projectCounter}">
            <label>Project Name:</label>
            <input type="text" id="projectName${projectCounter}">
            <label>Description:</label>
            <textarea id="projectDesc${projectCounter}"></textarea>
        </div>
    `;
}

function generateResume() {
    // ... The code to gather all the form data, format it and display it in the preview ...
}

function updateTemplate() {
    // ... The code to change the resume's template style ...
}

function generatePDF() {
    // ... The code to initiate PDF creation ...
}

// Initialize with one field each
addEducationField();
addProjectField();
