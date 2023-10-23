let educationCounter = 0;
let projectCounter = 0;

function addEducationField() {
    educationCounter++;
    const container = document.createElement('div');
    container.id = `education${educationCounter}`;
    container.innerHTML = `
        <label>Degree/School:</label>
        <input type="text" id="degree${educationCounter}">
        <label>Institution/College Name:</label>
        <input type="text" id="institution${educationCounter}">
        <label>Pass Percentage:</label>
        <input type="text" id="percentage${educationCounter}">
        <button type="button" onclick="removeField('education', ${educationCounter})">Delete</button>
    `;
    document.getElementById('dynamicEducationFields').appendChild(container);
}

function addProjectField() {
    projectCounter++;
    const container = document.createElement('div');
    container.id = `project${projectCounter}`;
    container.innerHTML = `
        <label>Project Name:</label>
        <input type="text" id="projectName${projectCounter}">
        <label>Description:</label>
        <textarea id="projectDesc${projectCounter}"></textarea>
        <button type="button" onclick="removeField('project', ${projectCounter})">Delete</button>
    `;
    document.getElementById('dynamicProjectFields').appendChild(container);
}

function removeField(type, count) {
    const parent = document.getElementById(type + "Section");
    const child = document.getElementById(type + count);
    parent.removeChild(child);
}

function generateResume(event) {
    // Collect all form data, format it, and display it in the "resumePreview" div.
    // For simplicity, we'll just use a basic string formatting here.
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const languageSkills = document.getElementById("languageSkills").value;
    const achievements = document.getElementById("achievements").value;

    // ... Fetch other fields like education and projects ...

    const resumeOutput = `
        <h1>${fullName}</h1>
        <p>Email: ${email}</p>
        <p>Language Skills: ${languageSkills}</p>
        <p>Achievements: ${achievements}</p>
        <!-- ... Display other fields like education and projects ... -->
    `;

    document.getElementById("resumePreview").innerHTML = resumeOutput;
}

function updateTemplate() {
    // Code to change the appearance of the preview based on the selected template.
}

function generatePDF() {
    // Code to generate a downloadable PDF.
    // This will require additional libraries or backend functionality to properly implement.
}

// Initial calls to create the first set of dynamic fields.
addEducationField();
addProjectField();
