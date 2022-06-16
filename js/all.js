
var fristName = document.getElementById('fristName'),
	lastName = document.getElementById('lastName'),
	email = document.getElementById('email'),
	phoneNumber = document.getElementById('phoneNumber'),
	password = document.getElementById('password'),
	confirmPass = document.getElementById('confirmpassword'),
	n = document.getElementsByTagName('input');


$(function()
{
	$(".center").slideDown(700);

	$(fristName).blur(function(){
		if (this.value == ""){
			$(this).css("border-color","#f86e6e");
		} else {
			$(this).css("border-color","green");
		}
	});

	$(lastName).blur(function(){
		if (this.value == ""){
			$(this).css("border-color","#f86e6e");
		} else {
			$(this).css("border-color","green");
		}
	});

	$(email).blur(function(){
		if (this.value == ""){
			$(this).css("border-color","#f86e6e");
		} else {
			$(this).css("border-color","green");
		}
	});

	$(phoneNumber).blur(function(){
		if (this.value == ""){
			$(this).css("border-color","#f86e6e");
		} else {
			$(this).css("border-color","green");
		}
	});

	$(password).blur(function(){
		if (this.value == ""){
			$(this).css("border-color","#f86e6e");
		} else {
			$(this).css("border-color","green");
		}
	});

	$(confirmpassword).blur(function(){
		if (this.value == ""){
			$(this).css("border-color","#f86e6e");
		} else {
			$(this).css("border-color","green");
		}
		if (this.value !== password.value){
			alert("The confirm password dosenot match");
		}
	});
    
    
        if (fristName.value == "" || lastName.value == "" || email.value == "" || password.value == "" || confirmPass.value == "" || phoneNumber.value == "" ){
            
            $("form").one("submit",function(e){
                e.preventDefault();
                $(fristName).css("border-color","#f86e6e");
                $(lastName).css("border-color","#f86e6e");
                $(email).css("border-color","#f86e6e");
                $(password).css("border-color","#f86e6e");
                $(confirmPass).css("border-color","#f86e6e");
                $(phoneNumber).css("border-color","#f86e6e");
                alert("ارجو ملئ جميع البيانات.");
            });
            
		}
        

    

});  






