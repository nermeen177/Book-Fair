//global $, Document console
$(Document).ready(function(){
      var name=document.getElementById('bookName');
      var author=document.getElementById('bookAuthor');
    var publish=document.getElementById('publishing');
var sel=document.getElementById('select');
var sel2=document.getElementById('select2');
var sub=document.getElementById('submit');
    
   
    $(".submit").hover(function(){
        $(this).css({
            
    "background-color":"rgba(128, 128, 128, 0.2)",
    "color":"black"});
        
    },
     function(){
        $(this).css({"background-color":"#28a745","color":"white"});
   
    });

   $(".input1").focus(function(){
       $(this).css({
            borderRadius:"20px",
            borderStyle:"solid",
           
       });
   });
 
   
    $(name).on("blur",function(){
    if(this.value == ""){
    $("#bookName").attr({"placeHolder":"من فضلك قم بملئ الحقل"});
            $(this).css({
                "border-radius":"10px",
                "border-bottom-style":"solid",
                "border-bottom-color":"red"
                
            });
        
            }
        else{
            $(this).css("border-bottom-color","rgba(128, 128, 128, 0.69)");
        }
         });
 $(author).on("blur",function(){
    if(this.value == ""){
    $("#bookAuthor").attr({"placeHolder":"من فضلك قم بملئ الحقل"});
            $(this).css({
                "border-radius":"10px",
                "border-bottom-style":"solid",
                "border-bottom-color":"red"
                
            });
        
            }
        else{
            $(this).css("border-bottom-color","rgba(128, 128, 128, 0.69)");
        }
         });
$(publish).on("blur",function(){
    if(this.value == ""){
    $("#publishing").attr({"placeHolder":"من فضلك قم بملئ الحقل"});
            $(this).css({
                "border-radius":"10px",
                "border-bottom-style":"solid",
                "border-bottom-color":"red"
                
            });
    
            }
        else{
            $(this).css("border-bottom-color","rgba(128, 128, 128, 0.69)");
        
        }
         });
   
 $(sel).blur(function(){
     "use strict";
     if(sel.value == 1){
         alert("برجاء اختيار نوع الكتاب من القائمة ادناه");
     }
 });
 $(sel2).blur(function(){
     "use strict";
     if(sel2.value == 1){
         alert("برجاء اختيار تصنيفات الكتاب من القائمة ادناه");
     }
 });
   $(".file").click(function(){
       if(this.files.length == 0){
          alert( "You must choose a file");
       }
       else
           alert( "Some file is selected"); 
   });
if(publish.value == "" || $(".file").files.length== 0 || sel2.value == 1 || sel.value == 1 || author.value == "" || name.value == ""){
    $("form").one("submit",function(e){
          e.preventDefault();
           alert("you should fill the form");
                });
       }
    else{
            alert("sent succesfully");
        }
            
});
