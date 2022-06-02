$('.d-slide').slick({
    arrows: false,
    autoplay: true
});

let toggles = document.getElementsByClassName('d-toggle');
let contentDiv = document.getElementsByClassName('d-content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            icons[i].classList.remove('fa-angle-down');
            icons[i].classList.add('fa-angle-up');
        }
        else{
            contentDiv[i].style.height = "0px";
            icons[i].classList.remove('fa-angle-up');
            icons[i].classList.add('fa-angle-down');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                icons[j].classList.remove('fa-angle-up');
                icons[j].classList.add('fa-angle-down');
            }
        }
    });
}

let basic = document.querySelector(".basic");
let standard = document.querySelector(".standard");
let premium = document.querySelector(".premium");
 
let text1 = document.querySelector(".span1");
let text2 = document.querySelector(".span2");
let text3 = document.querySelector(".span3");
let text4 = document.querySelector(".span4");
let p = document.querySelector(".ps");
let prix = document.querySelector(".price")

basic.addEventListener("click", elmBasic, false); 
standard.addEventListener("click", elmStandard, false);
premium.addEventListener("click", elmPremium, false);

function elmBasic(){
    text1.innerHTML = "(BASIQUE) Idéal pour les débutants";
    text2.innerHTML = "US$25";
    p.innerHTML = "Concevez une boutique Shopify sur un thème premium avec plus de 10 produits les mieux notés";
    prix.innerHTML = "25";
    document.querySelector(".basic").style.borderBottom = "3px solid #18c47c";
    document.querySelector(".basic").style.color = "#18c47c";
    document.querySelector(".standard").style.borderBottom = "1px solid #aaa";
    document.querySelector(".standard").style.color = "#000";
    document.querySelector(".premium").style.borderBottom = "1px solid #aaa";
    document.querySelector(".premium").style.color = "#000";
}

function elmStandard(){
    text1.innerHTML = "GOLD";
    text2.innerHTML = "US$50";
    p.innerHTML = "Concevez une boutique Shopify sur un thème premium avec plus de 25 produits les mieux notés";
    prix.innerHTML = "25";
    document.querySelector(".basic").style.borderBottom = "1px solid #aaa";
    document.querySelector(".basic").style.color = "#000";
    document.querySelector(".standard").style.borderBottom = "3px solid #18c47c";
    document.querySelector(".standard").style.color = "#18c47c";
    document.querySelector(".premium").style.borderBottom = "1px solid #aaa";
    document.querySelector(".premium").style.color = "#000";

}

function elmPremium(){
    text1.innerHTML = "PRO";
    text2.innerHTML = "US$70";
    p.innerHTML = "Concevez une boutique Shopify sur un thème premium avec plus de 50 produits les mieux notés";
    prix.innerHTML = "50";
    document.querySelector(".basic").style.borderBottom = "1px solid #aaa";
    document.querySelector(".basic").style.color = "#000";
    document.querySelector(".standard").style.borderBottom = "1px solid #aaa";
    document.querySelector(".standard").style.color = "#000";
    document.querySelector(".premium").style.borderBottom = "3px solid #18c47c";
    document.querySelector(".premium").style.color = "#18c47c";
} 


const btn = document.querySelector(".btnTop");

btn.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});