$(document).ready(function() {


//declare global variables

    var firstCrystalNumber = "";
    var secondCrystalNumber = "";
    var thirdCrystalNumber = "";
    var fourthCrystalNumber = "";
    var randomTotal = "";
    var totalScore = 0;
    var wins = 0;
    var losses = 0;


//create a function to initialize the game once the page loads.  
    function initializeGame () {
        firstCrystalNumber = Math.floor(Math.random() * 10);

        secondCrystalNumber = Math.floor(Math.random() * 10);

        thirdCrystalNumber = Math.floor(Math.random() * 10);

        fourthCrystalNumber = Math.floor(Math.random() * 10);

        randomTotal = Math.floor(Math.random() * 100);

        totalScore = 

    }


/*create on-click events that capture the value of the user's selection
and performs various operations on it */




//set-up while statement: while totalScore < randomTotal, continue playing



/*set-up if...else if statement: if totalScore = randomTotal...wins, reset
else if totalScore > randomTotal...losses, reset*/


//



}