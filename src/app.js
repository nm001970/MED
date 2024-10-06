const tabMenu = document.querySelector('#tab-btn').children;
const tabMenuItem = document.querySelector('.portfolio-gallry').children;
for(let i =0; i<tabMenu.length;i++){
    tabMenu[i].addEventListener('click', function(){
        for(let j=0;j<tabMenu.length;j++){
            tabMenu[j].classList.remove('activ');
        }
        this.classList.add('activ');
        const target = this.getAttribute('data-target');

        for(let k=0;k<tabMenuItem.length;k++){
            tabMenuItem[k].style.display='none';
           if(target == tabMenuItem[k].getAttribute('data-id')){
                tabMenuItem[k].style.display='block';
            }
            if(target == 'all'){tabMenuItem[k].style.display='block';}
        }
    })
}

// lighbox

const closeLightBox= document.querySelector('.close-lightbox');
const lightBox= document.querySelector('.lightbox');
const lightBoxImg= lightBox.querySelector('img');
const lightBoxA = lightBox.querySelector('a')

lightBox.addEventListener('click',function(){
    if(event.target != lightBoxImg){
        lightBox.classList.remove('show');
    lightBox.classList.add('hide');
    }
})

closeLightBox.addEventListener('click', function(){
    lightBox.classList.add('hide');
    lightBox.classList.remove('show');
})

const gallry =document.querySelector('.portfolio-gallry');
const gallryItem = gallry.querySelectorAll('.item-p');


gallryItem.forEach((element)=> {
    element.querySelector('span').addEventListener('click',function(){
        lightBox.classList.add('show');
        lightBox.classList.remove('hide');
        lightBoxImg.src= element.querySelector('img').getAttribute('src');
        lightBoxA.href = element.querySelector('a').getAttribute('href');
    })
})

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});
