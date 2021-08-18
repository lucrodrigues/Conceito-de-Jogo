let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')

function pular(){
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }

    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)
}

var testar = setInterval( function(){

    var topopersonagem = parseInt(
        window.getComputedStyle(personagem).getPropertyValue('top')
    )
        var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
        )

        if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topopersonagem >= 130){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você Perdeu COMI O CU DE QM LEU!!')
        }
}, 10)