$(document).ready(function() {


    //declare global variables
    
        var firstCrystalNumber = "";
        var secondCrystalNumber = "";
        var thirdCrystalNumber = "";
        var fourthCrystalNumber = "";
        var randomTotal = "";
        var newrandomTotal = "";
        var totalScoreCounter = 0;
        var winsCounter = "";
        var lossesCounter = "";
    
    
    //create a function to initialize the game once the page loads.  
        function initializeGame () {
    
            firstCrystalNumber = Math.floor(Math.random() * 10);
    
            secondCrystalNumber = Math.floor(Math.random() * 10);
    
            thirdCrystalNumber = Math.floor(Math.random() * 10);
    
            fourthCrystalNumber = Math.floor(Math.random() * 10);
    
            randomTotal = Math.floor(Math.random() * 100);
            $("#random-number").text(randomTotal);
    
        }
    
    /*create on-click events that capture the value of the user's selection
    and performs various operations on it */
    
        function playGame () {
    
    $("#img1").on("click", function() {
        totalScoreCounter = totalScoreCounter + firstCrystalNumber
        $("#total-score").text(totalScoreCounter);
    })
    
    
    $("#img2").on("click", function() {
        totalScoreCounter = totalScoreCounter + secondCrystalNumber
        $("#total-score").text(totalScoreCounter);
    })
    
    
    $("#img3").on("click", function() {
        totalScoreCounter = totalScoreCounter + thirdCrystalNumber
        $("#total-score").text(totalScoreCounter);
    })
    
    $("#img4").on("click", function() {
        totalScoreCounter = totalScoreCounter + fourthCrystalNumber
        $("#total-score").text(totalScoreCounter);
    })
    
    
    //set-up while statement: while totalScore < randomTotal, continue playing
    
    }
        while (totalScoreCounter<randomTotal); {
            playGame()
        }
    
    /*set-up if...else if statement: if totalScore = randomTotal...wins, reset
    else if totalScore > randomTotal...losses, reset*/
    
    //write reset function
        function resetGame ()
                
    {
    
        firstCrystalNumber = Math.floor(Math.random() * 10);
    
        secondCrystalNumber = Math.floor(Math.random() * 10);
    
        thirdCrystalNumber = Math.floor(Math.random() * 10);
    
        fourthCrystalNumber = Math.floor(Math.random() * 10);
    
        newrandomTotal = Math.floor(Math.random() * 100);
            $("#random-number").text(newrandomTotal);
    
        TotalScore = 0
    }
       
        if (totalScoreCounter === randomTotal); {
            winsCounter++;
            $("#wins").text(winsCounter);
            resetGame();
        }
    
        if (totalScoreCounter > randomTotal); {
            lossesCounter++;
            $("#losses").text(lossesCounter);
            resetGame()
        }
    
    //call function to initialize the game
    
        initializeGame();
    
    
    });
