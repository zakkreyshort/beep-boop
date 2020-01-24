function boopmybeep(number) {
  var userNumber = parseInt($("#onlyInput").val());
  var numbArr = []

  for (var number = 0; number <= userNumber; number ++)

  numbArr.push(number);
  console.log(numbArr);
}

var exceptions = function(userNumber){
  if (userNumber ===1){
    $("#output").append("Beep!");
  }
}

// frontend

$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var inputP = parseInt($("#onlyInput").val());
    var result = exceptions(inputP);
    
    
    $("#output").append(result);
  })
})