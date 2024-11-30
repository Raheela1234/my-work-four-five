// get refrences to the form and display area
const form = document.getElementById('resume-form')as HTMLFormElement;
const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement;

// handle form submission
form.addEventListener('submit', (event: Event)=> {

event.preventDefault();
    
    


// collect input values 
const name=(document.getElementById('name') as HTMLTextAreaElement).value
const email=(document.getElementById('email') as HTMLTextAreaElement).value
const contact=(document.getElementById('contact') as HTMLTextAreaElement).value
const education=(document.getElementById('education') as HTMLTextAreaElement).value
const experience=(document.getElementById('experience') as HTMLTextAreaElement).value
const Skills=(document.getElementById('Skills') as HTMLTextAreaElement).value

// generate the resume content dynamically
const resumehtml = `

<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:<b/><span contenteditable="true">${`name`}</span></p>
<p><b>Email:<b/><span  contenteditable="true">${`email`} </span></p>

<p><b><span  contenteditable="true">contact:<b/>${`contact`}</span></p>

<h3>Education</h3>
<p  contenteditable="true"><b>${`education`}</p>

<h3>Skills</h3>
<p  contenteditable="true"><b>${`skills`}</p>


`;

// resumeDisplayElement

if (resumeDisplayElement) {

resumeDisplayElement.innerHTML = resumehtml;



}else{

    console.error(`The resume display element is missing`);
}
})    







