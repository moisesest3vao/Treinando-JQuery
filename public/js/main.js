var tempoInicial = $("#tempo-digitacao").text();
var textArea = $("#campo-digitacao");
var texto = $(".texto").text();

//Anotações
//'$(document).ready(function(){})' funciona exatamente como '$(function(){}')
$(function () {
  atualizaQuantidadeDePalavras();
  inicializaTempo();
  inicializaContadores();
  ativaExclusao();
  $("#botao-reiniciar").click(reiniciaJogo);
  textArea.on("input", inicializaValidadores);
});

function atualizaQuantidadeDePalavras() {
  var texto = $(".texto").text();
  var quantidadeDePalavrasDoTexto = texto.split(" ").length;
  $("#quantidade-palavras").text(quantidadeDePalavrasDoTexto);
}

function inicializaTempo() {
  textArea.one("focus", function () {
      console.log("focus");
    let tempoParaDigitacao = $("#tempo-digitacao");
    var IdDoIntervalo = setInterval(function () {
      tempoParaDigitacao.text(tempoParaDigitacao.text() - 1);
      if (tempoParaDigitacao.text() < 1) {
        clearInterval(IdDoIntervalo);
        finalizaJogo();
      }
    }, 1 * 1000);
  });
}

function finalizaJogo() {
  //Má prática, estilos devem estar no css e não no Js, por isso deve-se setar a classe
  //textArea.css("background-color","lightgray")
  //Em vez de usar add/removeClass, pode-se usar toggleClass
  //textArea.addClass("campo-desativado");
  textArea.attr("disabled", true);
  textArea.toggleClass("campo-desativado");

  inserePlacar();
}

function inicializaValidadores() {
  let textoDigitado = $("#campo-digitacao").val();
  textoEquivalente = texto.substr(0, textoDigitado.length);
  if (textoDigitado != textoEquivalente) {
    textArea.addClass("texto-errado");
    textArea.removeClass("texto-certo");
  } else {
    textArea.addClass("texto-certo");
    textArea.removeClass("texto-errado");
  }
}

function inicializaContadores() {
  $("#campo-digitacao").on("input", function () {
    let quantidadeDePalavrasDoTextArea = textArea.val().split(/\S+/).length - 1;
    let quantidadeDeCaracteresDoTextArea = textArea.val().length;
    $("#quantidade-palavras-digitadas").text(quantidadeDePalavrasDoTextArea);
    $("#quantidade-caracteres-digitadas").text(
      quantidadeDeCaracteresDoTextArea
    );
  });
}

function reiniciaJogo() {
  textArea.val("");
  textArea.attr("disabled", false);
  $("#quantidade-palavras-digitadas").text("0");
  $("#quantidade-caracteres-digitadas").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  inicializaTempo(textArea);
  textArea.toggleClass("campo-desativado");
  textArea.removeClass("texto-certo");
  textArea.removeClass("texto-errado");
}


  
