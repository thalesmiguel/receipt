$( document ).ready(function() {

  setInterval(function(){
    var value = $("#slip_value").val();
    $("#valExtenso").val(value.extenso('cur'));
  });
  
  setInterval(function(){ 
    $("#slip_value").keyup(function(){
      var value = $("#slip_value").val();
      $("#valExtenso").val(value.extenso('cur'));
    });
  }, 1000);
});