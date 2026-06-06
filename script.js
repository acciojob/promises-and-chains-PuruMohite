//your JS code here. If required.
let userName = document.getElementById("name");
let userAge = document.getElementById("age");
let submitBtn = document.getElementById("btn");

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(userAge.value && userName.value){
        checkAge(userName.value, userAge.value).then((data) => {
            alert(data);
        }).catch((e) => {
            alert(e);
        })
    }else{
        alert("Please enter valid details");
    }
    
});

function checkAge(name, age){
    return new Promise((resolve, reject) => {
        if(age>=18){
            setTimeout(() => {
                resolve(`Welcome, ${name}. You can vote.`);
            }, 4000);
        }else{
            setTimeout(() => {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }, 4000);
        }
    })
}