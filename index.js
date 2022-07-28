// sets variable to total length of .drum buttons
let numOfDrumBtn = document.querySelectorAll(".drum").length;

// sets for loop to run and incriment if i is less than the length of variable
for (let i = 0; i < numOfDrumBtn; i++) {
  // query selects all .drum classes incriments with i through each loop and calls anonymous function
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // creates a variable to hold this and the html content inside
    let btnInnerHtml = this.innerHTML;

    switch (btnInnerHtml) {
      case "w":
        // adds new variable for new audio object and selects file
        let tom1 = new Audio(`sounds/tom-1.mp3`);
        // calls the new object to play sound
        tom1.play();
        break;
        default:
            
    }
  });
}
