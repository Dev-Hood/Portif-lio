/* =============INTERAÇÃO FORMAS FLUIDAS========================================= */
const forma = document.getElementsByClassName('fluid')
const container = document.querySelector('.tela-inicio')

container.addEventListener('mousemove',(e)=>{
    let eixoX = (window.innerWidth/2-e.pageX)/50
    forma[0].style.transform = `translate(100px, 100px) skew(${eixoX}deg) scale(1.5)`;
    forma[1].style.transform = `translate(100px, 100px) skew(${eixoX}deg) `;
    forma[2].style.transform = `rotate(${-eixoX*3}deg)`
    forma[3].style.transform = `rotate(${-eixoX*8}deg)`
    forma[4].style.transform = `rotate(${-eixoX*4}deg)`
})
container.addEventListener('mouseleave',()=>{
    forma[0].style.transform = `translate(100px, 100px) skew(${0}deg) scale(1.5)`;
    forma[1].style.transform = `translate(100px, 100px) skew(${0}deg) `;
})

/* =============ANIMAÇÃO EFEITO DIGITANDO========================================= */
const apresentacao = document.getElementById("apresentacao");

(()=>{
    let texto = apresentacao.innerText.split('');
    apresentacao.innerHTML='';
    texto.forEach((letra,i)=>{
            setTimeout(()=>apresentacao.innerHTML+=letra,40*i)
    })
})();