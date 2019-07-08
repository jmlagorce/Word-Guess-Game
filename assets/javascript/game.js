var wordChoices = [
    "patriots", 
    "broncos", 
    "jets", 
    "giants", 
    "panthers", 
    "saints", 
    "chargers", 
    "dolphins", 
    "bengals",
    "falcons",
    "eagles",
    "texans"]
var wins = 0;
var computerChoice = wordChoices[Math.floor(Math.random() * wordChoices.length)];

var guessesLeft = 15;

var answerArray = [];
var splitWord = computerChoice.split("")



console.log(computerChoice);

function wordChosen (){
    for (i= 0; i < computerChoice.length; i++){
        answerArray.push("_");
    }
}


// function letterGuess (){
//     return splitWord
// }



// if (splitWord.includes(userGuess)) {
//     answerArray.push(userGuess)
// }
// else {
//     wrongLetter.textContent += userGuess

// }

wordChosen()

document.onkeyup = function (event) {
    userGuess = event.key;
    
    
    if (splitWord.includes(userGuess)) {
        for (i= 0; i < splitWord.length; i++){
            if (splitWord[i] === userGuess){
                answerArray[i] = userGuess;
            } 
        
        }

    if (guessesLeft=== 0) {
        
        guessesLeft=15;

    }

    
       
        correctLetter.textContent = answerArray;
    }
    
    
    else {
        wrongLetter.textContent += userGuess + " ";
        guessesLeft--;
        

    
    }

    
    
    

}



var wrongLetter = document.getElementById("lettersGuessed")
var correctLetter = document.getElementById("mysteryWord")
correctLetter.textContent = answerArray;
document.getElementById("guessRemain").innerHTML = guessesLeft;
document.getElementById("wins").innerHTML = wins;