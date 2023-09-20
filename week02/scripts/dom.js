const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value != '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        list.append(li);
        li.append(deleteButton)
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';

    }
    else {
        input.focus();
        input.placeholder = "Field cannot be blank";
    }
})











