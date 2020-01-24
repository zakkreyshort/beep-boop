$(document).ready(function(){
  $("form#inputForm").submit(function(event){
  event.preventDefault();
  var compare = $("#onlyInput").val();
  var numArr = onlyInput.split(compare);

  for(var i = 0; i < numArr; i++){
    var beep = [1];
    if(numb){
      for(var i = 0; i < numArr; i++){
        if(numb === beep){
          return "Beep";
        }
      }
    }
  }

  $("#output").text(result);
  })
})

// for (var i=0; i < #onlyInput; i++)
// {}