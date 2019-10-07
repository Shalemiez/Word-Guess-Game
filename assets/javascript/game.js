var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var randomLetter = letter[Math.floor(Math.random() * letter.length)];
var win = 0;
var loss = 0;
var guessleft = 10;
var letterused = [];
console.log("random letter is" + " " + randomLetter);


var winDiv = document.querySelector('#win');
winDiv.textContent = win;
var guessDiv = document.querySelector('#guess');
guessDiv.textContent = letterused;
var lossDiv = document.querySelector('#loss');
lossDiv.textContent = loss;
var guessleftDiv = document.querySelector('#guessleft');
guessleftDiv.textContent = guessleft;



//-----------Reset---------------
var reset = function () {
    guessleft = 10;
    letterused = [];
    randomLetter = letter[Math.floor(Math.random() * letter.length)];
    console.log("Your next random letter:  " + randomLetter);
}

// lossDiv.textContent = loss;
// winDiv.textContent = win;
guessleftDiv.textContent = guessleft;
guessDiv.textContent = guess;






//----------user input--------------
document.onkeyup = function (event) {
    document.querySelector('#guess').textContent = event.key
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    guessleft--;
    guessleftDiv.textContent = guessleft;
    letterused.push(guess);
    letterused.join('');
    guessDiv.textContent = letterused;
    console.log(guess)




    if (randomLetter === guess) {
        guessleft--;
        win++;
        winDiv.textContent = win;
        alert('You got me')
        reset();
    }


    if (guessleft === 0) {
        guessleft--;
        loss++;
        lossDiv.textContent = loss;
        alert("Ha  !Better Luck Next Time !");
        reset()

    }
    if (win === 5) {
        guessleft--;
        alert("Really? ZZzz... you can't do that !");
        reset();
    }
}
