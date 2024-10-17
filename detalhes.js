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
