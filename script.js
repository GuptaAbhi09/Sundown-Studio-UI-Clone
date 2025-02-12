var fixed=document.querySelector(".fixed-image");
var features=document.querySelector(".features");
var featuresection=document.querySelectorAll(".featured-section");
var pahlah1=document.querySelector(".pahlah1 h1");
var pahla=document.querySelector(".pahlah1");
var dusrah1=document.querySelector(".dusrah1 h1");
var dusra=document.querySelector(".dusrah1");
var teesrah1=document.querySelector(".teesrah1 h1");
var teesra=document.querySelector(".teesrah1");
var image1=document.querySelector(".image1");
var image2=document.querySelector(".image2");
var image3=document.querySelector(".image3");
var pahlap=document.querySelector(".pahlap");
var dusrap=document.querySelector(".dusrap");
var teesrap=document.querySelector(".teesrap");

fixed.addEventListener('mouseenter',function(){
    fixed.style.display="block";
})
featuresection.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        fixed.style.display="block";
        var image=e.getAttribute("dataimage")
        fixed.style.backgroundImage = `url(${image})`;
        fixed.style.backgroundSize = "cover";
        fixed.style.backgroundPosition = "center";
    })
    e.addEventListener("mouseleave",function(){
        fixed.style.display="none";
    })
})

dusrah1.addEventListener("click",function(){
    dusrah1.style.color="#fff";
    dusra.style.marginLeft="0";
    pahla.style.marginLeft="2vw";
    pahlah1.style.color="#504a45";
    image1.style.display="none";
    image2.style.display="block";
    pahlap.style.display="none";
    dusrap.style.display="block";
})
teesrah1.addEventListener("click",function(){
    teesrah1.style.color="#fff";
    teesra.style.marginLeft="0";
    dusra.style.marginLeft="2vw";
    dusrah1.style.color="#504a45";
    image2.style.display="none";
    image3.style.display="block";
    dusrap.style.display="none";
    teesrap.style.display="block";
})
pahlah1.addEventListener("click",function(){
    pahlah1.style.color="#fff";
    pahla.style.marginLeft="0";
    teesra.style.marginLeft="2vw";
    teesrah1.style.color="#504a45";
    image3.style.display="none";
    image1.style.display="block";
    teesrap.style.display="none";
    pahlap.style.display="block";
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
