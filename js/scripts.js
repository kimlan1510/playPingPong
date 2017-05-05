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

function decimalToBinary(number){
  var binaryReverse = [];
  var binary = [];
  while(number != 0){
    var remainder = number % 2;
    if(remainder === 0){
      var zero = 0;
      binaryReverse.push(0);
    }
    else{
      var one = 1;
      binaryReverse.push(1);
    }
    number = (number - number%2)/2;
  }
  for(i=binaryReverse.length-1; i>=0; --i){
    binary.push(binaryReverse[i]);
  }
  return binary;
}

function binaryPingPong(binaryNumber){
  console.log(binaryNumber);
  var pingOrpong = [];
  for(i=0; i<binaryNumber.length; i++){
    if(binaryNumber[i] === 1){
      pingOrpong.push("ping");
    }
    else if(binaryNumber[i] === 0){
      pingOrpong.push("pong");
    }
  }
  return pingOrpong;
}


function clearScreen(){
  $("ul.list").text("");
}

$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var numberToPlay = $("input#user_input").val();
    var result = playPingPong(numberToPlay);
    var result_binary = binaryPingPong(decimalToBinary(numberToPlay));
    console.log(result_binary);
    clearScreen();
    for(i=0; i<result.length; i++){
      $("ul.decimal").append("<li>" + result[i] + "</li>");
    };
    for(i=0; i<result_binary.length; i++){
      $("ul.binary").append("<li>"+ result_binary[i]+ "</li>");
    };
  });
});
