var randomNum= Math.floor(Math.random()*101);
var guess;
var attempts = 0;
var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        answer();
    }
})
document.getElementById("input").setAttribute('autocomplete', 'off');


function answer(){
    guess = input.value;
        
    

    
    if(guess < randomNum && guess > 0){
        document.getElementById("alert").innerHTML = "Too low! Try again.";
        attempts++;
        document.getElementById("numOfAttempts").innerHTML = "Attempts: " + attempts;
    }
    
    if(guess > randomNum && guess <= 100 ){
        document.getElementById("alert").innerHTML = "Too high! Try again.";
        attempts++;
        document.getElementById("numOfAttempts").innerHTML = "Attempts: " + attempts;
    }
    if(guess == randomNum){
        document.getElementById("alert").innerHTML = "Congratulations! You guessed the number " + randomNum + " in " + attempts + " attempts.";
        document.getElementById("alert").style.color = "green";
        attempts++;
        document.getElementById("numOfAttempts").innerHTML = "Attempts: " + attempts;
    }
    if(guess > 100 || guess <= 0){
        document.getElementById("alert").innerHTML = "Number out of range! Please enter a number between 1 and 100.";
        document.getElementById("alert").style.color = "red";
        
    }

    if(guess == 11757){
        alert("Welcome");
        
    }
    
    
  

    if(guess == randomNum){
        document.getElementById("attempts").innerHTML = "<b>It took you</b> " + attempts + " <b>attempts to guess the number.</b";
        document.getElementById("correctNum").innerHTML = "<strong>the correct number was: </strong>" + randomNum;
    }

    if(attempts == 1 && guess == randomNum){
        document.getElementById("title").innerHTML = "You earned the title lucky guesser";
    }
    if(attempts > 2 && attempts <= 5 && guess == randomNum){
        document.getElementById("title").innerHTML = "You earned the title pro guesser";
    }
    if(attempts > 5 && attempts <= 10 && guess == randomNum){
        document.getElementById("title").innerHTML = "You earned the title average guesser";
    }
    if(attempts > 10 && guess == randomNum){
        document.getElementById("title").innerHTML = "You don't derserve a title, do better scrub!";
    }

}

document.getElementById("playAgainBtn").addEventListener("click", function() {
    location.reload();
})