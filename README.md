# prova-dixi-gestao-funcionarios

para acessar o Swagger acesse:

http://localhost:8080/swagger-ui/index.html


# Como executar o Projeto

Certifique-se de que tem o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/) instalados na sua máquina.

1. Clonando o projeto via ssh:
 ```bash
    git clone git@github.com:andreyrv18/prova-dixi-gestao-funcionarios.git
```

2. Acesse a pasta recem clonada do github

```bash
    cd  prova-dixi-gestao-funcionarios
```

3. Após clonar o projeto vamos rodar o docker para subir os containers da aplicação


> Docker

4. Abra o terminal e execute o comando:

```bash
    docker compose up -d --build
```

após os 3 constainers estiverem online frontend, backend, mysql

acesse no seu navegador: http://localhost:5173


# Referencias usadas no projeto

[Validador de CPF por DevMedia](https://www.devmedia.com.br/validando-o-cpf-em-uma-aplicacao-java/22097)

[Obemep - matematica dos CPFs](https://clubes.obmep.org.br/blog/a-matematica-nos-documentos-a-matematica-dos-cpfs/)
