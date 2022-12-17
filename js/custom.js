
    var icon = document.getElementById("icon");

    icon.onclick = function(){
        document.body.classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            icon.src = "images/sun.png"
        }else{
            icon.src = "images/moon.png"
        }
    }


    // add class navbarDark on navbar scroll
    const header = document.querySelector('.navbar');

    window.onscroll = function() {
        var top = window.scrollY;
        if(top >=100) {
            header.classList.add('bg');
        }
        else {
            header.classList.remove('bg');
        }
    }


    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 10){
            $(".backtotop a").fadeIn()
        }else{
            $(".backtotop a").fadeOut()
        }
    })

    $(".backtotop a").click(function(){
        $("html,body").animate({
            scrollTop:0
        },50)
    })



    var typed = new Typed(".auto-input", {
        strings:["Abu Raihan" ,"Web designer", "UI/UX Designer"],
        typeSpeed:100,
        backSpeed:100,
        loop: true,
    })


    var mixer = mixitup('.mixitup');





    let button = document.querySelector("batn a");
    dutton.addEventListener("click",()=>{
        const span = document.querySelector("a span");
        button.style.paddingRight = '10px';
        span.style.visibility ="visible";
        setTimeout(()=>{
            span.style.visibility="hidden";
            button.style.transition = ".3s ease-in-out";
            button.style.paddingRight = "0px";
        },3000);

    })