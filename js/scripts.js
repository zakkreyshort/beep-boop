
    // var exception1 = function(num){
    //   if(num === 1){
    //     return Beep;
    //   } else if (num === 2){
    //     return Boop!;
    //   } else {
    //     return I'm sorry, Dave. I'm afraid I can't do that.;
    //   }
    // }



$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var input = $("#onlyInput").val();


    $("#output").text(input);
  })
})