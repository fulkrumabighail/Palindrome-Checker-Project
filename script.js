const inputText = document.getElementById("text-input").value;
const resultText = document.getElementById("result");
const checkBtn  = document.getElementById("check-btn");

let palindrome = false

function checkPalindrome(){
    if(inputText.length=1){
         palindrome = true
    }
}
function checkText(){
    
    if(inputText.value === ""){
        throw alert("Please input");
    }else{
     resultText.innerText = inputText + " is " + palindrome;
    }
};