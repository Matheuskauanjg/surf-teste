// Seleciona elementos
const cartBtn = document.getElementById('cart-link');
const cartPopup = document.getElementById('cart-popup');
const closeBtn = document.querySelector('.close-btn');
const cartItems = document.getElementById('cart-items');
const cartLink = document.getElementById('cart-link');
let totalValue = 0;

// Função para abrir o pop-up do carrinho
cartBtn.addEventListener('click', () => {
    cartPopup.style.display = 'flex';
});

// Função para fechar o pop-up
closeBtn.addEventListener('click', () => {
    cartPopup.style.display = 'none';
});

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(nome, valor, imagem) {
    // Cria o item no carrinho com imagem, nome e valor
    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `
        <img src="${imagem}" alt="${nome}">
        <p>${nome}</p>
        <p>R$ ${valor.toFixed(2)}</p>
    `;
    
    // Adiciona o item ao pop-up
    cartItems.appendChild(item);
    
    // Atualiza o número de itens no carrinho
    cartLink.textContent = `Carrinho (${cartItems.children.length})`;

    // Soma o valor do item ao total
    totalValue += valor;
    atualizarValorTotal();
}

// Função para atualizar o valor total no pop-up
function atualizarValorTotal() {
    let totalDisplay = document.getElementById('total-value');
    
    if (!totalDisplay) {
        // Cria o elemento de total se não existir
        totalDisplay = document.createElement('p');
        totalDisplay.id = 'total-value';
        cartItems.appendChild(totalDisplay);
    }
    
    totalDisplay.textContent = `Total: R$ ${totalValue.toFixed(2)}`;
}
