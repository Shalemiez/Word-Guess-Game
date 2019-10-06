var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//-------Creat Random Letter---------
function randomLetter() {
    var num = Math.floor((Math.random() * letter.length));
    var ranletter = letter[num];
    console.log(ranletter)
    return ranletter;
}
function reset() {
    total = 10;
    win = 0;
    loss = 0;

}

var computer = randomLetter();
var win = 0;
var loss = 0;
var total = 10;
var letterused = [];
var winDiv = document.querySelector('#win');

document.onkeyup = function (event) {
    document.querySelector('#guess').textContent = event.key;
    var guess = event.key;
    console.log('b4 if ', total)

    // document.querySelector('#total').textContent = total;




    if (computer === guess) {
        win++;
        console.log('You won the game')
        winDiv.textContent = win;



    } else {
        loss++;
        total--;
        document.querySelector('#total').textContent = total;
        console.log('inside if', total);
        letterused.push(guess);
    }
    if (total === 0) {
        alert("Game over")
        reset();
    }

};







document.querySelector('#loss').textContent = loss;
document.querySelector('#total').textContent = total;


