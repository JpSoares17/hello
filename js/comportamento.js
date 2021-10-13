let contador_lista = 0
let contador_compra = 0

function compra(event) {
    contador_compra += 1
    atualizarCabecalho()
}


function atualizarCabecalho(){
    const numero_item = document.querySelector('#itens_lista')
    const numero_comprado = document.querySelector('#itens_comprados')

    numero_item.innerText = contador_lista
    numero_comprado.innerText = contador_compra
}

function adicionarItem(){
    contador_lista += 1
    atualizarCabecalho()
    const item = document.querySelector('#item')
    const quantidade = document.querySelector('#quantidade')
    const itens = document.querySelector('#itens')

    const linha = document.createElement('li')
    const produto = document.createElement('span')
    const descricao = document.createElement('span')
    const botao = document.createElement('button')
    const botao_compra = document.createElement('button')

    produto.innerText = item.value
    descricao.innerText = quantidade.value
    botao.innerText = 'Remover...'
    botao.onclick = removerItem
    botao_compra.innerText = 'Comprar'
    botao_compra.addEventListener('click', compra)

    linha.appendChild(produto)
    linha.appendChild(descricao)
    linha.appendChild(botao)
    linha.appendChild(botao_compra)

    itens.appendChild(linha)

    item.value = ''
    quantidade.value = ''
    item.focus()
    quantidade.focus()
}

function removerItem(event){
    const item = event.target.parentNode
    item.remove()
    contador_lista -= 1
    atualizarCabecalho()
}
    
function main(){
    atualizarCabecalho()
    const btn_adicionar = document.querySelector('#btn_adicionar')
    btn_adicionar.addEventListener('click', adicionarItem)
}

main()