        $(document).ready(function(){

            function count(){
              var val   = $.trim($('#text').val()), // Remove spaces from b/e of string
                  words = val.replace(/\s+/gi, ' ').split(' ').length, // Count word-splits
                  chars = val.length;                                  // Count characters
              if(!chars)words=0;

              $('#counter').html('<br>'+words+' kelime ve '+ chars +' karakter');
            }
            count();

            $('#text').on('input', count);
        });