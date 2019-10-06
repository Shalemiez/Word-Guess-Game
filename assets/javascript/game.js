var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var computer = randomLetter();
var win = 0;
var loss = 0;
var guessleft = 10;
var letterused = [];

var winDiv = document.querySelector('#win');
winDiv.textContent = win;
var guessDiv = document.querySelector('#guess');
guessDiv.textContent = guess;
var lossDiv = document.querySelector('#loss');
lossDiv.textContent = loss;
var guessleftDiv = document.querySelector('#guessleft');
guessleftDiv.textContent = guessleft;

//-------Creat Random Letter---------
function randomLetter() {
    var num = Math.floor((Math.random() * letter.length));
    var ranletter = letter[num];
    console.log(ranletter)
    return ranletter;
}
//-----------Reset---------------
function reset() {
    guessleft = 10;
    loss = 0;
    win = 0;
    lossDiv.textContent = loss;
    winDiv.textContent = win;

    guessleftDiv.textContent = guessleft;




}
//----------use input--------------


if (guessleft !== 0) {
    randomLetter();
    document.onkeyup = function (event) {
        document.querySelector('#guess').textContent = event.key;
        var guess = event.key;

        // letterused.push(guess);
        // letterused.join(",")
        // console.log('b4 if ', total)
        // guessDiv.textContent = guess;
        // count++
        // console.log(count)


        if (computer === guess) {
            win++;
            guessleft = 10;
            alert('You got me')
            winDiv.textContent = win;
            guessleftDiv.textContent = guessleft;


        } else {
            guessleft--;
            loss++;
            document.querySelector('#guessleft').textContent = guessleft;
            console.log('inside if', guessleft);
        }
        if (guessleft === 0) {
            reset();
            alert("Better Luck Next Time !")


        }
    }

};




