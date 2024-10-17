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
}

// Função para adicionar um comentário
function adicionarComentario() {
    const comentarioTexto = document.getElementById('comentario-texto').value;
    if (comentarioTexto.trim()) {
        const comentarioDiv = document.createElement('div');
        comentarioDiv.textContent = comentarioTexto;
        document.getElementById('comentarios-container').appendChild(comentarioDiv);
        document.getElementById('comentario-texto').value = ''; // Limpa o campo de comentário
    }
}

// Carrega os detalhes do produto ao abrir a página
document.addEventListener('DOMContentLoaded', carregarDetalhes);

function adicionarAoCarrinho() {
    const nome = document.getElementById('produto-nome').textContent;
    const valor = parseFloat(document.getElementById('produto-preco').textContent.replace('R$ ', '').replace(',', '.'));
    const imagem = document.getElementById('produto-imagem').src;

    // Chama a função que adiciona ao carrinho no popup
    window.opener.adicionarAoCarrinho(nome, valor, imagem); // Adiciona no carrinho da loja principal
    alert(`${nome} foi adicionado ao carrinho!`); // Mensagem de confirmação
}

let comentarios = []; // Array para armazenar comentários

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
        alert('Por favor, escreva um comentário!');
    }
}

function atualizarComentarios() {
    const comentariosContainer = document.getElementById('comentarios-container');
    comentariosContainer.innerHTML = ''; // Limpa os comentários existentes

    comentarios.forEach((comentario, index) => {
        const comentarioDiv = document.createElement('div');
        comentarioDiv.classList.add('comentario');
        comentarioDiv.textContent = comentario;
        comentariosContainer.appendChild(comentarioDiv);
    });
}
