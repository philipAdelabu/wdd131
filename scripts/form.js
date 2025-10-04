

var products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5,
    },
     {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7,
    },
     {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5,
    },
     {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9,
    },
     {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0,
    },
];


const product = document.getElementById('product');
products.forEach(element => {
    const option = document.createElement('option');
    option.setAttribute('value', element.id);
    option.innerHTML = element.name;
    product.appendChild(option);
});


const submitForm = (event) => {
    event.preventDefault();
    storage();
   window.location = "review.html";

};



const storage = () => {
    var counter = 0;

    if(localStorage.getItem('counter') !== null)
         counter = localStorage.getItem('counter');
    
    counter++;
    localStorage.setItem('counter', counter);
    return counter;
}


 const form = document.getElementById('the-form');
form.addEventListener('submit', submitForm);






