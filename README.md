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

A API indicada no desafio é consumida pela média de 40 segundos, com 10000 requisições simultâneas. 
Aqui está um exemplo:<br>
![image](https://cdn.discordapp.com/attachments/869339288041558067/918895633824383066/unknown.png)

### b. Forma de execução da requisição:

A aplicação pode realizar requisições simultâneas conforme opção feita pelo usuário na view, conforme abaixo:
![image](https://cdn.discordapp.com/attachments/869339288041558067/917520304778141786/unknown.png)

O máximo de requisições permitidas, conforme verificado nas próprias instruções da view, é de 1000.
A realização de 1000 requisições simultâneas permite que a API do Desafio possa ser consumida na média de 1 minuto. Após a solicitação da requisição, aguarde até que seja transferido para uma janela com a exposição de todos os números ordenados, ficando da seguinte maneira abaixo:
![image](https://cdn.discordapp.com/attachments/869339288041558067/917520776054329354/unknown.png)

## 3. Instalando o projeto:

Faça uma cópia do projeto no respositório do GitHub: https://github.com/silasms/desafio-cross-commerce
```
$ git clone https://github.com/silasms/desafio-cross-commerce.git
```

Posteriormente, execute o gerenciador de pacotes npm para a instalação das libs:
```
$ npm i
```

Ao final, para inicializar o servidor, acesse à pasta source (src) e execute o seguinte comando:
```
$ cd src
$ nodemon server
```

Pronto! A instalação está concluída e a requisição pode ser executada no formulário constante na url http://localhost:4000/start.

Se quiser fazer o uso do postman para a requisição, basta elaborar uma solicitação via json pela seguinte estrutura:
![image](https://cdn.discordapp.com/attachments/869339288041558067/917520015257915392/unknown.png)

Após isso, basta aguardar a requisição ser finalizada e automaticamente será enviado para página com todos os números das requisições de forma ordenada.