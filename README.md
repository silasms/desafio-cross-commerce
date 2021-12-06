# ESCLARECIMENTOS DO CÓDIGO

## 1. Linguagem e libs utilizadas:

* Javascript
* NodeJS
* Async
* Axios
* body-parse
* EJS
* express
* nodemon
* JEST

## 2. Tempo e forma de execução:

### a. Tempo de execução da requisição:

A API indicada no desafio é consumida pela média de 1 minuto:
[image](https://cdn.discordapp.com/attachments/869339288041558067/917520089870368778/unknown.png)

### b. Forma de execução da requisição:

A aplicação pode realizar requisições simultâneas conforme opção feita pelo usuário na view, conforme abaixo:
[image](https://cdn.discordapp.com/attachments/869339288041558067/917520304778141786/unknown.png)

O máximo de requisições permitidas, conforme verificado nas próprias instruções da view, é de 1000.
A realização de 1000 requisições simultâneas permite que a API do Desafio possa ser consumida na média de 1 minuto.

## 3. Instalando o projeto:

Faça uma cópia do projeto no respositório do GitHub: https://github.com/silasms/desafio-cross-commerce
```
git clone https://github.com/silasms/desafio-cross-commerce.git
```

Posteriormente, execute o gerenciador de pacotes npm para a instalação das libs:
```
npm i
```

Ao final, para inicializar o servidor, acesse à pasta source (src) e execute o seguinte comando:
```
cd src
nodemon server
```

Pronto! A instalação está concluída e a requisição pode ser executada no formulário constante na url http://localhost:4000/start.