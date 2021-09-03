console.log("sanity");


// ### Find the Largest Number in the Array
// Write a JavaScript conditional statement to find the largest of the five numbers from the array below. 
// Use an alert box to show the result.

// ```const myNumberList = [12, 2112, 9000, 1999, 24];```
const myNumberList = [12, 2112, 9000, 1999, 24];// list of array

// use a for loop to go through each index.
// set a variable to 0
let max = 0; // set a max to 0
// let finalMax = 0
for(i=0; i < myNumberList.length; i++ ) // went throught each element of the array!
{
     if(myNumberList[i] > max) // conditional.. IF the index of max is GREATER THAN 0...
     {
         max = myNumberList[i]; //... we store it inside of the max variable
        
     }
   
}

console.log(max); //console.log the results!



// ### Exercise 1: While/For Loops
// - Create an empty `name_array`
// - Ask the user ```Enter a word. Enter 'q' to quit.``` Add each word they enter to the array
// - Create a while loop that will keep asking for words to add to the array until they enter 'q'
// - When the user enters 'q' use a **for** loop to print each word from the array
// - NOTE: Your code should handle the case of the entered quite letter `Q`

exercise1 = () => {
     let name_array = []; // empty array
let userQuestions = true; // starts as true because the user is asking questions 
let quit = 'Q'.toLowerCase(); // set a variable to equal 'q' or 'Q' for use to press to quit.

while(userQuestions) //while loop keeps running while true
{
let askUser = prompt("Enter a word or press q to quit"); // Ask user to enter a word or press q to quit.
name_array.push(askUser); // push whatever they enter into the array

if (askUser === quit) // what happens if user press 'q' or 'Q'??
{
 userQuestions === false; // turns to false or questions turns OFF.
 break; // break the loop
}
};
console.log(name_array); // store the entires in the console.log!!

};
// exercise1(); <== UNCOMMENT TO VIEW EXERCISE 1




// FIZZBUZZ is a classic Programmer's challenge often used as part of job interviews. 



// #### Your code should start at 1 and then iterate each number up to the maximum


exercise2 = () => {
let userinput = prompt("Enter a number"); // ask the user to enter a number
// User inputs the ending value (e.g. 100)
for(index = 1; index <= userinput; index++)
{
    if(index % 3 === 0 && index % 5 === 0)
    {
        console.log(`FIZZBUZZ ${index}`);
    }
    // * If the current number is evenly divisible by 3 you should print "FIZZ" and the number
else if (index % 3 === 0)
{
    console.log(`FIZZ ${index}`);

}
// * If the current number is evenly divisible by 5 you should print "BUZZ" and the number
else if(index % 5 === 0)
{
    console.log(`BUZZ ${index}`);
}
else{
    console.log(`${index}`);
}

}
};

// exercise2(); <==== UNCOMMENT TO VIEW EXERCISE 2


// // * If the current number is evenly divisible by both 3 and 5 you should print "FIZZBUZZ" and the number
// if (userinput % 3 === 0 && userinput % 5 === 0)
// {
//     console.log(`FIZZBUZZ ${userinput}`);
// }
// // * If the current number is evenly divisible by 3 you should print "FIZZ" and the number
// else if (userinput % 3 === 0)
// {
//     console.log(`FIZZ ${userinput}`);

// }
// // * If the current number is evenly divisible by 5 you should print "BUZZ" and the number
// else if(userinput % 5 === 0)
// {
//     console.log(`BUZZ ${userinput}`);
// }
// // * Otherwise, just print the number to the console
// else{console.log(`${userinput}`)};




// ### Timer Challenge 1:
// Animate the included sprite images of 'guy' images. 

// then every .5 second (500 ms) update the image to the next one in sequence. 
// Once you reach image `guy9.png` start over with the `guy1.png` image.

//=== Things we will need ==//

//1.setInterval
//DOM
// FOR loop??

challenge1 = () => {
let sprite = document.getElementById("IMAGE");// get the placeholder image

sprite.src = `./guyfolder/guy1.png`; // starts at guy 1;

// sets index
let index = 1; // let counter start at image 1!!

 let animation = setInterval (() => {
    if (index === 10) // if the counter gets to 10 it will restart back to 1. This is because there is no 10th image!
    {
        index = 1;
    } 
    sprite.src = `./guyfolder/guy${index}.png`; // go through each imge index
    index++; // count up!
}, 500);

}

challenge1();

// SEE MARIO.HTML FOR CHALLENGE 2