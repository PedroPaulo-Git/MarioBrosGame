document.addEventListener('DOMContentLoaded', function () {
    const gameover = document.querySelector('.imgGameover')
    const buttonreiniciar = document.querySelector('.reiniciar')
    const floor = document.querySelector('.floor');
    const mario = document.querySelector('.mario');
    const canon = document.querySelector('.canon');
    const cloud = document.querySelector('.cloud');

let loop;
buttonreiniciar.addEventListener('click', reiniciar);
    function reiniciar() {
        floor.style.animation = ''; 
        canon.style.animation = '';
        canon.style.left = '';
        mario.style.animation = '';
        mario.style.bottom = '';
        cloud.style.animation = ''; 
        mario.src = "img/gifmario.gif";
        mario.style.marginLeft = '0px'; 
    console.log(loop)
    console.log(setInterval)
    console.log(jogo)   
    clearInterval(loop);
    loop = setInterval(jogo, 10); 

    
   }

    const jump = () => {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }


    function jogo () {


        const floorPosition = +window.getComputedStyle(floor).left.replace('px', '')
        const canonPosition = canon.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
        const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '')
        buttonreiniciar.style.display = 'none';
        gameover.style.display = 'none';
        console.log(loop)
        if (canonPosition <= 120 && canonPosition > 0 && marioPosition < 80) {
            
            floor.style.animation = 'none';
            floor.style.left = `${floorPosition}px`;

            canon.style.animation = 'none';
            canon.style.left = `${canonPosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            cloud.style.animation = 'none';
            cloud.style.left = `${cloudPosition}px`;

            mario.src = "img/over.png";
            canon.style.marginLeft = '10px'

            buttonreiniciar.addEventListener('click', reiniciar);
            buttonreiniciar.style.display = 'block';
            gameover.style.display = 'flex'
            


            clearInterval(loop);
           

        }

    };
    loop = setInterval(jogo, 10);
    document.addEventListener('keydown', jump);

});