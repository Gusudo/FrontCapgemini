function ProdutoService() {

    var http = new HttpRequest();

    this.insert = function (file) {

        return http.upload(BASE_URL + 'api/produto/v1/insert', file)
            .then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
    }

    this.getImportacoes = function () {
        return http.get(BASE_URL + 'api/produto/v1/getimportacoes', "application/json")
            .then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
    }
    
    this.getImportacao = function (id) {
        return http.get(BASE_URL + `api/produto/v1/getimportacao/${id}`, "application/json")
            .then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
    }

    this.getImportacoesConsolidado = function () {
        return http.get(BASE_URL + 'api/produto/v1/getimportacoesconsolidado', "application/json")
            .then(function (result) {
                return result;
            }, function (error) {
                return error;
            });
    }

}