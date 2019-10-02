var win = 0;
var loss = 0;
var guestleft = 9;


function randomLetter() {
    var letter = "abcdefghijklmnopqrstuvwxyz"
    var num = Math.floor((Math.random() * letter.length + 1));
    var ranletter = letter.charAt(num);
    return ranletter;
}

console.log(randomLetter())






// function makeid(length) {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
// }

// console.log(makeid(5));