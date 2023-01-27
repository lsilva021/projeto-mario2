/*

OBJETIVO 1 - Ao clicar no botão "veja o trailer", devemos abrir a modal com o vídeo do trailer.

OBJETIVO 2 - Ao clicar no X, devemos fechar a modal.

OBJETIVO 1 - Ao clicar no botão "veja o trailer", devemos abrir a modal com o vídeo do trailer.
- Passo 1 - Pegar o elemento que representa o botão na tela utilizando o JS.
- Passo 2 - Dar um jeito de identificar quando o usuário clicar no botão.
- Passo 3 - Dar um jeito de pegar o elemento da modal no JS.
- Passo 4 - Abrir a modal na tela.

OBJETIVO 2 - Ao clicar no X, devemos fechar a modal.
- Passo 1 - Dar um jeito de pegar o elemento de fechar modal utilizando o JS.
- Passo 2 - Dar um jeito de identificar quando o usuário clicar no X.
- Passo 3 - Fechar a modal.

*/

// - Passo 1 - Pegar o elemento que representa o botão na tela
const botaoTrailer = document.querySelector(".botao-trailer");

//Passo 3 - Dar um jeito de pegar o elemento da modal no JS.
const modal = document.querySelector (".modal");

//Passo 2 - Dar um jeito de identificar quando o usuário clicar no botão.
botaoTrailer.addEventListener("click", () => {
    //Passo 4 - Abrir a modal na tela.
    modal.classList.add("aberto")
    video.setAttribute("src", linkDoVideo)

});

// OBJETIVO 2 - Ao clicar no X, devemos fechar a modal.
// - Passo 1 - Dar um jeito de pegar o elemento de fechar modal utilizando o JS.
const botaoFecharModal = document.querySelector(".fechar-modal");

//Passo 2 - Dar um jeito de identificar quando o usuário clicar no X.
botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
});

const video = document.getElementById("video");
const linkDoVideo = video.src;