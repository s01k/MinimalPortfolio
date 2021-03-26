

$(document).ready(function(e) {   
    $( ".inner-switch" ).on("click", function() {
        if( $( "body" ).hasClass( "dark" )) {
          $( "body" ).removeClass( "dark" );
          $( ".inner-switch" ).text( "Dark" );
        } else {
          $( "body" ).addClass( "dark" );
          $( ".inner-switch" ).text( "Light" );
        }
    });

 });
