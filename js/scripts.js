// back
function please(str){
  var emptyArr = [];
  for(var index = 0; index <= str; index ++){
    emptyArr.push(index);
  }
  // logic needs to go in decending order to meet specs string.includes(searchvalue, start(optional))
  for (var i = 0; i <= str; i ++) {
    var makeString = i.toString();
    if (makeString.includes("3")) {
      emptyArr[i] = "im sorry dave i cannot do that.";
    } else if (makeString.includes("2")) {
      emptyArr[i] = "Boop!";
    } else if (makeString.includes("1")) {
      emptyArr[i] = "Beep!";
    }
  }
  return emptyArr;
}

// Front
$(document).ready(function(){
  $(".inputHere").submit(function(event){
    event.preventDefault();
    var enterNumber = parseInt($("input#numberHere").val());
    $("#finalResult").text(please(enterNumber));
  })
})