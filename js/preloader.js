document.body.onload = function(){
    setTimeout(function(){
        let preloader = document.querySelector('.preloader-display');
        speed_anim = 400
        anime({
            targets: preloader,
            opacity: 0,
            duration: speed_anim,
            easing: 'linear'
        })
        setTimeout(function(){
            
            preloader.style.display = 'none';
        },speed_anim)
    },750)
}