function setup() {
  createCanvas(400, 400);
}

function hint(guess){
  var colors = ["🖤","🖤","🖤","🖤","🖤"]
  for(var i =0; i < guess.length; i++){
    if (guess[i]==secret_word[i]){
      colors[i]="💚";
    }
}
  return colors;
}
  
var secret_word ="foyer";
  var user_guess= "";
for (var i=0;i<6;i++){
var generated_hint = hint(user_guess)

  user_guess= prompt(generated_hint + "what word do you guess?");

if (user_guess == secret_word)
  alert("Congrats you won!")
}
function draw() {

  background(220);
}