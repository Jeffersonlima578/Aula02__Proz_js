
// Capturando os elementos h1 e a
let titulo = document.getElementById('titulo')
let link = document.querySelector('a');


// Capturando o elemento <title>
let tituloPagina = document.querySelector('title');


// Alterando o valor dentro da tag <title>
tituloPagina.innerText = 'InnerText e HTML';


// Adicionando conteúdo textual neles
titulo.innerText = 'Temas estudados'
link.innerText = 'Site da Proz'


// Capturando os elementos ul e ol
let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')


// Adicionando mais itens à lista não ordenada dinamicamente
for (let i = 0; i < linguagens.length; i++) 
{
// Criando um novo elemento li para cada linguagem
let novoItem = document.createElement('li');
// Adicionando o texto da linguagem ao elemento li
novoItem.innerText = linguagens[i];
// Adicionando o novo item à lista
listaNaoOrdenada.appendChild(novoItem);
};

// Adicionando três itens com links na lista ordenada
listaOrdenada.innerHTML = `
<li><a href="https://about.meta.com/">Meta</a></li>

