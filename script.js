let menu_link = document.querySelectorAll('.menu_link');
let ac = document.querySelectorAll('.style_activities');

anime({
    targets: '.style_activities',
    opacity: 1,
    delay: anime.stagger(200, {start: 200})
})
anime({
    targets: '.anime_item_menu',
    opacity: 1,
    delay: anime.stagger(200, {start: 200})
})
anime({
    targets: 'section',
    opacity: 1,
    delay: anime.stagger(100, {start: 0})
})

for(let i = 0; menu_link.length > i; i++){
    $(menu_link[i]).mouseenter(function(){
        anime({
            targets: this,
            color: '#cf3ad4',
            duration: 100,
            easing: 'linear',
        })
    }).mouseleave(function(){
        anime({
            targets: this,
            color: 'rgb(60, 60, 60)',
            duration: 100,
            easing: 'linear',
        })
    })  
}
for(let i = 0; ac.length > i; i++){ 
    $(ac[i]).mouseenter(function(){
        anime({
            targets: this,
            scale: 1.05,
            duration: 100,
            easing: 'linear',
        })
    }).mouseleave(function(){
        anime({
            targets: this,
            scale: 1,
            duration: 100,
            easing: 'linear',
        })
    })
}