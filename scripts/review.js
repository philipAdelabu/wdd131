

const getCounter = () => {
    var counter = 0;
    if(localStorage.getItem('counter') !== null)
         counter = localStorage.getItem('counter');
    return counter;
}



const counter = document.getElementById('counter');
counter.innerHTML = getCounter();
