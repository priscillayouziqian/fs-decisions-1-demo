// In this file, we’ll be using variables, conditionals, and loops to model a soccer match between the Emerald Eagles and Draconian Dragons.

// and loops to model a soccer match.Before the game, fans decide to check their stats. Using an if-else statement, console.log whose offense is better.

let eaglesOff = 9;
let dragonOff = 5;
let eagleDef = 6;
let dragonDef = 3;

if(eaglesOff > dragonOff){
    console.log("The Emerald Eagles have a better offense than the Draconian Dragons.");
}else if(eaglesOff < dragonOff){
    console.log("The Draconian Dragons have a better offense than the Emerald Eagles.");
}else{
    console.log("two team have the same offense ability.")
}
//What if we have a tie? Our code would actually say the Emerald Eagles have a better offense, which would be incorrect. Add an else if to resolve this.

//The Dragons start with the ball — use an if/else to determine if the Eagles’ defense is enough to prevent them from scoring. If it is not enough, console.log “The Dragons have scored.” and update the score. Otherwise, console.log “The game continues”.
let eaglesScore = 0;
let dragonScore = 0;

if(dragonOff > eagleDef){
    console.log(`The Dragons have scored`);
    dragonScore += 1;
}else {
    console.log ('The game continues.')
 }
//  Now the Eagles have the ball and are trying to score! Use an if/else to determine if the Dragons’ defense is enough to prevent them from scoring. If they do, console.log “The Eagles have scored.” and update the score. Otherwise, console.log “The game continues”.
if(eaglesOff > dragonDef){
    console.log(`The Eagles have scored`);
    eaglesScore += 1;
}else {
    console.log ('The game continues.')
 }

//  Add an if statement that will only let the Dragons make a goal if their offense ability is greater than the Eagles’ defense ability.
if(dragonOff > eagleDef){
    while(dragonScore < 5){
        dragonScore += 1;
    }
}
console.log(dragonScore)