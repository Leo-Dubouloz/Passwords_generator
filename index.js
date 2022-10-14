const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const charact = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
let opt = []

let password = ""

let firstPassword = document.getElementById("firstpassword")
let secondPassword = document.getElementById("secondpassword")
let inputLength = document.getElementById("setlength")
let checkNumbers = document.getElementById("numbers")
let checkLetters = document.getElementById("letters")
let checkCharact = document.getElementById("characters")
const firstCopy = document.getElementById("firstpassword") 
const secondCopy = document.getElementById("secondpassword")


function generate(){
    let size = checkLength()
    if(!checkNumbers.checked && !checkLetters.checked && !checkCharact.checked){
        firstPassword.textContent = "Please, check at least one option"
        secondPassword.textContent = "Please, check at least one option"
    }
    else{
    parameters()
    firstPassword.textContent = random(size)
    password=""
    secondPassword.textContent = random(size)
    password="" 

    }
}


function random(size){
    for(let i=0; i<size; i++){
        let randomNumb = Math.floor(Math.random()*opt.length)
        password += opt[randomNumb]
    }
    return password
}


function checkLength() {
    let length = inputLength.value

    if(length < 5){
        inputLength.value = inputLength.min
        length = inputLength.min
    }
    else if(length > 15){
        inputLength.value = inputLength.max
        length = inputLength.max
    }
    
    return length
}


function parameters(){
    opt = []
    if(checkNumbers.checked == true ) opt = opt.concat(numbers)
    if(checkLetters.checked == true) opt = opt.concat(letters)
    if(checkCharact.checked == true) opt = opt.concat(charact) 
}

firstCopy.addEventListener('click', (event) => {
    let content = firstCopy.textContent
    navigator.clipboard.writeText(content)
})

secondCopy.addEventListener('click', (event) => {
    let content = secondCopy.textContent
    navigator.clipboard.writeText(content)
})