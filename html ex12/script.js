fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(jsonArray => {
        const tbody = document.getElementById('produtos-tbody');
        jsonArray.forEach((produto, index) => {
            const row = document.createElement('tr');
            const cellNome = document.createElement('td');
            const cellImagem = document.createElement('td');
            const url = `produto.html?id=${produto.id}`;
            cellNome.innerHTML = '<a style="text-decoration:none" href="' + url + '">' + produto.title + '</a>';
            cellImagem.innerHTML = '<img src="' + produto.image + '" width="100">';
            row.appendChild(cellNome);
            row.appendChild(cellImagem);
            tbody.appendChild(row);
        });
    });