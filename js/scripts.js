$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var inputP = $("#onlyInput").val();
    console.log(inputP)
  })
})