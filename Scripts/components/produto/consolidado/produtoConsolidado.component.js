$(function () {
    new ProdutoConsolidadoComponent();
});

function ProdutoConsolidadoComponent() {

    var api = new ProdutoService();

    var init = function () {
        pesquisar();
    }

    var pesquisar = function () {
    
        api.getImportacoesConsolidado().then(function (data) {
    
            if (data.status == 'success') {
                console.log(data);

                $("#tabela_produtoConsolidado tbody").html("");

                $(data.resp).each(function() {
                    $("#tabela_produtoConsolidado tbody").append(
                        `<tr>
                            <td>${this.nomeProduto}</td>
                            <td>20/04/2020</td>
                            <td>${this.quantidadeTotal}</td>
                            <td>${this.valorTotal}</td>
                        </tr>`
                    );
                });
            }
            else console.log("erro", data.status);
        });

    }

    init();
}