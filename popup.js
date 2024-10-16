// Seleciona elementos
const cartBtn = document.getElementById('cart-link');
const cartPopup = document.getElementById('cart-popup');
const closeBtn = document.querySelector('.close-btn');
const cartItems = document.getElementById('cart-items');
const totalValue = document.getElementById('total-value');

// Variáveis para controle do carrinho
let total = 0;

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
    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `
        <img src="${imagem}" alt="${nome}">
        <p>${nome} - R$ ${valor.toFixed(2)}</p>
    `;

    // Adiciona o item ao carrinho
    cartItems.appendChild(item);

    // Atualiza o total
    total += valor;
    totalValue.textContent = `Total: R$ ${total.toFixed(2)}`;
    
    // Atualiza o texto do carrinho
    const cartLink = document.getElementById('cart-link');
    cartLink.textContent = `Carrinho (${cartItems.children.length})`;
    
    // Fecha o pop-up automaticamente
    cartPopup.style.display = 'none';
}
