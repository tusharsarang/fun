var matrix_screen = document.getElementById("matrix_screen");
var ctx = matrix_screen.getContext("2d");

//making the canvas full screen
matrix_screen.height = window.innerHeight;
matrix_screen.width = window.innerWidth;

//chinese _characters - taken from the unicode charset
var matrix_characters = "ABCČĆDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžĂÂÊÔƠƯăâêôơư1234567890?!(%)[#]{@}&<-+÷×=>®©$€£¥¢*";
//converting the string into an array of single characters
matrix_characters = matrix_characters.split("");

var font_size = 10;
var columns = matrix_screen.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, matrix_screen.width, matrix_screen.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print
        var text = matrix_characters[Math.floor(Math.random() * matrix_characters.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > matrix_screen.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 35);