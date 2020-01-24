

$(document).ready(function(){
  $("#inputForm").submit(function(){
    
    var inputP = parseInt($("#onlyInput").val());
    event.preventDefault();
    $("#output").text(inputP);
  })
})
