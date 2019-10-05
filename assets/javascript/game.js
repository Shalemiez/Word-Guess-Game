function randomLetter() {
    var letter = "abcdefghijklmnopqrstuvwxyz"
    var num = Math.floor((Math.random() * letter.length + 1));
    var ranletter = letter.charAt(num);
    return ranletter;

}

document.onkeyup = function guess(e) {
    console.log(e.key);
    document.querySelector('#guess').textContent = e.key + (',');

};





var letter = randomLetter();
var guess = guess(e);
var win = 0;
var loss = 0;
var total = 10;
letterused = [];

document.querySelector('#win').textContent = win;
document.querySelector('#loss').textContent = loss;
document.querySelector('#guessleft').textContent = total;

letteruse.push(guess);





if (letter === guess) {
    console.log("you got me");
    win++
    total--;

} else if {
    console.log("nope");
    loss = this.loss + 1;
    total--;
letterused.push(guess);
    }
}





// document.getElementById('win').innerHTML = win;
// document.getElementById('loss').innerHTML = loss;
// document.getElementById('guessleft').innerHTML = guessleft;