let educationCounter = 1;  
let projectCounter = 1;   

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
    `;
    document.getElementById('dynamicProjectFields').appendChild(container);
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
    // This function can be used to apply different templates. Placeholder for now.
    const template = document.getElementById("templateSelection").value;
    if(template === "template1") {
        // apply first template styles
    } else if(template === "template2") {
        // apply second template styles
    } else if(template === "template3") {
        // apply third template styles
    }
}
// ... Existing script content ...

function deleteEducationField() {
    if (educationCounter > 1) { // Ensure at least one field remains
        const educationField = document.getElementById(`education${educationCounter}`);
        educationField.remove();
        educationCounter--;
    }
}

function deleteProjectField() {
    if (projectCounter > 1) { // Ensure at least one field remains
        const projectField = document.getElementById(`project${projectCounter}`);
        projectField.remove();
        projectCounter--;
    }
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const content = document.getElementById("resumePreview").innerText;
    
    // This is a basic way to set text to bold and increase size
    doc.setFontSize(20); 
    doc.setFont("times", "bold");
    
    doc.text(content, 10, 10);
    doc.save("resume.pdf");
}

function generateWord() {
    // You'd use the `docx` library here. It's a bit extensive 
    // to show a full example within this format. But it involves 
    // creating a document, adding paragraphs with content, 
    // and then saving that as a .docx file.
}

// ... Rest of the script content ...
             

function generatePDF() {
    const { jsPDF }
    
