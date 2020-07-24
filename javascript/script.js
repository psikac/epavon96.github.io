function scrollto(div)
{
    var navHeight= 0
    if(screen.width>768)
    {
        navHeight = 65.2;
    }
    else
    {
        navHeight = 55.6;
    }
    console.log(div);
    $('html,body').animate(
    {
        scrollTop: $("#"+div).offset().top - navHeight
    },'slow');
}

$(document).ready(function(){
    /*
    var links = document.getElementsByClassName("nav-link-text");
    for (var i = 0; i<links.length;i++) {
        var name = links[i].innerHTML.toLocaleLowerCase();
        console.log(name);
        links[i].addEventListener("click",function(){
            scrollto(name);
        },false);
    }*/

    //var homeLink = document.querySelector("#home-link");
    var aboutLink = document.querySelector("#about-link");
    var contactLink = document.querySelector("#contact-link");
    var galleryLink = document.querySelector("#gallery-link");
    //homeLink.addEventListener("click",function(){scrollto(homeLink.innerHTML.toLocaleLowerCase())});
    aboutLink.addEventListener("click",function(){scrollto(aboutLink.innerHTML.toLocaleLowerCase())});
    contactLink.addEventListener("click",function(){scrollto(contactLink.innerHTML.toLocaleLowerCase())});
    galleryLink.addEventListener("click",function(){scrollto(galleryLink.innerHTML.toLocaleLowerCase())});

    var button = document.getElementById("goToTop");

    window.onscroll = function(){scrollShowButton()}

    function scrollShowButton()
    {
        if(document.body.scrollTop>40 || document.documentElement.scrollTop>40)
        {
            $("#goToTop").fadeIn();
        }
        else
        {
            $("#goToTop").fadeOut();
        }
    }

    function scrollToTop()
    {
        console.log("nesto");
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    button.addEventListener("click",function(){scrollToTop();},false);
});
