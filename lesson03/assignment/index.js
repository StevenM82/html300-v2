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

     let userCard = document.createElement('main');
     let userSection = document.createElement('section');
     let userInfo = document.createElement('article');

     //Add the classes for the 'main' and 'section' elements
      userCard.classList.add('main');
      userSection.classList.add('section');

      //Add the HTML to fill in the userCard and userInfo
      userCard.innerHTML = `
      <img class="img" src="img/headshot.jpg">
      <h1 class="h1">${el.name}</h1>
      <h2 class="h2"><i>${el.jobTitle}</i></h2>
      `;

      userInfo.innerHTML = `
      <h3>Company:</h3>
      <p>${el.company}</p>

      <h3>Experience:</h3>
      <p>${el.experience}</p>

      <h3>School:</h3>
      <p>${el.school}</p>

      <h3>Major:</h3>
      <p>${el.major}</p>

      <h3>Email:</h3>
      <p>${el.email}</p>

      <img src="img/linkedin.svg">
      <p>${el.linkedInUrl}</p>
      `;

    container.append(gridContainer);
    gridContainer.append(userCard);
    gridContainer.append(userSection);
    userSection.append(userInfo);

   })
