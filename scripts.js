let educationCounter = 1;  // Start from 1 due to the initial field
let projectCounter = 1;    // Same here

function addEducationField() {
    educationCounter++;
    const container = document.createElement('div');
    container.innerHTML = `
        <label>Degree/School:</label>
        <input type="text" id="degree${educationCounter}">
        <label>Institution/College Name:</label>
        <input type="text" id="institution${educationCounter}">
        <label>Pass Percentage:</label>
        <input type="text" id="percentage${educationCounter}">
    `;
    document.getElementById('dynamicEducationFields').appendChild(container);
}

function deleteEducationField() {
    if (educationCounter > 1) {
        const lastField = document.getElementById(`education${educationCounter}`);
        lastField.remove();
        educationCounter--;
    }
}

function addProjectField() {
    projectCounter++;
    const container = document.createElement('div');
    container.innerHTML = `
        <label>Project Name:</label>
        <input type="text" id="projectName${projectCounter}">
        <label>Description:</label>
        <textarea id="projectDesc${projectCounter}"></textarea>
    `;
    document.getElementById('dynamicProjectFields').appendChild(container);
}

function deleteProjectField() {
    if (projectCounter > 1) {
        const lastField = document.getElementById(`project${projectCounter}`);
        lastField.remove();
        projectCounter--;
    }
}

function generateResume() {
    let resumeOutput = "";

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const languages = document.getElementById("languages").value;
    const skills = document.getElementById("skills").value;
    const achievements = document.getElementById("achievements").value.split('\n');

    resumeOutput += `<h1>${fullName}</h1>`;
    resumeOutput += `<p>Email: ${email}</p>`;
    resumeOutput += `<p>Languages: ${languages}</p>`;
    resumeOutput += `<p>Skills: ${skills}</p>`;

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

    achievements.forEach(achievement => {
        resumeOutput += `<li>${achievement}</li>`;
    });

    document.getElementById("resumePreview").innerHTML = resumeOutput;
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const content = document.getElementById("resumePreview").innerText;

    doc.setFontSize(20); 
    doc.setFont("times", "bold");
    doc.text(content, 10, 10);
    doc.save("resume.pdf");
}

function generateWord() {
    // Placeholder: For a full-fledged Word generation solution, you'd integrate with the 'docx' library.
    alert('Generating Word document is a more advanced feature and requires integration with the docx library.');
}

// Initialize by adding the initial fields.
addEducationField();
addProjectField();
