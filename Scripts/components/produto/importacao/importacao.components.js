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
    
            if (data.status == 'success') {
                console.log(data);

                // $("#tabela_produtoConsolidado tbody").html("");

                // $(data.resp).each(function() {
                //     $("#tabela_produtoConsolidado tbody").append(
                //         `<tr>
                //             <td>${this.nomeProduto}</td>
                //             <td>20/04/2020</td>
                //             <td>${this.quantidadeTotal}</td>
                //             <td>${this.valorTotal}</td>
                //         </tr>`
                //     );
                // });
            }
            else console.log("erro", data.status);
        });

    }

    init();
}