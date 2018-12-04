$(document).ready(function(){
   $(".carousel").carousel({
    interval:5000
   }) ;
//Show Color Option Div When Click On Gear
   $(".gear-check").click(function()
      {
      $(".color-option").fadeToggle();
      });
//Change Theme Color
   var colorLi = $(".color-option ul li");
   colorLi
      .eq(0).css("backgroundColor","#E41B17").end()
      .eq(1).css("backgroundColor","#E426D5").end()
      .eq(2).css("backgroundColor","#009AFF").end()
      .eq(3).css("backgroundColor","#57ED3D").end()
      .eq(4).css("backgroundColor","#BA54FF");
   colorLi.click(function()
   {
      $("link[href*='theme']*").attr("href",$(this).attr("data-value"));
  // console.log($(this).attr("data-value"));
   });
});

// Loading Page
$(window).ready(function()
{
   
   $(".spinner").fadeOut(2000,
function(){
         $(this).parent().fadeOut(2000,
         function(){
                    $("body").css("overflow","auto");
                    $(this).remove(); 
                   });   
          });
});