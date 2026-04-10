let filmes = [];  // Array para armazenar os filmes.

// document: Representa a página HTML carregada no navegador.
// getElementById('id'): Encontra um elemento HTML pelo seu ID único.
// .addEventListener('evento', funcao): Anexa uma função para ser executada quando um evento (ex: 'click') ocorre no elemento.

// Cadastro
document.getElementById('btnCadastrar').addEventListener('click', cadastrarFilme);

// Filtros
document.getElementById('btnFiltrarClassificacao').addEventListener('click', filtrarClassificacao);
document.getElementById('btnFiltrarAno').addEventListener('click', filtrarAno);

function cadastrarFilme() {

    let titulo = document.getElementById('titulo').value;
    let ano = document.getElementById('ano').value;
    let classificacao = document.getElementById('classificacao').value;

    if (titulo === "" || ano === "" || classificacao === "") {
        alert("Preencha todos os campos");
        return;
    }

    let filme = {
        titulo: titulo,
        ano: Number(ano),
        classificacao: classificacao
    };

    filmes.push(filme);
    limparCampos()
    exibirFilmes(filmes);
}


// .map(funcao): Cria um NOVO array aplicando uma função a cada item do array original.
// Aqui, transforma cada objeto de filme em uma string formatada.
// .join('separador'): Junta todos os elementos de um array em uma única string, usando o 'separador' entre eles.
// Aqui, usa '<br>' para que cada filme apareça em uma nova linha HTML.
function exibirFilmes(lista){
    let texto = lista.map(f=>`${f.titulo} (${f.ano}) - Classificacao: ${f.classificacao}`).join("<br>");
    
    document.getElementById("listarFilmes").innerHTML = texto;
}

// FiltrarClassificação

function filtrarClassificacao(){
    let filtro = document.getElementById('filtroClassificacao').value;
    let resultado = filmes.filter(f => f.classificacao === filtro);
    exibirFilmes(resultado);
}

// FiltrarAno

function filtrarAno(){
    let filtro = Number(document.getElementById('filtroAno').value);
    let resultado = filmes.filter(f => f.ano === filtro);
    exibirFilmes(resultado);
}

function limparCampos(){
    document.getElementById('titulo').value = "";
    document.getElementById('ano').value = "";
    document.getElementById('classificacao').value = "";
    document.getElementById('titulo').focus();
}