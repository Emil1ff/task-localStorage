function addUser(username) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    try {
        if (users.includes(username)) {
            throw new Error("Username already exists");
        } else {
            users.push(username);
            localStorage.setItem('users', JSON.stringify(users));
            console.log(`${username} added successfully`);
            logUsers();
        }
    } catch (err) {
        console.error(err.message);
    }
}

function removeUser(username) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    try {
        if (!users.includes(username)) {
            throw new Error(`User ${username} does not exist`);
        } else {
            users = users.filter(item => item !== username);
            localStorage.setItem('users', JSON.stringify(users));
            console.log(`${username} removed successfully`);
            logUsers(); 
        }
    } catch (err) {
        console.error(err.message);
    }
}

function logUsers() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Current users:', users);
}

addUser('Emil');
addUser('Hemid');
addUser('Kenan');  
addUser('Yusif');
addUser('Kenan'); 

removeUser('Emil');
removeUser('Veli'); 

