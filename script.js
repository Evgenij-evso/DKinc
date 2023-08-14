let menu_link = document.querySelectorAll('.menu_link');
let ac = document.querySelectorAll('.style_activities');

let previes_text = document.querySelector('.previes_text')
let span_previews_text = document.querySelector('.span_previews_text');

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
        previes_text.style.display = 'flex'
        if(i == 0){
            span_previews_text.textContent = 'Второй полноформатный альбом DK, вышедший 21 Августа 2020 года. Также, это второй альбом Дани, который он написал в стиле русского Фольклора с примесью Энигмы.'
        }
        else if(i == 1){
            span_previews_text.textContent = 'Интересный факт, изначально альбом был готов ещё летом 2018 года, но Даня передумал его выпускать и выпустил только в июне 2019 года.'
        }
        else if(i == 2){
            span_previews_text.textContent = 'Мой второй любимый альбом DK, вышедший 24 Cентебря 2017 года.'
        }
        else if(i == 3){

            span_previews_text.textContent = 'Пародийные треки, Дисы и треки написаные в рубрике, на канале Дани Кашена - DkIncc'
        }

        anime({
            targets: this,
            scale: 1.05,
            duration: 100,
            easing: 'linear',
        })
    }).mouseleave(function(){
        previes_text.style.display = 'none'
        anime({
            targets: this,
            scale: 1,
            duration: 100,
            easing: 'linear',
        })
    })
}
