# Base

Este repositório contém uma estrutura básica para projetos web e visa facilitar a vida do desenvolvimento no que tange à organização de pastas e configuração de gerenciador de tarefas repetitivas.

***

## Estrutura de diretórios
- **adm:** Para área de administração, caso o projeto tenha uma.
- **bin:** Diretorio do *bower*, se preferir utilizar outro local, basta alterar o arquivo `.bowerrc`. Por padrão ele não está versionado, se quiser alterar isso, basta editar o `.gitignore`.
- **inc:** Diretório de includes.
- **pub:** Contém CSS, JS e imagens finais para uso no frontend.
- **src:** Contém arquivos fonte Sass, JS ou outros que sejam necessários para o projeto.
- **tmpl:** Pasta de templates.

#### Diretórios temporários
Este diretórios só são necessários no ambiente de desenvolvimento, sendo descartados do versionamento:

- **.sass-cache:** Criado na compilação do Sass.
- **node_modules:** Criado na compilação do Sass.

***

## Instalação
Para instalar os arquivos necessários, confira se todas as dependências abaixo estão satisfeitas. Caso estejam, basta executar no terminal:

```
$ yarn install
```

***


#### Utilização
Para rodar as tarefas configuradas no `gulpfile.js`:

```
$ yarn run serve
```

ou

```
$ gulp nome-da-tarefa
```

#### Plugins do Gulp/NPM usados nesta estrutura
- **gulp-concat:** Junta arquivos.
- **gulp-rename:** Renomeia arquivos.
- **gulp-jshint:** Verifica a qualidade de seu código Javascript.
- **gulp-uglify:** Minifica arquivos.
- **gulp-ruby-sass:** Compila arquivos Sass.
- **gulp-sourcemaps:** Mapeia o código dos arquivos minificados.
- **gulp-imagemin:** Minifica imagens.
- **imagemin-pngquant:** Auxilia a minificar arquivos PNG (Portable Network Graphics).
- **gulp-shell:** Executa tarefas com comandos de terminal (UNIX).
- **kss:** Knyle Style Sheets, usado para documentação de estilos Sass/LESS/CSS. Saiba mais no [site do projeto](http://warpspire.com/kss/).

Para instalar outro plugin que necessite, basta executar o comando abaixo:

```
$ yarn add <nome-do-plugin>
```

Use `--dev`, para listá-lo como dependência para o desenvolvimento:

```
$ yarn add <nome-do-plugin> --dev
```