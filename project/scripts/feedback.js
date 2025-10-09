


const getName = () => {
    var name = '';
    if(localStorage.getItem('username') !== null)
         name = localStorage.getItem('username');
    return name;
}

const username = document.getElementById('name');
username.innerHTML = getName();
