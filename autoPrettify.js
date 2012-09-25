(function(){
  // __name space__
  window.autoPrettify = {
    cdn:"http://georgeosddev.github.com/autoPrettify.js",
    jQueryTimerId:"",
    prettifyTimerId:""
  }
  // load jquery
  if(!window.jQuery) {
    document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"><\/script>'); 
  }
  // wait until jquery was loaded
  jQueryReady = function(tid){
    if (window.jQuery) {
      clearTimeout(tid);
      $('head').append('<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Source+Code+Pro">');
      $('head').append('<link rel="stylesheet" type="text/css" href="' + autoPrettify.cdn + '/assets/google-code-prettify/prettify.css">');
      $('head').append('<link rel="stylesheet" type="text/css" href="' + autoPrettify.cdn + '/autoPrettify.css">');
      $('head').append('<script type="text/javascript" src="' + autoPrettify.cdn + '/assets/google-code-prettify/prettify.js"><\/script>');
      $('pre,code').each(function(){
        $(this).addClass('prettyprint');
      });
      // wait until prettify.js was loaded
      prettifyReady = function(tid2){
        if (window.prettyPrint){
          clearTimeout(tid2);
          prettyPrint();
        }
      }
      autoPrettify.prettifyTimerId = setInterval(function(){
        prettifyReady(autoPrettify.prettifyTimerId)    
      },100);
    }
  }
  autoPrettify.jQueryTimerId = setInterval(function(){
    jQueryReady(autoPrettify.jQueryTimerId)    
  },100);
})();