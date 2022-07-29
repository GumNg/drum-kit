// sets variable to total length of .drum buttons
let numOfDrumBtn = document.querySelectorAll(".drum").length;

// sets for loop to run and incriment if i is less than the length of variable
for (let i = 0; i < numOfDrumBtn; i++) {
  // query selects all .drum classes incriments with i through each loop and calls anonymous function when clicked
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // creates a variable to hold this and the html content inside
    let btnInnerHtml = this.innerHTML;

    // calls function using innerHTML of button clicked
    makeSound(btnInnerHtml)
  });
}

// adds event listner to entire page to check for when a key is pressed
document.addEventListener("keydown", function(event) {
    // calls function using key property of the event 
    makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    // executes code if innerHTML contains w
    case "w":
      // adds new variable for new audio object and selects file
      let tom1 = new Audio(`sounds/tom-1.mp3`);

      // calls the new object to play sound
      tom1.play();

      // end of this case block
      break;

    // executes code if innerHTML contains a
    case "a":
      let crash = new Audio(`sounds/crash.mp3`);
      crash.play();
      break;

    // executes code if innerHTML contains s
    case "s":
      let snare = new Audio(`sounds/snare.mp3`);
      snare.play();
      break;

    // executes code if innerHTML contains d
    case "d":
      let kick = new Audio(`sounds/kick-bass.mp3`);
      kick.play();
      break;

    // executes code if innerHTML contains j
    case "j":
      let tom2 = new Audio(`sounds/tom-2.mp3`);
      tom2.play();
      break;

    // executes code if innerHTML contains k
    case "k":
      let tom3 = new Audio(`sounds/tom-3.mp3`);
      tom3.play();
      break;

    // executes code if innerHTML contains l
    case "l":
      let tom4 = new Audio(`sounds/tom-4.mp3`);
      tom4.play();
      break;

    default:
  }
}
