# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Para que os testes sejam executados, é necessário seguir os seguintes passos: 

-	Ter acesso a um navegador Web; 
-	Fazer o download do arquivo ou clone do projeto disponível no Github através do link [https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t11-criptogrupo](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-1-e1-proj-web-t11-criptogrupo) 
-	Abrir o código no Visual Studio e executar o live server;
Foram seis testes executados buscando cumprir os seguintes requisitos: pesquisa, comentário, fontes, legibilidade, contato e navegação da página home. Os testes foram feitos a partir dos requisitos funcionais anteriormente listados. 

| CASO DE TESTE | REQUISITOS ASSOCIADOS | OBJETIVO DO TESTE  | PASSOS | CRITÉRIOS DE EXITOS |
|--------------|----------------|--------------------|------------------|------------------|
|CT-01 – Acesso ao Contato dos Desenvolvedores| RF-05 - O site deve permitir visualizar as informações de contatos dos desenvolvedores. | Verificar se os contatos dos desenvolvedores estão presentes no site. | Após seguir os passos listados anteriormente, na navbar do site encontra-se o acesso à página de informações dos desenvolvedores, cujo nome é “contato”. | O ícone de nome contato deve redirecionar o usuário à página com as informações dos desenvolvedores. Ali deve conter os nomes dos desenvolvedores, assim como um e-mail para contato dos mesmos.  |
|CT-02 – Navegação pela Home Page| RF-01 - O site deve apresentar na página home uma breve descrição referente ao objetivo do projeto. RF-02 – O cabeçalho da página home deve conter uma barra de navegação com acesso rápido aos conteúdos do site.| Identificar na página home a descrição do objetivo do projeto e se a navbar está funcional.| Após seguir os passos listados anteriormente, verificar se há a descrição e se ela atende ao objetivo do projeto. Identificar a navbar e verificar se os redirecionamentos estão corretos. | Deve haver na página home uma descrição coesa do objetivo do projeto. Os ícones da navbar devem redirecionar o usuário aos conteúdos desejados.|
|CT-03 – Funcionalidade de comentários|RF-08 – O site deve permitir que os usuários comentem sobre os tópicos.RF-09 – O site deve exibir os comentários registrados juntamente com a notícia exibida.|Verificar se é possível deixar comentários e visualizar os comentários já existentes.|Após seguir os passos listados anteriormente, na navbar do site encontra-se o acesso à página de conteúdos, ao selecionar algum, o usuário será direcionado a respectiva página onde, ao final de cada conteúdo, estará disponibilizado o campo para comentar e os comentários já postados.|Ao acessar a página de qualquer conteúdo o usuário deve conseguir comentar e ver os comentários existentes. |

 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
