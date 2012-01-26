
// Au chargement du document, le code javascript suivant sera exécuté

$(document).ready(  

 function()

 {


var timeout    = 500;

var closetimer = 0;

var ddmenuitem = 0;


function MenuDeroulant_open()

{  MenuDeroulant_canceltimer();

   MenuDeroulant_close();

   ddmenuitem = $(this).find('ul').css('visibility', 'visible');}


function MenuDeroulant_close()

{  if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}


function MenuDeroulant_timer()

{  closetimer = window.setTimeout(MenuDeroulant_close, timeout);}


function MenuDeroulant_canceltimer()

{  if(closetimer)

   {  window.clearTimeout(closetimer);

      closetimer = null;}}


$(document).ready(function()

{  $('#MenuDeroulant > li').bind('mouseover', MenuDeroulant_open)

   $('#MenuDeroulant > li').bind('mouseout',  MenuDeroulant_timer)});


document.onclick = MenuDeroulant_close;


});

 