/*global $*/
var email = document.getElementById("email"),
    pass  = document.getElementById("pass");
$(function(){
    $("#center").fadeToggle(500);
    
    if (email.value == "" || pass.value == "" ){
            
            $("form").one("submit",function(e){
                e.preventDefault();
                $(email).css("border-color","#f86e6e");
                $(pass).css("border-color","#f86e6e");
                alert("ارجو ملئ جميع البيانات.");
            });
            
		}
});