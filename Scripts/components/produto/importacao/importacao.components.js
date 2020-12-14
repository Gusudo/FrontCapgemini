$(function () {
    new ImportacaoComponent();
});

function ImportacaoComponent() {

    var api = new ProdutoService();

    var init = function () {
        $("#planilha").change(function() {
            enviar();
        });
    }

    var enviar = function () {
        var formData = new FormData();
        formData.append('file', $('#planilha')[0].files[0]);
        
        api.insert(formData).then(function(data) {
            console.log(data.status);
            if (data.status == 'success') {

                $(data.resp).each(function() {
                    $("#tabela_produtos tbody").append(
                        `<tr>
                            <td>${this.dataImportacaoString}</td>
                            <td>${this.dataEntregaString}</td>
                            <td>${this.nomeProduto}</td>
                            <td>${this.quantidade}</td>
                            <td>${this.valorUnitario}</td>
                        </tr>`
                    );
                });
            }
            else {
                console.log("erro", data.status);
                if (data.responseText != null && data.responseText != undefined) {
                    $(data.responseText).each(function() {
                        var warning = this.hasError ? "text-danger" : "";
                        
                        $("#tabela_produtos tbody").append(
                            `<tr class="${warning}">
                                <td>${this.dataImportacaoString}</td>
                                <td>${this.dataEntregaString}</td>
                                <td>${this.nomeProduto}</td>
                                <td>${this.quantidade}</td>
                                <td>${this.valorUnitario}</td>
                            </tr>`
                        );
                    });
                }
                alert("Ocorreu um erro durante a importação");
            }

        });

    }

    init();
}