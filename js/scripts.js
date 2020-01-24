// Front end
$(document).ready(function(){
  $(".inputHere").submit(function(event){
    event.preventDefault();
    var enterNumber = parseInt($("input#numberHere").val());
  })
  $("$finalResult").text(FUNCTIONNAMEHERE(enterNumber));
})