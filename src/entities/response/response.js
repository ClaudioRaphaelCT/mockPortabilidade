const responseNOK = {
    "origin": "CORE",
    "type": "TEC",
    "subtype": "SYSTEM",
    "operation": "Sem operação",
    "errorCode": "COR-DATAPREV",
    "errorText": "",
    "shortComment": "Erro ao consultar os serviços DATAPREV",
    "message": "Uma resposta correta não foi recebida (status HTTP = [412]) no consumo de serviços [https://apis-internal-hml.csfcpv.wcorp.carrefour.com/topaz-dataprev/e-consignado/v7.0.0/emprestimos/excluir-portabilidade].",
    "dataprevResponse": {
      "erros": [
        {
          "codigo": "HM",
          "mensagem": "Empréstimo não identificado"
        }
      ],
      "hashOperacao": 246421164
    }
  }

  const responseOk = {
    "message": "Tudo certo até aqui!"
  }


  module.exports = {responseNOK, responseOk}