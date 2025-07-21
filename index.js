const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let mainButton = document.getElementById("mainbutton")
let passButton = document.getElementById("passbutton")
let passButton2 = document.getElementById("passbutton2")

function genPass() {
    for (i = 0; i < 15; i++) {
        let gener = Math.floor( Math.random() * characters.length)
    // return characters[gener]
        passButton.textContent += characters[gener]
    }
}

function genPass2() {
    for (i = 0; i < 15; i++) {
        let gener = Math.floor( Math.random() * characters.length)
    // return characters[gener]
        passButton2.textContent += characters[gener]
    }
}

function copyPassword() {
    let copyText = document.getElementById("passbutton")
        navigator.clipboard.writeText(copyText.textContent);
        alert("Copied the password: " + copyText.textContent);
}
function copyPassword2() {
    let copyText = document.getElementById("passbutton")
        navigator.clipboard.writeText(copyText.textContent);
        alert("Copied the password: " + copyText.textContent);
}