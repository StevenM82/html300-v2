const cardsJSON = `[
    {
    "name": "Paolo Maldini",
    "jobTitle": "Front End Developer",
    "company": "Web Weavers",
    "experience": "3 years",
    "school": "University of Washington",
    "major": "Marketing",
    "email": "paolo@example.com",
    "linkedInUrl": "paolo.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "Node", "Express"
    ]
    },
    {
    "name": "Barbara Bonansea",
    "jobTitle": "Software Engineer",
    "company": "Excellence in the Cloud",
    "experience": "12 years",
    "school": "University of Southern California",
    "major": "Computer Science",
    "email": "barbara@example.com",
    "linkedInUrl": "barbara.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "JavaScript", "C", "Go"
    ]
    },
    {
    "name": "Javier Hernandez",
    "jobTitle": "User Experience Engineer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "Seattle University",
    "major": "Performing Arts",
    "email": "javier@example.com",
    "linkedInUrl": "javier.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS"
    ]
    },
    {
    "name": "Maribel Dominguez",
    "jobTitle": "Front End Engineer",
    "company": "Bits and Bytes",
    "experience": "6 years",
    "school": "University of Washington",
    "major": "Mechanical Engineering",
    "email": "maribel@example.com",
    "linkedInUrl": "maribel.linkedinprofile.com",
    "codeLanguages": [
        "HTML", "CSS", "JavaScript", "React", "Vue", "Redux"
    ]
    }
]`

//parse all of the JSON information into JS
const cards = JSON.parse(cardsJSON);
console.log(cards);

class Carded{
    constructor(name, jobTitle, company, experience, school, major, email, linkedInUrl){
        this.name = name;
        this.jobTitle = jobTitle;
        this.company = company;
        this.experience = experience;
        this.school = school;
        this.major = major;
        this.email = email;
        this.linkedInUrl = linkedInUrl;
    }
}

//A container for all of the user cards
const container = document.querySelector('.template-hook');

/* Create all of the elements for the user */
cards.forEach(function(el){
    //Creates a grid for each user card that is created
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-main');

    //User main element to place before the section element
    let userMain = document.createElement('main');

    //User background information
    let userSection = document.createElement('section');
    let userArticle0 = document.createElement('article');
    let userArticle1 = document.createElement('article');
    let userArticle2 = document.createElement('article');
    let userArticle3 = document.createElement('article');
    let userArticle4 = document.createElement('article');
    let userArticle5 = document.createElement('article');

    //Add the classes for the 'main' and 'section' elements
    userMain.classList.add('main');
    userSection.classList.add('section');

    //Add the HTML to fill in the user main and user articles
    userMain.innerHTML = `
    <img class="img" src="img/headshot.jpg">
    <h1 class="h1">${el.name}</h1>
    <h2 class="h2"><i>${el.jobTitle}</i></h2>
    `;

    userArticle0.innerHTML = `
    <h3>Company:</h3>
    <p>${el.company}</p>
    `
    userArticle1.innerHTML = `
    <h3>Experience:</h3>
    <p>${el.experience}</p>
    `
    userArticle2.innerHTML = `
    <h3>School:</h3>
    <p>${el.school}</p>
    `
    userArticle3.innerHTML = `
    <h3>Major:</h3>
    <p>${el.major}</p>
    `
    userArticle4.innerHTML = `
    <h3>Email:</h3>
    <p>${el.email}</p>
    `
    userArticle5.innerHTML = `
    <img class="img-article" src="img/linkedin.svg">
    <p class="linkedInText">${el.linkedInUrl}</p>
    `;

    container.append(gridContainer);
    gridContainer.append(userMain);
    gridContainer.append(userSection);
    userSection.append(userArticle0);
    userSection.append(userArticle1);
    userSection.append(userArticle2);
    userSection.append(userArticle3);
    userSection.append(userArticle4);
    userSection.append(userArticle5);
})
