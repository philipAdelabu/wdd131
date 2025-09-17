
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

 
button.addEventListener('click', function(){
    if(input.value.trim() !== ''){
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        li.append(deleteButton);
        list.append(li);
    }else{
        input.focus();
    }
});

list.addEventListener('click', function(event){
        const li = event.target.parentElement; 
        list.removeChild(li);
        input.value = '';
        input.focus();
});

