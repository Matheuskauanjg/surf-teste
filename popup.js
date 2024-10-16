// Seleciona elementos
const cartBtn = document.getElementById('cart-link');
const cartPopup = document.getElementById('cart-popup');
const closeBtn = document.querySelector('.close-btn');

// Função para abrir o pop-up do carrinho
cartBtn.addEventListener('click', () => {
    cartPopup.style.display = 'flex';
});

// Função para fechar o pop-up
closeBtn.addEventListener('click', () => {
    cartPopup.style.display = 'none';
});

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(nome, valor) {
    const cartItems = document.getElementById('cart-items');
    const cartLink = document.getElementById('cart-link');
    
    const item = document.createElement('div');
    item.classList.add('cart-item');
    item.innerHTML = `<p>${nome} - R$ ${valor.toFixed(2)}</p>`;
    
    cartItems.appendChild(item);
    cartLink.textContent = `Carrinho (${cartItems.children.length})`;
    
    // Fecha o pop-up automaticamente
    cartPopup.style.display = 'none';
}
