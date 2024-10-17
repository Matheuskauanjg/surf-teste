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

// Função assíncrona para carregar produtos
async function carregarProdutos() {
    try {
        const response = await fetch('produtos.json');
        const produtos = await response.json();

        const containerProdutos = document.getElementById('produtos');
        containerProdutos.innerHTML = ''; // Limpa o conteúdo existente

        produtos.forEach(produto => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.setAttribute('data-categoria', produto.categoria);

            produtoDiv.innerHTML = `
                <a href="detalhes.html?nome=${encodeURIComponent(produto.nome)}&valor=${produto.valor}&imagem=${encodeURIComponent(produto.imagem)}&categoria=${produto.categoria}">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h4>${produto.nome}</h4>
                    <p>R$ ${produto.valor.toFixed(2)}</p>
                </a>
            `;
            containerProdutos.appendChild(produtoDiv);
        });
    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

document.addEventListener('DOMContentLoaded', carregarProdutos);

// Função para pesquisar produtos
function pesquisarProdutos() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');

    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector('h4').textContent.toLowerCase();
        if (nomeProduto.includes(query)) {
            produto.style.display = 'block';  // Exibe o produto se a pesquisa corresponder
        } else {
            produto.style.display = 'none';    // Oculta o produto se não corresponder
        }
    });
}

// Adiciona o evento de input ao campo de pesquisa
document.getElementById('search-bar').addEventListener('input', pesquisarProdutos);

// Função para o carrossel de banner
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 3000);
