window.onload = function(){
    $('.menu>ul>li>ul>li').hide();
    $('.fake').hide();
    
    $('.menu').hover(()=>{
        $('.menu>ul>li>ul>li').stop().slideDown();
        $('.fake').stop().slideDown()
    },()=>{
        $('.menu>ul>li>ul>li').stop().slideUp();
        $('.fake').stop().slideUp()
    }
    );
    var slide = $(".slide > img");
    var sno = 0;
    var eno = slide.lenght - 1;

    var slide = $(".slide > img");
    var sno = 0;
    var eno = slide.length - 1;
    setInterval(function(){
        $(slide[sno]).animate({
            top:"100%"
        },1000,function(){
            $(this).css({top:"-100%"});
        });
        sno++;
        if(sno > eno) sno = 0;
        $(slide[sno]).animate({
            top:"0"
        },1000);

    },3000);
}