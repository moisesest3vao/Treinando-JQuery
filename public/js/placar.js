function inserePlacar() {
    var tabelaBody = $(".placar").find("tbody");
    var contadorDePalavras = $("#quantidade-palavras-digitadas").text();
    var usuario = "Moisés";
    var linha = novaLinha(usuario, contadorDePalavras);
    console.log(linha);
    console.log(linha.find(".botao-remover"));
    linha.find(".botao-remover").click(removeLinha);
  
    tabelaBody.prepend(linha);
  }
  
  function novaLinha(usuario, numeroDePalavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numeroDePalavras);
    var colunaRemover = $("<td>");
  
    var link = $("<a>").attr("href", "#").addClass("botao-remover");
    var icone = $("<i>")
      .addClass("small")
      .addClass("material-icons")
      .text("delete");
  
    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
  
    return linha;
  }
  
  function removeLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
  }

  function ativaExclusao(){
    $(".botao-remover").click(removeLinha);
  }
