let result = document.querySelector('.result')

let username = prompt("Please enter the username")
let password = prompt("Please enter your password")

function checkLogin(username, password) {
if(username == "admin" && password == "secret") {
    console.log("welcome admin")
    str = "welcome admin"
} else{
    console.log("BAD LOGIN CREDENTIALS")
    str = "BAD LOGIN CREDENTIALS"
}
}

checkLogin(username, password)
result.innerHTML = str