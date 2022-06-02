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
    document.querySelector(".basic").classList.add("activebox");
    text1.innerHTML = "(BASIQUE) Idéal pour les débutants";
    text2.innerHTML = "US$25";
    p.innerHTML = "Concevez une boutique Shopify sur un thème premium avec plus de 10 produits les mieux notés";
    prix.innerHTML = "25";
    document.querySelector(".premium").classList.remove("activebox");
}

function elmStandard(){
    text1.innerHTML = "GOLD";
    text2.innerHTML = "US$50";
    p.innerHTML = "Concevez une boutique Shopify sur un thème premium avec plus de 25 produits les mieux notés";
    prix.innerHTML = "25"

}

function elmPremium(){
    text1.innerHTML = "PRO";
    text2.innerHTML = "US$70";
    p.innerHTML = "Concevez une boutique Shopify sur un thème premium avec plus de 50 produits les mieux notés";
    prix.innerHTML = "50"
} 