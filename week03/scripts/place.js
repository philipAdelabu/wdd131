

const year = document.querySelector("#currentyear");
// use the date object
const today = new Date();
year.innerHTML = today.getFullYear();
document.querySelector("#lastModified").innerHTML = "Last Modification: " + document.lastModified;

const temperature = 10;
const speed = 5;
function calculateWindChill(temperature, speed){
     if(temperature <= 10 && speed > 4.8){
        const T = temperature;
        const V = speed;
        const wchill = 13.12 + (0.6215*T) + ((0.3965*T) - 11.37)*(V**0.16);
         return wchill.toFixed(1);
     }
     return "N/A";
}

const windchill = calculateWindChill(temperature, speed);
document.querySelector('#temperature').innerHTML = `${temperature} <sup>o</sup>C`;
document.querySelector('#speed').innerHTML = `${speed} km/h`;
document.querySelector('#windchill').innerHTML = `${windchill} <sup>o</sup>C`;