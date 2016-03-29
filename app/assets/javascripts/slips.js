$( document ).ready(function() {
  
  var printArray = [];
  
  $("#slip_value").maskMoney({thousands:'.', decimal:','});
  $("#slip_cpf").mask('000.000.000-00');
  $("#slip_rg").mask('00.000.000-0');
  
  $(function () {
    $('#dataTable').multiSelect({
      actcls: 'info',
      selector: 'tbody tr',
      except: ['tbody'],
      callback: function (items) {
        printArray = [];
        $('#printButton').addClass('disabled');
        for (var i = 0; i <= items.length-1; i++) {
        
          if (items[i].className.search('info') >= 0) {
            $('#printButton').removeClass('disabled');
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
    if (value) {
      $("#valExtenso").val(value.extenso('cur'));
    }
  });
  
  setInterval(function(){ 
    
    $("#slip_value").keyup(function(){
      var value = $("#slip_value").val();
      $("#valExtenso").val(value.extenso('cur'));
    });

  }, 1000);


  $("#printButton").click(function(){
    $('#printButton').prop('href', 'slips/print');

    var url = $('#printButton').prop('href') + '?print_slips=' + printArray;
    $('#printButton').prop('href', url);
  });

});
