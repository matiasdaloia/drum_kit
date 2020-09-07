//Number of drum buttons
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

//Audio objects
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");

//Defining a function to play corresponding sound : 

function makeSound(key) {

    switch (key) {
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;                
        case "j":
            kickBass.play();
            break;
        case "k":
            crash.play();
            break;
        case "l":
            snare.play();
            break;
        default: console.log("No proper button clicked/pressed...")
            break;
    }
}

// Defining a function to make an animation when pressed/clicked:

function makeAnimation(currentKey){
    //finding current button
    var button = document.querySelector("." + currentKey);

    //adding pressed class
    button.classList.add("pressed");

    setTimeout(function(){
        button.classList.remove("pressed");
    }, 100)

}

//Event listener for clicks:

for (i = 0; i < numberOfDrumButtons ; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        
        var buttonLetter = this.innerHTML;
        
        makeSound(buttonLetter);
        makeAnimation(buttonLetter);
    });
}

//Event listener for key presses:

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    makeAnimation(event.key);
})
