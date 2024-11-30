// get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values 
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var Skills = document.getElementById('Skills').value;
    // generate the resume content dynamically
    var resumehtml = "\n\n<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:<b/><span contenteditable=\"true\">".concat("name", "</span></p>\n<p><b>Email:<b/><span  contenteditable=\"true\">").concat("email", " </span></p>\n\n<p><b><span  contenteditable=\"true\">contact:<b/>").concat("contact", "</span></p>\n\n<h3>Education</h3>\n<p  contenteditable=\"true\"><b>").concat("education", "</p>\n\n<h3>Skills</h3>\n<p  contenteditable=\"true\"><b>").concat("skills", "</p>\n\n\n");
    // resumeDisplayElement
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error("The resume display element is missing");
    }
});
