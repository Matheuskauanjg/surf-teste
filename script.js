// Função para filtrar produtos
document.querySelectorAll('.categorias a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const categoria = event.target.getAttribute('data-categoria');
        filtrarProdutos(categoria);
    });
});

function filtrarProdutos(categoria) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        if (categoria === 'all' || produto.getAttribute('data-categoria') === categoria) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Carrega os produtos
async function carregarProdutos() {
    try {
        const response = await fetch('produtos.json');
        const produtos = await response.json();

        const containerProdutos = document.getElementById('produtos');
        containerProdutos.innerHTML = '';

        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.setAttribute('data-categoria', produto.categoria);

            produtoDiv.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}">
                <h4>${produto.nome}</h4>
                <p>R$ ${produto.valor.toFixed(2)}</p>
                <button class="buy-btn" onclick="adicionarAoCarrinho('${produto.nome}', ${produto.valor}, '${produto.imagem}')">Adicionar ao Carrinho</button>
            `;
            containerProdutos.appendChild(produtoDiv);
        });
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

document.addEventListener('DOMContentLoaded', carregarProdutos);
