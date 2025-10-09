const submitForm = (event) => {
    event.preventDefault();
    storage();
   window.location = "response.html";

};

const storage = () => {
    const username = document.getElementById('name');
    localStorage.setItem('username', username.value);
}

const form = document.getElementById('form');
form.addEventListener('submit', submitForm);
