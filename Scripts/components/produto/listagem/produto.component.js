$(function () {
    new ProdutoComponent();
});

var filtro = new function Filtro() {

    var self = this;

    self.obter = function () {

        var id = $("#id_registro").val();

        return id || null;
    }
}

function ProdutoComponent() {

    var api = new ProdutoService();

    var init = function () {
        
        $("#btnPesquisar").click(function () {
            pesquisar();
        });

        pesquisar();
    }

    var pesquisar = function () {
    
        var filter = filtro.obter();
    
        if (filter != undefined && filter != null) {
            api.getImportacao(filter).then(function (data) {
        
                if (data.status == 'success') {
                    console.log(data);

                    $("#tabela_produtos tbody").html("");

                    $(data.resp).each(function() {
                        $("#tabela_produtos tbody").append(
                            `<tr>
                                <td>20/04/2020</td>
                                <td>20/04/2020</td>
                                <td>${this.nomeProduto}</td>
                                <td>${this.quantidade}</td>
                                <td>${this.valorUnitario}</td>
                            </tr>`
                        );
                    });
                }
                else console.log("erro", data.status);
            });
        } else {
            api.getImportacoes().then(function (data) {
        
                if (data.status == 'success') {
                    console.log(data);

                    $("#tabela_produtos tbody").html("");

                    $(data.resp).each(function() {
                        $("#tabela_produtos tbody").append(
                            `<tr>
                                <td>20/04/2020</td>
                                <td>20/04/2020</td>
                                <td>${this.nomeProduto}</td>
                                <td>${this.quantidade}</td>
                                <td>${this.valorUnitario}</td>
                            </tr>`
                        );
                    });
                }
                else console.log("erro", data.status);
            });
        }
    
    }

    init();
}