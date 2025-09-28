

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...

   {
    templeName: "Abidjan Ivory Coast",
    location: "Abidjan, Ivory Coast",
    dedicated: "1972, February, 9",
    area: 162000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-59714.jpg"
  },


    {
    templeName: "Billings Montana",
    location: "Missoula, USA",
    dedicated: "1999, November, 21",
    area: 33800,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/billings-montana-temple/billings-montana-temple-8797.jpg"
  },

    {
    templeName: "Provo Utah Rock Canyon",
    location: "Utah, USA",
    dedicated: "2025, May, 25",
    area: 17362,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/provo-utah-rock-canyon-temple/provo-utah-rock-canyon-temple-45659-main.jpg"
  },

   
];

const displayImages = (imageArray) => {
	const imgSection = document.querySelector('#image-section');
    imageArray.forEach(element => {
		const div = document.createElement('div');
		div.classList.add('card');
		const h3 = document.createElement('h3');
		h3.innerHTML = element.templeName;
		const p = document.createElement('p');
		p.innerHTML = `Location:  ${element.location}  <br />Dedicated:  ${element.dedicated} <br> Size:  ${element.area} sq ft`;
		const img = document.createElement('img');
		img.setAttribute('src', element.imageUrl);
		img.setAttribute('alt', element.templeName);
		img.setAttribute('loading', 'lazy');
		img.setAttribute('width', '320');
		img.setAttribute('height', '300');
		div.appendChild(h3);
		div.appendChild(p);
		div.appendChild(img);
		imgSection.appendChild(div);
	});
};

const callFunct = (action, imgArr=temples) => {
   var arr;
    switch(action){
      case "home":
        arr = imgArr;
        break;
      case "old":
        arr = imgArr.filter( item => Number((item['dedicated']).split(",")[0]) < 1900 );
        break;
      case "new":
        arr = imgArr.filter( item => Number((item['dedicated']).split(",")[0]) > 2000 );
        break;
      case "large":
        arr = imgArr.filter( item => Number(item['area']) > 90000 );
        break;
      case "small":
        arr = imgArr.filter( item => Number(item['area']) < 10000 );
        break;
      default:
        arr = imgArr; 
    }

document.querySelector('#image-section').innerHTML = "";
 displayImages(arr);
}

displayImages(temples);