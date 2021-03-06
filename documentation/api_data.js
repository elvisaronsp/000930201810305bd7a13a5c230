define({ "api": [
  {
    "type": "delete",
    "url": "/products/:lm",
    "title": "",
    "name": "_products__lm",
    "examples": [
      {
        "title": "Examplo de uso:",
        "content": "curl -i --header \"Content-Type: application/json;Accept:application/json;Origin:http://api.tlss-cloud.com.br\" --request DELETE http://api.tlss-cloud.com.br/api/v1/products/30",
        "type": "curl"
      }
    ],
    "group": "Deletar",
    "version": "0.1.0",
    "description": "<p>Remover Produto</p>",
    "parameter": {
      "fields": {
        "Parametros": [
          {
            "group": "Parametros",
            "type": "Number",
            "optional": false,
            "field": "lm",
            "description": "<ul> <li>Código Único.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n {\n    \"status\": \"failed\",\n    \"data\": null,\n    \"message\": \"Product not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/Paulo/LeroyProducts/tests/Feature/ProductTest.php",
    "groupTitle": "Deletar"
  },
  {
    "type": "get",
    "url": "/products/:lm",
    "title": "",
    "name": "_products__lm",
    "examples": [
      {
        "title": "Examplo de uso:",
        "content": "curl -i --header \"Content-Type: application/json;Accept:application/json\" --request GET http://api.tlss-cloud.com.br/api/v1/products/30",
        "type": "curl"
      }
    ],
    "group": "Detalhes",
    "version": "0.1.0",
    "description": "<p>Detalhes do Produto com Categoria</p>",
    "parameter": {
      "fields": {
        "Paramentro": [
          {
            "group": "Paramentro",
            "type": "Number",
            "optional": false,
            "field": "lm",
            "description": "<ul> <li>Código Único.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "  HTTP/1.1 200 OK\n {\n\"data\": \n    {\n        \"id\": 28,\n        \"lm\": 1020,\n        \"name\": \"Luvas de Proteção\",\n        \"description\": \"Luva de proteção básica\",\n        \"free_shipping\": 1,\n        \"price\": \"5.61\",\n        \"price_display\": \"R$ 5.61\",\n        \"created_at\": \"2018-10-26\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n {\n    \"status\": \"failed\",\n    \"data\": null,\n    \"message\": \"Product not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/Paulo/LeroyProducts/tests/Feature/ProductTest.php",
    "groupTitle": "Detalhes"
  },
  {
    "type": "get",
    "url": "/products/:lm",
    "title": "",
    "name": "_products__lm",
    "examples": [
      {
        "title": "Examplo de uso:",
        "content": "curl -i --header \"Content-Type: application/json;Accept:application/json\" --request GET http://api.tlss-cloud.com.br/api/v1/products/30",
        "type": "curl"
      }
    ],
    "group": "Detalhes",
    "version": "0.1.0",
    "description": "<p>Detalhes do Produto com Categoria</p>",
    "parameter": {
      "fields": {
        "Paramentro": [
          {
            "group": "Paramentro",
            "type": "Number",
            "optional": false,
            "field": "lm",
            "description": "<ul> <li>Código Único.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "    HTTP/1.1 200 OK\n   {\n  \"data\": \n      {\n          \"id\": 28,\n          \"lm\": 1020,\n          \"name\": \"Luvas de Proteção\",\n          \"description\": \"Luva de proteção básica\",\n          \"free_shipping\": 1,\n          \"price\": \"5.61\",\n          \"price_display\": \"R$ 5.61\",\n          \"created_at\": \"2018-10-26\",\n          \"category\": {\n               \"data\": {\n                  \"id\": 1,\n                  \"name\": \"category_1\",\n                  \"description\": 0,\n                  \"created_at\": \"2018-10-29\"\n              }\n          }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n {\n    \"status\": \"failed\",\n    \"data\": null,\n    \"message\": \"Product not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/Paulo/LeroyProducts/tests/Feature/ProductTest.php",
    "groupTitle": "Detalhes"
  },
  {
    "type": "put",
    "url": "/products/:lm",
    "title": "",
    "name": "_products__lm",
    "examples": [
      {
        "title": "Examplo de uso:",
        "content": "curl -i --header \"Content-Type: application/json;Accept:application/json\" --request PUT http://api.tlss-cloud.com.br/api/v1/products/30 -d '{\n          \"lm\": 1020,\n          \"name\": \"Luvas de Proteção\",\n          \"description\": \"Luva de proteção básica\",\n          \"free_shipping\": 1,\n          \"price\": \"5.61\",\n          \"created_at\": \"2018-10-26\"\n      }'",
        "type": "curl"
      }
    ],
    "group": "Editar",
    "version": "0.1.0",
    "description": "<p>Atualização do Produto</p>",
    "parameter": {
      "fields": {
        "Parametros": [
          {
            "group": "Parametros",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p><code>obrigatório</code> Nome o Produto.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "  HTTP/1.1 200 OK\n {\n\"data\": \n    {\n        \"status\": \"success\",\n        \"message\": \"Product updated\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campos Obrigatórios:",
          "content": " HTTP/1.1 400 Bad Request\n {\n    \"status\": \"failed\",\n    \"error\": true,\n    \"message\": {\n        \"name\": [\n            \"O name é obrigatório\"\n        ]\n    }\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n {\n    \"status\": \"failed\",\n    \"data\": null,\n    \"message\": \"Product not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/Paulo/LeroyProducts/tests/Feature/ProductTest.php",
    "groupTitle": "Editar"
  },
  {
    "type": "post",
    "url": "/products/import",
    "title": "",
    "name": "_products_import",
    "examples": [
      {
        "title": "Examplo de uso:",
        "content": "curl --header \"Accept:application/json\" --request POST http://api.tlss-cloud.com.br/api/v1/products/import -F 'file=@path/to/file.xlsx''",
        "type": "curl"
      }
    ],
    "group": "Import_do_Excel",
    "version": "0.1.0",
    "description": "<p>O registro de novos produtos além da atualização pode acontecer atraves de planilhas. <strong style=\"font-size:1.3rem;color:blue;\">faça o download do modelo</strong>.</p>",
    "parameter": {
      "fields": {
        "Paramentro": [
          {
            "group": "Paramentro",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p><code>obrigatório</code></p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "  HTTP/1.1 200 OK\n {\n\"data\": \n    {\n        \"message\": \"document dispatch\",\n        \"endpoint\": \"http://api.tlss-cloud.com.br:8000/api/webhook/processed/41417e683bcfcf05.xlsx.153ebbfa98a92f85\"\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Campo Obrigatório:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n       \"file\": [\n           \"The file field is required.\"\n       ],",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/Paulo/LeroyProducts/tests/Feature/ProductTest.php",
    "groupTitle": "Import_do_Excel"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "",
    "name": "_products_",
    "examples": [
      {
        "title": "Examplo de uso:",
        "content": "curl -i --header \"Content-Type: application/json;Accept:application/json\" --request GET http://api.tlss-cloud.com.br/api/v1/products?limit=50&page=2",
        "type": "curl"
      }
    ],
    "group": "Produtos",
    "version": "0.1.0",
    "description": "<p>Listagem de Produtos.</p>",
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p><code>Opcional</code> Limite de registros por pagina.</p>"
          },
          {
            "group": "QueryString",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p><code>Opcional</code> Número da pagina</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "  HTTP/1.1 200 OK\n {\n\"data\": [\n    {\n        \"id\": 28,\n        \"lm\": 1003,\n        \"name\": \"Luvas de Proteção\",\n        \"description\": \"Luva de proteção básica\",\n        \"free_shipping\": 1,\n        \"price\": \"5.61\",\n        \"price_display\": \"R$ 5.61\",\n        \"created_at\": \"2018-10-26\"\n    }\n],\n\"meta\": {\n    \"pagination\": {\n        \"total\": 576,\n        \"count\": 3,\n        \"per_page\": 3,\n        \"current_page\": 10,\n        \"total_pages\": 192,\n        \"links\": {\n            \"previous\": \"http://api.tlss-cloud.com.br:8000/api/v1/products?limit=3&page=9\",\n            \"next\": \"http://api.tlss-cloud.com.br:8000/api/v1/products?limit=3&page=11\"\n        }\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "C:/Users/Paulo/LeroyProducts/tests/Feature/ProductTest.php",
    "groupTitle": "Produtos"
  }
] });
