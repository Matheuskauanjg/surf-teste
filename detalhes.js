// Variável para armazenar comentários
let comentarios = [];

// Função para obter os parâmetros da URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        nome: params.get('nome'),
        valor: params.get('valor'),
        imagem: params.get('imagem'),
        categoria: params.get('categoria')
    };
}

// Carrega as informações do produto
function carregarDetalhes() {
    const { nome, valor, imagem } = getQueryParams();

    document.getElementById('produto-nome').textContent = nome;
    document.getElementById('produto-preco').textContent = `R$ ${parseFloat(valor).toFixed(2)}`;
    document.getElementById('produto-imagem').src = imagem;

    // Atualiza os comentários ao carregar o produto
    atualizarComentarios();
}

// Função para adicionar um comentário
function adicionarComentario() {
    const comentarioTexto = document.getElementById('comentario-texto').value.trim();
    
    if (comentarioTexto) {
        // Adiciona o comentário ao array
        comentarios.push(comentarioTexto);
        // Atualiza a visualização dos comentários
        atualizarComentarios();
        // Limpa o campo de texto
        document.getElementById('comentario-texto').value = '';
    } else {
        alert('Por favor, escreva um comentário!'); // Alerta se o campo estiver vazio
    }
}

// Função para atualizar a lista de comentários na página
function atualizarComentarios() {
    const comentariosContainer = document.getElementById('comentarios-container');
    comentariosContainer.innerHTML = ''; // Limpa os comentários existentes

    // Adiciona cada comentário ao container
    comentarios.forEach((comentario) => {
        const comentarioDiv = document.createElement('div');
        comentarioDiv.classList.add('comentario');
        comentarioDiv.textContent = comentario;
        comentariosContainer.appendChild(comentarioDiv);
    });
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho() {
    const nome = document.getElementById('produto-nome').textContent;
    const valor = parseFloat(document.getElementById('produto-preco').textContent.replace('R$ ', '').replace(',', '.'));
    const imagem = document.getElementById('produto-imagem').src;

    // Chama a função que adiciona ao carrinho no popup
    window.opener.adicionarAoCarrinho(nome, valor, imagem); // Adiciona no carrinho da loja principal
    alert(`${nome} foi adicionado ao carrinho!`); // Mensagem de confirmação
}

// Carrega os detalhes do produto ao abrir a página
document.addEventListener('DOMContentLoaded', carregarDetalhes);
