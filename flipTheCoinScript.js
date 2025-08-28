var headsCounter = 0;
var tailsCounter = 0;
function flipCoin(){
    
    var result = Math.floor(Math.random()*2) + 1;
    
    
   

    
    
    
    if(result == 1){
        document.getElementById("coinResult").innerHTML = "<img src='Images/CoinFront.png'>";
        document.getElementById("coinTitle").innerHTML = "Heads!";
        headsCounter++;
        document.getElementById("headsCounter").innerHTML = headsCounter;
    }
    else{
        document.getElementById("coinResult").innerHTML = "<img src='Images/CoinBack.png'>";
        document.getElementById("coinTitle").innerHTML = "Tails!";
        tailsCounter++
        document.getElementById("tailsCounter").innerHTML = tailsCounter;
    }
}


function restart(){
    location.reload();
}

