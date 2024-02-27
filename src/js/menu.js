const item = document.querySelectorAll(`.item-menu`)

const pag = document.querySelectorAll('#pag');

item.forEach((item, indice) =>{
    item.addEventListener(`click`, () => {
        const itemAtv = document.querySelector('.ativo.item-menu')
        const pagatv = document.querySelector('.ativo#pag')
        itemAtv.classList.remove('ativo')
        item.classList.add('ativo')
        pag[indice].classList.add('ativo')
        pagatv.classList.remove('ativo')
    })
})

function login(){
    confirm(`Olá! Aqui é uma área dedicada a membros da equipe. Sera liberado para o público em breve.`)
    location.href = "./src/html/login.html";
}