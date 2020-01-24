// back end



// function for beep/boop/dave
function listNumb(input){
  var numar = [];
  var input = parseInt($("#onlyInput").val());
  for(var i = "0"; i < input.length; i++){
    if (input === "1"){
      $("#output").text("Beep!")
    } else if (input === "2") {
      $("#output").text("Boop!")
    } else if (input === "3") {
      $("#output").text("I'm sorry, Dave. I'm afraid I can't do that.")
    } else{
      $("#output").text(input);
    };
  };
}

// frontend

$(document).ready(function(){
  $("#inputForm").submit(function(){
    
    var inputP = parseInt($("#onlyInput").val());
    var result = listNumb(inputP);
    event.preventDefault();
    $("#output").text(result);
  })
})
