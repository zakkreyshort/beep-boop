function boopmybeep(num) {
  var userNumber = parseInt($("#onlyInput").val());
  var numbArr = []

  for (var number = 0; number <= userNumber; number ++)

  numbArr.push(number);
  console.log(numbArr);
}



$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var inputP = parseInt($("#onlyInput").val());
    
    
    $("#output").append(inputP);
  })
})