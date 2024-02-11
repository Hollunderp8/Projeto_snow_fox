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

function cadastro(){
    alert(`Em Breve`)
    //location.href = "cadastro.html";
}
function login(){
    alert(`Em Breve`)
    //location.href = "login.html";
}