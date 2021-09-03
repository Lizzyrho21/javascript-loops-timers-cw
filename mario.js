console.log("Sanity");

// ### SUPER MARIO Challenge 2:
// Animate Mario walking to the left and right by pressing the left and right arrow keys 
// (HINT: implement event handler(s) for handling the key presses)


// get a reference to the image 
const sprite = document.querySelector("img"); // image is selected from the HTML
sprite.src = "./mario/Mario1.png"; // this pic will be the first pic the user is shown when they load the screen!

// starting index for left and right: 
let rightIndex = 2; // right index picture starts at 'MARIO2.png'
let leftIndex = 4; // left index picture starts at 'MARIO4.png'

// create an event listener for the whole document. a keydown event 
document.addEventListener("keydown", (event) => {
    console.log(event.key);  // console log the keys we press
// using switch case, we start with the switch keyword and the expression!
    switch(event.key){


        case "ArrowRight": // in the case of "ArrowRight"...
        if(rightIndex === 4)
        {
            rightIndex = 1;
        }
        sprite.src = `./mario/Mario${rightIndex}.png`;
        leftIndex = 4;
        rightIndex++;
        break;

        case "ArrowLeft":
            if(leftIndex === 7)
            {
                leftIndex = 4;
            }
           rightIndex = 1
            sprite.src = `./mario/Mario${leftIndex}.png`;
            leftIndex++;
            break;

            default:
                break;
    } 

    
});

