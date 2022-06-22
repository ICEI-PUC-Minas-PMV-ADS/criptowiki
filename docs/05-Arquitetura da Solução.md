# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesse campo abordaremos a solução da arquitetura proposta pelo grupo, com seus detalhes técnicos e componentes. Trataremos também da hospedagem do código-fonte, mostrando o ambiente usado.  

## Diagrama de componentes

Na figura a seguir está sendo ilustrado o nosso diagrama da arquitetura de software, onde utilizamos o modelo C4 que consiste em um conjunto hierárquico contendo o contexto, containers, componentes e código. 


![Figura 11 - Diagrama da Arquitetura de Software](img/Figura%2011%20-%20Diagrama%20da%20Arquitetura%20de%20Software.png)
*Figura 11 - Diagrama da Arquitetura de Software*

A solução implementada conta com os seguintes módulos:

-	Conteúdos:

  --	Material criado pelos desenvolvedores – Conteúdo informativos selecionadas e criados pela equipe para agregar material ao site.

    ■	Caixa de texto e imagens com o conteúdo – [Código].
-	Login e Cadastro do Usuário:

  ○	Integração com a base de dados – Parte a ser desenvolvida em versões futuras do projeto, pois o que está sendo proposto para este eixo é o desenvolvimento front-end. 

    ■	[Código].
-	Referências Externas:

  ○	Mídia escolhida pelos desenvolvedores – Vídeos instrutivos selecionados pela equipe para auxiliar os usuários.

    ■	Hiperlinks direcionando para o vídeo – [Código].

-	Aba comentários:

○	Campo Destinado para registro de comentários dos usuários - Pode ser feito sem a necessidade de uma criação de login e cadastro de usuário.

    ■	Comentários - registro de opiniões dos usuários sobre o conteúdo.

-	Hospedagem - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

## Hospedagem

Para a hospedagem escolhemos a plataforma Heroku e o link do ambiente criado estará disponível na próxima etapa com um URL parecido com o do exemplo: ![Heroku](https://link_exemplo.herokuapp.com)