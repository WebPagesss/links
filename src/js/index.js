//1 buscar botoes no html
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const conteudo = document.querySelectorAll(".informacoes");

//2 identificar clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //3 desmarcar o botao selecionado anterior
        desativarBotaoSelecionado();
        //4 marcar o botao clicado como selecionado
        selecionarBotaoCarrossel(botao);
        //5 esconder imagem do fundo anterior
        esconderImagemAtiva();
        //6 aparecer imagem de fundo do botao clicado 123456
        mostrarImagemDeFundo(indice);
        esconderTextoAtivo();
        mostrarTextoAtivo(indice);

    })
})

//3
function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
//4
function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}
//5
function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}
//6
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}
function esconderTextoAtivo() {
    const TextoAtivo = document.querySelector('.ativo');
    TextoAtivo.classList.remove('ativo');
}
function mostrarTextoAtivo(indice) {
    conteudo[indice].classList.add('ativo');
}
