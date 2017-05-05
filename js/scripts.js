function playPingPong (number){
  if (!isNaN(number) === false || number === ""){
    alert("Please enter an integer greater than 0.");
  }
  else {
    number = parseFloat(number);
    if(number <= 0){
      alert("Please enter an integer greater than 0.")
    }
    else if(Number.isInteger(number) === false){
      alert("Please enter an integer, 1, 2, 7 ,etc.");
    }
    else{
      var pingOrpong = [];
      for(i=1; i<=number; i++){
        if(i%3 === 0 && i%5 === 0){
          pingOrpong.push("ping-pong");
        }
        else if(i%3 === 0){
          pingOrpong.push("ping");
        }
        else if(i%5 === 0){
          pingOrpong.push("pong");
        }
        else{
          pingOrpong.push(i);
        }
      }
    }
  }
  return pingOrpong;
}


$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var numberToPlay = $("input#user_input").val();
    var result = playPingPong(numberToPlay);
    for(i=0; i<result.length; i++){
      $("ul.list").append("<li>" + result[i] + "</li>");
    };

  });
});
