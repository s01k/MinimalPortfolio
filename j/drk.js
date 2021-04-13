$(document).ready(function(e) {  
  // dark mode switch
  var setTheme = function (theme) {
    if (theme === 'dark') {
    // dark
    $( "body" ).removeClass("standard");
    $( "body" ).addClass( "dark" );
    $(".inner-switch").text("Light");
    setCookie('Theme', 'dark', 30);
    } else {
    $("body").removeClass("dark");
    $("body").addClass("standard");
    $(".inner-switch").text("Dark");
    setCookie('Theme', 'standard', 30);
    }
    };
    
    currentTheme = getCookie('Theme');
    setTheme(currentTheme);

    $( ".inner-switch" ).on("click", function() {
      if ($("body").hasClass("dark")) {
      // standard
      setTheme('standard');
      } else {
      // dark mode
      setTheme('dark');
      }
    });
 });
