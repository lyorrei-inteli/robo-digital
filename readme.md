<h1>Projeto de Arquitetura para Robô</h1>
Este projeto tem como objetivo armazenar e monitorar a posição do robô em um banco de dados Postgres e permitir a conexão com o robô para recuperar sua posição atual. Ele consiste em três diretórios principais: /api, /dobot e /godot.
<hr/>
<h2>/api</h2>
O diretório /api contém uma API em NestJS com Prisma, que se conecta a um banco de dados Postgres. A API permite que as coordenadas e a posição das juntas do robô sejam armazenadas diretamente por meio da conexão com o robô ou por meio de uma solicitação de um cliente. O diretório /api contém um arquivo Dockerfile para criar um container para a API. Ela fica aberta na porta 3000.

<br/>
Essa api consiste nas seguintes rotas:
<ul>
    <li>get "/": Rota que retorna todas as posições armazenadas no banco de dados </li>
    <li>get "/lastPosition": Rota que retorna a última posição armazenada no banco de dados</li>
    <li>get "/dobot/store_position": Rota que se conecta com a api em flask que consegue a informação da posição diretamente com o robô</li>
    <li>post "/store_position": Rota que armazena uma nova posição diretamente no banco de dados com as informações que chegaram no req.body (x, y, z, r, j1, j2, j3)</li>
</ul>

Caso você queira rodar a api em nestjs, é necessário adicionar um arquivo .env no diretório /api com o seguintes variáveis:

```
DATABASE_URL="postgres://example_user:example_password@postgres:5432/robo-digital"
DOBOT_SERVER_URL="http://dobot:3001"
```

<hr/>

<h2>/dobot</h2>
O diretório /dobot contém uma API em Flask que pode se conectar diretamente ao robô. Ele tem uma rota /get/position que pode recuperar a posição atual do robô. O diretório /dobot contém um arquivo Dockerfile para criar um container para a API. Ela fica aberta na porta 3001.

<br/>
Essa api consiste na seguinte rota:
<ul>
    <li>get "/get_position": Rota que se conecta com o robô (ligado via cabo) e retorna a informação de sua posição.</li>
</ul>

<hr/>

<h2>/godot</h2>
O diretório /godot contém o frontend do projeto, desenvolvido em Godot. Ele contém um botão que executa uma solicitação para uma rota da API em NestJS para recuperar a última posição do robô armazenada no banco de dados e mostra essa informação na tela.
<hr/>

<h2>docker-compose</h2>
Na raiz do projeto, há um arquivo docker-compose.yml que pode ser usado para criar três containers: um para a API em NestJS, outro para a API em Flask e o último para o banco de dados Postgres. Ao executar o comando "docker-compose up", os três containers serão criados e a aplicação poderá ser acessada.
<hr />

<h2>Como rodar o projeto?</h2>
Para executar o projeto, basta executar o comando "docker-compose up". No entanto, para usar a rota que armazena a posição do robô por meio da conexão com o robô, é necessário executar separadamente os projetos /api, /dobot e subir o banco de dados postgres localmente, pois infelizmente não tive tempo de  realizar a configuração de uma porta USB do container com uma porta USB do computador.
