function boopmybeep(number) {
  var userNumber = parseInt($("#onlyInput").val());
  var numbArr = []

  for (var number = 0; number <= userNumber; number ++)

  numbArr.push(number);
  console.log(numbArr);
}

var exceptions = function(userNumber){
  if (userNumber === 1){
    $("#output").text("Beep!");
  } else if (userNumber === 2) {
    $("#output").text("Boop!");
  } else if (userNumber === 3) {
    $("#output").text("I'm sorry, Dave. I'm afraid I can't do that.");
  } else{
    $("#output").text(userNumber);
  };
}

// frontend

$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var inputP = parseInt($("#onlyInput").val());
    var result = exceptions(inputP);
    
    
    $("#output").text(result);
  })
})