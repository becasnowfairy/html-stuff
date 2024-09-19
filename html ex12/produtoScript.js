const searchParams = new URLSearchParams(window.location.search);
let id = searchParams.get('id');
fetch('https://fakestoreapi.com/products/' + id)
    .then(response => response.json())
    .then(produto => {
        const titulo = document.getElementById('produto-titulo');
        const descricao = document.getElementById('produto-descricao');
        const preco = document.getElementById('produto-preco');
        const categoria = document.getElementById('produto-categoria');
        const imagem = document.getElementById('produto-imagem');
        titulo.textContent = produto.title;
        descricao.textContent = produto.description;
        var options = { style: 'currency', currency: 'USD' };
        var formatter = new Intl.NumberFormat('en-US', options);
        preco.textContent = 'Preço: ' + formatter.format(produto.price);
        categoria.textContent = 'Categoria: ' + produto.category;
        imagem.src = produto.image;

        const voltarButton = document.getElementById('voltar-button');
        voltarButton.addEventListener('click', () => {
            window.location.href = 'produtos.html';
        });
    });