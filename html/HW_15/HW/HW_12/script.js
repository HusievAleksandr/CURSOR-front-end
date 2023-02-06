
const BASE_URL = "https://swapi.dev/api/";
const get_people= document.querySelector('body');
const post_block= document.querySelector('#block');
const text = document.querySelector('#WOO');
let wookieeText = false;




get_people.addEventListener("click", function(e){
    const movie_selection = document.querySelector('#films').value; 
    const target = e.target;
    if(target.defaultValue=='GET'){getDataFromServer(`/films/${movie_selection}/`);wookieeText=text.checked;}
    if(target.innerText=='NEXT>>'){getDataFromServer('/planets/');}
                                             });


async function getDataFromServer (selection){

    const request = await fetch(`${BASE_URL}${selection}`);
    const data = await request.json(); 
  
    if (selection=='/planets/'){ 
              post_block.replaceChildren();
              data.results.forEach((el)=>{
              withdrawDisplayPlanets(el.name)})
              }
    else {    post_block.replaceChildren();
              data.characters.forEach(async (el)=>{
              const request = await fetch(el);
              const data = await request.json();

              const request_wookiee = await fetch(`${el}?format=wookiee`);
              const data_wookiee = await request_wookiee.json();
              
              withdrawDisplayPeople(data.name,data.birth_year,data.gender,data_wookiee.whrascwo);
                                        });
          }
                                              }


function withdrawDisplayPeople(name,birth_year,gender,whrascwo) {
    const people = document.createElement("div");
    const people_p = document.createElement("p");
    people.classList.add('people');
    
    const people_images = document.createElement('img')
    people_images.setAttribute("src",`images/${name}.jpg`)

    const people_name = document.createElement('span');
    people_name.textContent = wookieeText? `Whrascwo: ${whrascwo}`:`Name: ${name}`;

    const people_birth_year = document.createElement('span');
    people_birth_year.textContent = wookieeText? `Rhahrcaoac roworarc: ${birth_year}`:`Birth year: ${birth_year}`;

    const people_gender =document.createElement('img');
    people_gender.setAttribute("src",`images/${gender=='n/a'|| gender=='none'?'na': gender}.png`);
    people_gender.classList.add('gender');
   
    
    people_p.append(people_name);
    people_p.append(people_birth_year);
    people_p.append(people_gender);

    people.append(people_images);
    people.append(people_p);

   
    post_block.append(people);
  
}

export function withdrawDisplayPlanets(name) { 
  const planets = document.createElement("div");
  planets.classList.add('planets');

  const planets_images = document.createElement('img')
  planets_images.setAttribute("src",`images/${name}.jpg`)

  const planets_name = document.createElement('span');
  planets_name.textContent = `Name: ${name}`;

  planets.append(planets_name);
  planets.append(planets_images);

  post_block.append(planets);
}


module.exports = {BASE_URL,
                get_people,
                post_block,
                text,
                wookieeText,
                getDataFromServer,      
                withdrawDisplayPeople,
                withdrawDisplayPlanets
                };



