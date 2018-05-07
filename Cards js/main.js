$(function(){
    $(".item").each(function(){
        $(this).flip();
        let choosen =  $(".item");
        $(this).click(function(){
            let index = $( ".item" ).index( this );
           setInterval(function(){
           choosen.eq(index+1).flip('toggle');
           index++;
           },250)
       })
    })
 })