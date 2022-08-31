// settimeout that adds a few users to our users.html file dom
const userList = document.querySelector('.user-list');

const createUser = (name) => {
    const li = document.createElement('li');
    const text = document.createTextNode(name);
    
    li.appendChild(text);

    userList.appendChild(li);
}

setTimeout(() => {
    createUser('Quentin');
}, 1000);

setTimeout(() => {
    createUser('Rob');
}, 1500);

setTimeout(() => {
    createUser('David');
}, 2000);