// create behvaior for 1,2,3
var enterNum = parseInt($("#onlyOutput").val());
  if(enterNum === 1){
    return "Beep!"
  } else if (enterNum === 2){
    return "Boop!"
  } else if (enterNum === 3){
    return "I'm sorry, Dave. I'm afraid I can't do that."
  }
}


// front end 
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var inputP = parseInt($("#onlyOutput").val());
    $("#output").text(enterNum);
  })
})
