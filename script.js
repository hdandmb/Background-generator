var css = document.querySelector("h3");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


function changeBackground() {
    body.style.background = "linear-gradient(to right, " 
    +  input1.value + ", " + input2.value + ")"
};
//Add EventListener to input1 and input2    
input1.addEventListener("input", changeBackground)

input2.addEventListener("input", changeBackground)