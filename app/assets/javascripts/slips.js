$( document ).ready(function() {

  $(function () {
    $('#dataTable').multiSelect({
      actcls: 'info',
      selector: 'tbody tr',
      except: ['tbody'],
      callback: function (items) {
        var printArray = [];
        for (var i = 0; i <= items.length-1; i++) {
        
          if (items[i].className.search('info') >= 0) {
            printArray.push(items[i].id);
          }  
        };
      console.log(printArray);
      }
    });
  });

  setInterval(function(){
    var value = $("#slip_value").val();
    // console.log(value);
    $("#valExtenso").val(value.extenso('cur'));
  });
  
  setInterval(function(){ 
    
    $("#slip_value").keyup(function(){
      var value = $("#slip_value").val();
      $("#valExtenso").val(value.extenso('cur'));
    });



  }, 1000);
});
