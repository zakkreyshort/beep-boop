// bus log
var outputNum = function(compare){
  if (compare === 1){
    return beep;
  } else if (compare === 2){
    return boop;
  } else {
  }
}


// user interface
$(document).ready(function(){
  $("form#inputForm").submit(function(event){
  event.preventDefault();
  var compare = $("input#onlyInput").val();
  var result = outputNum(compare);

  $("#output").text(result);
  })
})

// for (var i=0; i < #onlyInput; i++)
// {}