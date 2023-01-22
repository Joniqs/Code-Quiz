// Highscores ordered list element
var highscores = document.getElementById('highscores');

// Function that gets player scores from localStorage and displays them
function getItems() {
    // Check if localStorage is empty
    if(localStorage.getItem("score") !== null) {
        // Get my localStorage which must be parsed
        var playerScore = JSON.parse(localStorage.getItem('score'));
        // Sorts the values ​​from the highest score (new array)
        var sortedArray = playerScore.sort((obj1, obj2) => {
            return obj2.score - obj1.score;
        });
        // For each sorted element
        sortedArray.forEach(element => {
            // Create a new list element
            var Elements = document.createElement('li');
            // Set it's contents to player initials and score
            Elements.textContent = element.initials + " - " + element.score;
            // Append it to highscores
            highscores.append(Elements);
        });
    }
}

// Get clearButton
var clearButton = document.getElementById('clear');

//When clear button clicked, clear localStorage and delete highscores list elements from the DOM
clearButton.addEventListener("click", function(){
    localStorage.clear();
    while (highscores.firstChild) {
        highscores.firstChild.remove()
    }
});

getItems();