function playPingPong (number){
  if (!isNaN(number) === false || number === ""){
    alert("Please enter a number.");
  }
  else {
    number = parseFloat(number);
    if(number <= 0){
      alert("Please enter a number great than 0.")
    }
    else if(Number.isInteger(number) === false){
      alert("Please enter an integer, 1, 2, 7 ,etc.");
    }
  }
}


$(document).ready(function(){
  $("form#pingpong").submit(function(){
    var numberToPlay = $("input#user_input").val();
    playPingPong(numberToPlay);
  });
});
