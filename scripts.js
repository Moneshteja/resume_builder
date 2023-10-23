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
    let resumeOutput = "";

    // Gather form data
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const languages = document.getElementById("languages").value;
    const skills = document.getElementById("skills").value;
    const achievements = document.getElementById("achievements").value.split('\n');

    resumeOutput += `<h1>${fullName}</h1>`;
    resumeOutput += `<p>Email: ${email}</p>`;
    resumeOutput += `<p>Languages: ${languages}</p>`;
    resumeOutput += `<p>Skills: ${skills}</p>`;

    const image = document.getElementById("image");
    if (image.files && image.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            resumeOutput += `<img src="${e.target.result}" width="100" alt="Uploaded Image">`;
            document.getElementById("resumePreview").innerHTML = resumeOutput;
        }
        reader.readAsDataURL(image.files[0]);
    } else {
        document.getElementById("resumePreview").innerHTML = resumeOutput;
    }

    resumeOutput += `<h3>Achievements</h3><ul>`;
    achievements.forEach(achievement => {
        resumeOutput += `<li>${achievement}</li>`;
    });
    resumeOutput += `</ul>`;

    for (let i = 1; i <= educationCounter; i++) {
        const degree = document.getElementById(`degree${i}`).value;
        const institution = document.getElementById(`institution${i}`).value;
        const percentage = document.getElementById(`percentage${i}`).value;

        resumeOutput += `<p>${degree} from ${institution}, ${percentage}%</p>`;
    }

    for (let i = 1; i <= projectCounter; i++) {
        const projectName = document.getElementById(`projectName${i}`).value;
        const projectDesc = document.getElementById(`projectDesc${i}`).value;

        resumeOutput += `<h3>${projectName}</h3><p>${projectDesc}</p>`;
    }

    document.getElementById("resumePreview").innerHTML = resumeOutput;
}

function updateTemplate() {
    // Code to change the appearance of the preview based on the selected
                                                                             
