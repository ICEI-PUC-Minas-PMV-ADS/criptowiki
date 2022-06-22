# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

O problema apresentado neste projeto foi definido com a participação de todos os membros do grupo, através discussões a respeito de experiências vividas ao nos depararmos com os perigos do mundo cripto. Foi de consenso de todos a falta de informações legítimas sobre o assunto. Buscamos, então, solucionar esse problema criando uma plataforma informativa que sirva de instrução para os mais leigos acerca das dificuldades, muitas vezes omitidas, por quem divulga o meio.

## Personas

#### Ricardo Paiva

Idade: 25 

Ocupação: Auxiliar Financeiro, saiu recentemente de um emprego com jornadas de trabalho abusivas para poder se dedicar mais a sua vida pessoal 

Aplicativos:  
-	Instagram  
-	Facebook 
-	Twitter

Motivações  
-	Viajar 
-	Sair com amigos 
-	Casar 

Frustrações  
-	Não poder comprar o que quer 
-	Pouco tempo livre 
-	Falta de crescimento profissional 

Hobbies, História  
-	Ler livros 
-	Assistir seriados/filmes 
-	Jogar no computador 
-	Apostar 


#### Naligya Santos

Idade: 37 

Ocupação:  Contadora, experienciou vários clientes com investimentos em cripto moedas que resolveu conhecer o mercado 

Aplicativos:  
-	Instagram  
-	XP Investimentos 
-	Meta Trader 4 
-	Twitter 


Motivações  
-	Aumentar patrimônio 
-	Deixar algo bom pros filhos 
-	Viajar 


Frustrações  
-	Não poder ter o que sempre quis quando criança 
-	Nunca ter viajado pra fora do país 
 
Hobbies, História  
-	Jogar vôlei de praia  
-	Surfar

#### Jaqueline Abrão

Idade: 23 

Ocupação: Assessora de imóveis buscando formas de aumentar seu capital 

Aplicativos:  
-	Moneytimes 
-	Investing 
-	UOL notícias 


Motivações  
-	Alcançar a liberdade financeira, viajar 
-	Morar em outro país 
-	Ajudar a mãe financeiramente patrimônio 


Frustrações  
-	Não entrou na faculdade pública 
-	Pais divorciados 
-	Não saber investir 


Hobbies, História  
-	Leitura 
-	É formada em engenharia, estuda inglês desde os 12 anos. Gosta do ramo de vendas, muito comunicativa, mas sem noção financeira 

#### Higor De Sá

Idade: 30 

Ocupação: Atendente de call center 

Aplicativos:  
-	Instagram  
-	Facebook 
-	Youtube 
-	Netflix 


Motivações  
-	Ter casa própria 
-	Ter carro próprio  


Frustrações  
-	Divorciado 
-	Treinamentos de “daytrade” que nunca funcionam 


Hobbies, História  
-	Assistir jornais, filmes e reality shows 
-	Formado em administração, não conseguiu emprego na Bahia e se mudou para São Paulo, onde fez estágio em uma empresa de RH, até que mudou para call center em que trabalha há 7 anos. Já fez diversos cursos de day trade e sofreu golpes de pirâmides na esperança de ganhar dinheiro. 




## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Ricardo Paiva  | Uma fonte de renda que permita trabalhar de casa. | Ter mais qualidade de vida.    |
|Ricardo Paiva       | Aprender sobre investimento de alto risco e entender seus perigos | Potencializar os ganhos, independente de perdas.  |
|Naligya Santos        | Potencial para ganhar mais mensalmente | Poder viajar e fazer o que sempre quis. |
|Naligya Santos        | Inspirar outras pessoas a mudarem de vida independente da idade  | Mostrar que a tecnologias inovadoras não é apenas para jovens. |
|Naligya Santos        | Mostrar que seu conhecimento como contadora é de grande valia para o mundo cripto  | Mostrar que o mundo cripto é um mercado financeiro como outro qualquer, mesmo tendo suas peculiaridades.  |
|Jaqueline Abrão        | Informações de fácil acesso e compreensão sobre investimentos em cripto | Poder começar a investir em criptomoedas  |
|Higor de Sá        | Conhecer os principais projetos NFT e suas histórias. | Entender como esse mercado funciona para traçar uma estratégia de trade com suas criptomoedas.  |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

## Requisitos

Os requisitos que compreendem o projeto, conhecidos como funcionais e não funcionais, são respectivamente, o comportamento do sistema levando em consideração as ações do usuário; e o que se espera do sistema em termos de qualidade, usabilidade, disponibilidade, portabilidade, capacidade, degradação, segurança e manutenção.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O site deve apresentar na página home uma breve descrição referente ao objetivo do projeto.  | MÉDIA | 
|RF-002| O cabeçalho da página home deve conter uma barra de navegação com acesso rápido aos conteúdos do site.    | ALTA |
|RF-003| Ao selecionar o conteúdo o site deve redirecionar o usuário a sua respectiva página.    | ALTA |
|RF-004| O site deve oferecer uma funcionalidade de pesquisa para permitir ao usuário uma busca a determinado conteúdo.    | MÉDIA |
|RF-005| O site deve permitir visualizar as informações de contatos dos managers do site.    | BAIXA |
|RF-006| O site deve disponibilizar as fontes bibliográficas de seus conteúdos.    | MÉDIA |
|RF-007| O site deve incorporar um vídeo-player para reproduzir os conteúdos instrutivos produzidos por terceiros.     | MÉDIA |
|RF-008| O site deve permitir que os usuários comentem sobre os tópicos   | MÉDIA |
|RF-009| O site deve exibir os comentários registrados juntamente com a notícia exibida.    | MÉDIA |
|RF-010| Os conteúdos do site devem estar disponibilizados na ordem para o otimizar o aprendizado.   | BAIXA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
