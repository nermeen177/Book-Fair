$(".li1").on("click",function(){
    $(this).css({
        background: "#00C3DA",
        color: "#ffffff",
        boxShadow: "8px 8px 13px #3f3f3f"
    });
    $(".li2").css({
        backgroundColor:"#f6f6f6",
        color: "#1F1142",
         boxShadow: "0px 0px 0px white"
    });
});
$(".li2").on("click",function(){
    $(this).css({
        background: "#00C3DA",
        color: "#ffffff",
        boxShadow: "8px 8px 13px #3f3f3f"
    });
    $(".li1").css({
        backgroundColor:"#f6f6f6",
        color: "#1F1142",
         boxShadow: "0px 0px 0px white"
    });
});
$(document).ready(function(){
    $(".center").slideDown(800);
});