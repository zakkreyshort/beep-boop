

$(document).ready(function(){
  $("#inputForm").submit(function(){
    
    var inputP = parseInt($("#onlyInput").val());
    var result = listNumb(inputP);
    event.preventDefault();
    $("#output").text(result);
  })
})
