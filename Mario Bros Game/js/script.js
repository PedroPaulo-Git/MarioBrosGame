const mario = document.querySelector('.mario');
const canon = document.querySelector('.canon');
const cloud = document.querySelector('.cloud');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    },500);
}
const loop = setInterval(()=> {

    

    const canonPosition = canon.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px','')

    if (canonPosition <= 120 && canonPosition > 0 && marioPosition <80 ){
        canon.style.animation = 'none';
        canon.style.left = `${canonPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        

        mario.src = "img/over.png";
        mario.style.marginLeft = '10px'

        clearInterval(loop);

    }

},10);

document.addEventListener('keydown',jump);
