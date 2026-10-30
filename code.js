
const queryMobileMenu = document.getElementById('MobileMenu');
const queryMobile_Nav = document.getElementById('mobile-nav');
const queryMain = document.body;
const queryExtra = document.getElementById('logo-extra-info');


function MobileMenu() {
  if ( queryMobileMenu.style.display == 'flex') {
    queryMobileMenu.style.display = 'none';
    if (queryExtra) queryExtra.style.display = 'flex';
    queryMain.style.overflow = 'visible';
  } else {
    queryMain.style.overflow = 'hidden';
    queryMobileMenu.style.display  = 'flex';
    if (queryExtra) queryExtra.style.display = 'none';
    }
}


// Speakers information
const info = {
  speakers: [
  {
    id: 1,
    lecturer: 'Andrea Yacuzzi',  
    position: 'Coach Integral',
    review: '...',
    image:  './images/Walter-alva.png'
  },
  {
    id: 3,
    lecturer: 'Monica Flores',  
    position: 'Hermana',
    review: '...',
    image:  './images/Charles-Walker.jpg'
  },{
    id: 3,
    lecturer: 'Eudes Juan Luna',  
    position: 'Lic. Enologia e Industrias Frutales y Hortalizas',
    review: 'Actualmente se desempeña como Rector del IES Nº 6.038 de Cafayate',
    image:  './images/Giuseppe-Orefici.jpg'
  },{
    id: 4,
    lecturer: 'Mercedes Rodriguez',  
    position: 'Psicopedagoga',
    review: '...',
    image:  './images/Krzysztof-Makowski.jpg'
  },{
    id: 5,
    lecturer: 'Cintia Arancibia',  
    position: 'Psicopedagoga',
    review: '...',
    image:  './images/Ruth-Shady.jpg'
  },{
    id: 6,
    lecturer: 'Cristina Menacho',  
    position: 'Sargento',
    review: 'Forma parte del Equipo Tecnico de la Dirección General de Prevencion y Abordaje Territorial- Secretaria de Seguridad de la Pcia. de Salta',
    image:  './images/Ruth-Shady.jpg'
  }
  
]  
}

//Speakers
const theSpeakers = info.speakers;
const queryReviewsSection = document.getElementById ('reviews');

function createReviewsSection() {  
  theSpeakers.forEach( (data) => {  
    queryReviewsSection.innerHTML += `<div class="lecturer">
    <img src="${data.image}"  alt="Lecturer ${data.id}">
    <div class="details">
      <h2>${data.lecturer}</h2>
      <h3>${data.position}</h3>
      <p>${data.review}
      </p>
    </div>
  </div>
  `;
 }
 )
}

if (queryReviewsSection) createReviewsSection();

