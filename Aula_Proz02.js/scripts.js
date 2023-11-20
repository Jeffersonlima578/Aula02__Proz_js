

window.addEventListener('load', function() {

        var titulo = document.getElementById('titulo');

        var listaNaoOrdenada = document.querySelector('ul');

        var link = document.getElementById('link'); 

        var listaOrdenada = document.getElementById('lista-ordenada');





    titulo.innerText = 'Título'; link.innerText = 'Proz Educação';

    listaNaoOrdenada.innerHTML = 'Item 1 Item 2 Item 3';

    listaOrdenada.innerHTML = 'Site 1 ' + ' Site 2 ' + ' Site 3';




}); 