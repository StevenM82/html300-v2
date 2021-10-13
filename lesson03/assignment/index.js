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
   /*
   Used local JSON for data, not hardcoded
   Use of object/array methods & components appear with correct data 
   */

   /* Create the containers for the page */
   //Grid container for the page
   const gridContainer = document.createElement('div');
   gridContainer.classList.add('grid-main');

   //A container for all of the new cards
    const container = document.querySelector('.template-hook');
    const sectionClass = document.querySelector('section');

    /* Create all of the elements for the user */
    //User image, name and job title
    cards.forEach(function(el){
        let userCard = document.createElement('main');
        let userImage = document.createElement('img');
        let userName = document.createElement('h1');
        let userJob = document.createElement('h2');

        //User background information
        let userInfo = document.createElement('article');
        let userInfoHeading = document.createElement('h3');
        let userInfoText = document.createElement('p');
        let linkedInImg = document.createElement('img');

        console.log(userCard);
        console.log(userInfo);

        /* Assign all of the classes */
        userCard.classList.add('main');
        userImage.classList.add('img');
        //userName.classList.add('h1');
        userJob.classList.add('h2');

        userCard.innerHTML = `
    <img>
    <h1 class="h1">${el.name}</h1>
    <h2>${el.jobTitle}</h2>
    `;

    userInfo.innerHTML = `
    <h3>Company: </h3>
    <p>${el.company}</p>

    <h3>Experience: </h3>
    <p>${el.experience}</p>

    <h3>School: </h3>
    <p>${el.school}</p>

    <h3>Major: </h3>
    <p>${el.major}</p>

    <h3>Email: </h3>
    <p>${el.email}</p>

    <img>
    <p>${el.linkedInUrl}</p>
    `;
    
    container.append(userCard);
    container.append(userInfo);

    userCard.append(userImage);
    userCard.append(userName);
    userCard.append(userJob);

    userInfo.append(userInfoHeading);
    userInfoHeading.append(userInfoText);

    })