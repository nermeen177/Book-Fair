$(document).ready(function(){
$("#first").hover(
      function(){
         $("#num1,#num2,#num3").slideToggle();
          $("#first").animate({"height":"370px"});
    $("#second,#third").css("height",'110px');
          
            },
     function(){
          $("#num1,#num2,#num3").slideToggle();
           $("#first").animate({
               height:'110px'
           },500);
          
     });
$("#second").hover(
      function(){
         $(".num").slideToggle();
          $("#second").animate({
             
              height:'310px'
          });
    $("#first,#third").css("height",'110px');
          
          
          
            },
     function(){
          $(".num").slideToggle();
           $("#second").animate({
               height:'110px'
           },500);
          
     });
$("#third").hover(
      function(){
         $(".history").slideToggle();
          $("#third").animate({
             
              height:'310px'
          }
          );
          $("#first,#second").css("height",'110px');
          
          
            },
     function(){
          $(".history").slideToggle();
           $("#third").animate({
               height:'110px'
           },500);
          
     });
  $("#N-first").hover(
      function(){
         $(".tech").slideToggle();
          $("#N-first").animate({
             
              height:'310px'
          }
          );
    $("#N-second,#N-third").css("height",'110px');
          
          
            },
     function(){
          $(".tech").slideToggle();
           $("#N-first").animate({
               height:'110px'
           },500);
          
     });
$("#N-second").hover(
      function(){
         $(".social").slideToggle();
          $("#N-second").animate({
             
              height:'320px'
          }
          );
     $("#N-first,#N-third").css("height",'110px');
          
          
            },
     function(){
          $(".social").slideToggle();
           $("#N-second").animate({
               height:'110px'
           },500);
          
     });
$("#N-third").hover(
      function(){
         $(".lang").slideToggle();
          $("#N-third").animate({
             
              height:'240px'
          }
          );
    $("#N-second,#N-first").css("height",'110px');
          
          
            },
     function(){
          $(".lang").slideToggle();
           $("#N-third").animate({
               height:'110px'
           },500);
          
     });
 $("#M-first").hover(
      function(){
         $(".stories").slideToggle();
          $("#M-first").animate({
             
              height:'310px'
          }
          );
    $("#M-second,#M-third").css("height",'110px');
          
          
            },
     function(){
          $(".stories").slideToggle();
           $("#M-first").animate({
               height:'110px'
           },500);
          
     });
$("#M-second").hover(
      function(){
         $(".brain").slideToggle();
          $("#M-second").animate({
             
              height:'310px'
          }
          );
    $("#M-first,#M-third").css("height",'110px');
          
          
            },
     function(){
          $(".brain").slideToggle();
           $("#M-second").animate({
               height:'110px'
           },500);
          
     });
$("#M-third").hover(
      function(){
         $(".true").slideToggle();
          $("#M-third").animate({
             
              height:'240px'
          }
          );
    $("#M-second,#M-first").css("height",'110px');
          
          
            },
     function(){
          $(".true").slideToggle();
           $("#M-third").animate({
               height:'110px'
           },500);
          
     });
$("#D-first").hover(
      function(){
         $(".sport").slideToggle();
          $("#D-first").animate({
             
              height:'240px'
          }
          );
    $("#D-second,#D-third").css("height",'110px');
          
          
            },
     function(){
          $(".sport").slideToggle();
           $("#D-first").animate({
               height:'110px'
           },500);
          
     });
$("#D-second").hover(
      function(){
         $(".lite").slideToggle();
          $("#D-second").animate({
             
              height:'310px'
          }
          );
    $("#D-third,#D-first").css("height",'110px');
          
          
            },
     function(){
          $(".lite").slideToggle();
           $("#D-second").animate({
               height:'110px'
           },500);
          
     });
$("#D-third").hover(
      function(){
         $(".islamic").slideToggle();
          $("#D-third").animate({
             
              height:'310px'
          }
          );
    $("#D-second,#D-first").css("height",'110px');
          
          
            },
     function(){
          $(".islamic").slideToggle();
           $("#D-third").animate({
               height:'110px'
           },500);
          
     });
$("#S-first").hover(
      function(){
         $(".strange").slideToggle();
          $("#S-first").animate({
             
              height:'180px'
          }
          );
    $("#S-second,#S-third").css("height",'110px');
          
          
            },
     function(){
          $(".strange").slideToggle();
           $("#S-first").animate({
               height:'110px'
           },500);
          
     });
$("#S-second").hover(
      function(){
         $(".learning").slideToggle();
          $("#S-second").animate({
             
              height:'240px'
          }
          );
    $("#S-third,#S-first").css("height",'110px');
          
          
            },
     function(){
          $(".learning").slideToggle();
           $("#S-second").animate({
               height:'110px'
           },500);
          
     });
$("#S-third").hover(
      function(){
         $(".kids").slideToggle();
          $("#S-third").animate({
             
              height:'240px'
          }
          );
    $("#S-second,#S-first").css("height",'110px');
          
          
            },
     function(){
          $(".kids").slideToggle();
           $("#S-third").animate({
               height:'110px'
           },500);
          
     });


});