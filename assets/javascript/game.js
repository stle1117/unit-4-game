$(document).ready(function() {


    //declare global variables

    var firstCrystalNumber = "";
    var secondCrystalNumber = "";
    var thirdCrystalNumber = "";
    var fourthCrystalNumber = "";
    var randomTotal = 0;
    var newrandomTotal = 0;
    var totalScoreCounter = 0;
    var winsCounter = 0;
    var lossesCounter = 0;
    
    
    //create a function to initialize the game once the page loads.  
    function initializeGame () {

        firstCrystalNumber = Math.floor(Math.random() * 10) +1;

        secondCrystalNumber = Math.floor(Math.random() * 10) +1;

        thirdCrystalNumber = Math.floor(Math.random() * 10) +1;

        fourthCrystalNumber = Math.floor(Math.random() * 10) +1;

        randomTotal = Math.floor(Math.random() * 100) +1;
        $("#random-number").text(randomTotal);

    }
    
    /*create on-click events that capture the value of the user's selection
    and performs various operations on it */
    
    function playGame () {
    
        $("#img1").on("click", function() {
            totalScoreCounter = totalScoreCounter + firstCrystalNumber
            $("#total-score").text(totalScoreCounter);
            checkTotal();
        })
        
        
        $("#img2").on("click", function() {
            totalScoreCounter = totalScoreCounter + secondCrystalNumber
            $("#total-score").text(totalScoreCounter);
            checkTotal();
        })
        
        
        $("#img3").on("click", function() {
            totalScoreCounter = totalScoreCounter + thirdCrystalNumber
            $("#total-score").text(totalScoreCounter);
            checkTotal();
        })
        
        $("#img4").on("click", function() {
            totalScoreCounter = totalScoreCounter + fourthCrystalNumber
            $("#total-score").text(totalScoreCounter);
            checkTotal();
        })
    
    }
    
    //set-up while statement: while totalScore < randomTotal, continue playing
    
    while (totalScoreCounter<randomTotal); {
        playGame()
    }
    
    /*set-up if...else if statement: if totalScore = randomTotal...wins, reset
    else if totalScore > randomTotal...losses, reset*/
    
    //write reset function
    function resetGame () {
    
        firstCrystalNumber = Math.floor(Math.random() * 10) +1;
    
        secondCrystalNumber = Math.floor(Math.random() * 10) +1;
    
        thirdCrystalNumber = Math.floor(Math.random() * 10) +1;
    
        fourthCrystalNumber = Math.floor(Math.random() * 10) +1;
    
        newrandomTotal = Math.floor(Math.random() * 100) +1;
            $("#random-number").text(newrandomTotal);
    
        totalScoreCounter = 0
    }
       
    function checkTotal () {
        if (totalScoreCounter === randomTotal) {
            winsCounter++;
            $("#wins").text("Wins: " + winsCounter);
            resetGame();
        }

        if (totalScoreCounter > randomTotal) {
            lossesCounter++;
            $("#losses").text("Losses: " + lossesCounter);
            resetGame()
        }

    }
    
    //call function to initialize the game
    initializeGame();
    
});
