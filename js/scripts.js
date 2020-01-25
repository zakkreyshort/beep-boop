// back -- for(startingIndex, "ceiling", count by)
function please(str){
  var emptyArr = [];
  for(var index = 0; index <= str; index ++){
    emptyArr.push(index);
  }
  // logic needs to go in decending order to meet specs -- string.includes(searchvalue, start(optional))
  for (var z = 0; z <= str; z ++) {
    var makeString = z.toString();
    if (makeString.includes("3")) {
      emptyArr[z] = "im sorry dave i cannot do that.";
    } else if (makeString.includes("2")) {
      emptyArr[z] = "Boop!";
    } else if (makeString.includes("1")) {
      emptyArr[z] = "Beep!";
    }else{ 
    }
  }
  return emptyArr;
}

// Front
$(document).ready(function(){
  // name form 
  // $("#nameHere").submit(function(event){
  //   event.preventDefault();
  //   var personName = $("input#nameHere").val();
  //   $("#hideMe").hide();
  //   $("#mainH").show();
  // })
// number form 
  $(".inputHere").submit(function(event){
    event.preventDefault();
    var enterNumber = parseInt($("input#numberHere").val());
    $("#finalResult").text(please(enterNumber));
  })
})