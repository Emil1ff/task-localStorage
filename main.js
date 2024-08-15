// Task 
// 3 dene function quracaqsiz bir function usersleri adlandiran
// function olacaq yeni dinamik olaraq usernameler vereceksiz
// o functionda localeStoragede onu users keyine value olaraq
// Array seklinde elave edecek
// 2ci function dinamik olaraq username qebul edib localeStorageden
// hemin usernameni silecek
// 3 cu function ise umumi localestoragedeki users arrayini pars
// olunmus halini logda daima gosderecek 
// elave olaraq onu qeyd edimki localestorageye add olunan ve ya
// silinende logda melumat verilsin bu haqda eger silinecek username yoxdu
// error versin eger elave olaraq eyni username elave olunacaqsa ondada
// error versin logda  ve elave edilmesin



function addUser(username) {
let users = JSON.parse(localStorage.getItem('users')) || [];
    try {
        if (users.includes(username)) {
            throw new Error("username artiq var")
        } else {
            users.push(username);
            localStorage.setItem('users', JSON.stringify(users));
            console.log(`${username} elave edildi tebrikler`);
            logUsers();
        }
    } catch (err) {
        console.error(err.message)
    }

}
function removeUser(username) {
let users = JSON.parse(localStorage.getItem('users')) || [];
    try {
        if (!users.includes(username)) {
            throw new Error(`${username} deye sexs qoqqu`);
        } else {
            users = users.filter(item => item != username);
            localStorage.setItem('users', JSON.stringify(users)); 
            console.log(`${username} silindi tebrikler`);
            logUsers();
        }
    } catch (err) {
        console.error(err.message);
    }
}
function logUsers() {
    console.log(users);
}

addUser('Emil');
addUser("Hemid")
addUser('Kenan');  
addUser("Yusif")
addUser('Kenan');


removeUser('Emil');
removeUser('Veli');
