# Documentação — Portfólio Pessoal

## 1. Definição do projeto

**Nome do projeto:** Portfólio Pessoal — Taynna Viana Noronha

**Problema ou necessidade atendida:** Não existe, hoje, um lugar único que reúna minha formação, competências técnicas, projetos e experiência profissional de forma clara para quem eu queira mostrar meu trabalho (recrutadores, colegas de curso, professores).

**Objetivo principal:** Apresentar, de forma clara e profissional, minha identificação pessoal, formação acadêmica, competências técnicas, projetos realizados ou em desenvolvimento, experiência profissional, formas de contato, hobbies e planos de viagem/intercâmbio.

**Público-alvo:** Recrutadores, colegas de curso (IFSP), professores e qualquer pessoa que queira conhecer meu trabalho e trajetória.

**Proposta visual:** Paleta em tons terracota e verde-sálvia (a mesma identidade já usada nos meus projetos de classe), tipografia Baloo 2 (títulos) + Open Sans (texto), layout limpo em página única (single page) com navegação por seções.

**Conteúdo apresentado:**
- Apresentação pessoal (hero)
- Formação acadêmica
- Competências e conhecimentos técnicos
- Projetos realizados ou em desenvolvimento
- Experiência profissional
- Hobbies e lazer
- Viagens e planos (intercâmbio)
- Formas de contato

**Principais funcionalidades:**
- Navegação fixa com destaque automático da seção visível (scroll spy)
- Filtro de projetos por tecnologia
- Alternância entre modo claro e escuro
- Formulário de contato com validação via JavaScript
- Layout responsivo (computador, tablet e celular)

**Tecnologias utilizadas:** HTML5 semântico, CSS3 (com variáveis de cor), JavaScript puro (vanilla JS), Bootstrap 5 (grid, componentes de navegação e utilitários).

---

## 2. Prompts utilizados

### Prompt 1
- **Objetivo do prompt:** Entender o enunciado oficial da 1ª Entrega e iniciar o planejamento/implementação a partir dele.
- **Texto enviado à IA:** Envio do PDF oficial da atividade ("AC02-polished.pdf") seguido do pedido "faça".
- **Resultado obtido:** A IA identificou que o escopo do projeto documentado anteriormente (portfólio de artigos acadêmicos, com papéis Administrador/Pesquisador/Leitor) não correspondia à especificação oficial (portfólio pessoal sobre o autor, com conteúdo fixo definido pelo enunciado).
- **Análise crítica da resposta:** A divergência de escopo foi identificada corretamente. A IA não presumiu dados pessoais sensíveis (hobbies, viagens) e parou para perguntar antes de gerar conteúdo.
- **Decisão tomada / ajustes:** Confirmei os dados pedidos (hobbies: games; viagens: nenhuma concluída ainda, focar no plano de intercâmbio em Malta; estilo visual: manter a paleta terracota/verde-sálvia já usada nos outros projetos) e pedi para seguir com a implementação.

### Prompt 2
- **Objetivo do prompt:** Definir como tratar a seção "viagens realizadas" do enunciado, já que ainda não tenho viagens concluídas para mostrar.
- **Texto enviado à IA:** Resposta à pergunta de esclarecimento: "Não tenho ainda, focar só no plano de Malta".
- **Resultado obtido:** A seção foi renomeada para "Viagens & Planos" e reformulada para apresentar honestamente o intercâmbio em Malta (2027–2028) como um objetivo futuro, em vez de simular uma viagem já realizada.
- **Análise crítica da resposta:** Essa foi a decisão correta — inventar uma viagem concluída seria informação falsa no portfólio. Adaptar a seção mantém a coerência do enunciado ("outras funcionalidades poderão ser incluídas, desde que coerentes com o objetivo") sem comprometer a veracidade do conteúdo.
- **Decisão tomada / ajustes:** Mantive a adaptação e segui com a implementação do restante do site.

---

## 3. Histórias de usuário

| ID | História |
|---|---|
| US01 | Como visitante, quero visualizar a apresentação pessoal do autor, para saber rapidamente quem ele é. |
| US02 | Como visitante, quero visualizar a formação acadêmica do autor, para entender sua trajetória educacional. |
| US03 | Como visitante, quero visualizar os conhecimentos e competências técnicas do autor, para saber quais tecnologias ele domina. |
| US04 | Como visitante, quero visualizar os projetos realizados ou em desenvolvimento pelo autor, para conhecer exemplos práticos do seu trabalho. |
| US05 | Como visitante, quero visualizar a experiência profissional do autor, para entender sua trajetória de carreira. |
| US06 | Como visitante, quero encontrar as formas de contato do autor, para poder entrar em contato facilmente. |
| US07 | Como visitante, quero conhecer os hobbies do autor, para ter uma visão mais pessoal além da profissional. |
| US08 | Como visitante, quero conhecer os planos de viagem/intercâmbio do autor, para entender seus objetivos internacionais. |
| US09 | Como visitante, quero navegar entre as seções do portfólio facilmente, para encontrar rapidamente a informação que procuro. |
| US10 | Como visitante, quero que o portfólio funcione bem no celular, para poder acessá-lo de qualquer lugar. |
| US11 | Como visitante, quero enviar uma mensagem pelo formulário de contato com feedback imediato de erros, para saber se meu envio foi preenchido corretamente. |
| US12 | Como visitante, quero filtrar os projetos por tecnologia, para encontrar rapidamente exemplos relevantes pra mim. |
| US13 | Como visitante, quero alternar entre modo claro e escuro, para ler o portfólio confortavelmente em qualquer ambiente. |

---

## 4. Critérios de aceitação

**US01 — Apresentação pessoal**
- O portfólio deve apresentar uma seção inicial (hero) com nome, título/ocupação atual e um resumo curto.
- A seção deve permanecer legível em dispositivos móveis.

**US02 — Formação acadêmica**
- Deve existir uma seção "Formação" listando cada formação com instituição, curso e período/status.

**US03 — Competências**
- Deve existir uma seção "Competências" com as tecnologias organizadas por categoria (linguagens, ferramentas, corporativo).
- Cada competência deve ser visualmente identificável (badge/tag).

**US04 — Projetos**
- Deve existir uma seção "Projetos" com cards, cada um contendo título, descrição e tecnologias utilizadas.
- Quando o projeto tiver um link (repositório ou demonstração), o link deve funcionar; quando não houver, nenhum link falso ou botão simulado deve ser exibido.

**US05 — Experiência profissional**
- Deve existir uma seção "Experiência" com pelo menos um cargo, incluindo empresa, período e principais atividades.

**US06 — Contato**
- Deve existir uma seção "Contato" com pelo menos um canal funcional (e-mail, GitHub ou LinkedIn) com link válido.

**US07 — Hobbies**
- Deve existir uma menção clara aos hobbies do autor, com pelo menos uma frase de contexto (não apenas uma palavra solta).

**US08 — Viagens e planos**
- Deve existir uma seção "Viagens & Planos" indicando claramente que se trata de um objetivo futuro (intercâmbio em Malta), sem apresentar como algo já realizado.

**US09 — Navegação**
- Deve existir um menu fixo no topo com links para todas as seções.
- Ao rolar a página, o link da seção visível deve ficar destacado automaticamente (via JavaScript).

**US10 — Responsividade**
- O layout deve se adaptar corretamente em telas de computador, tablet e celular, sem rolagem horizontal.

**US11 — Formulário de contato com validação**
- Ao tentar enviar o formulário com campos obrigatórios vazios ou e-mail inválido, o sistema deve exibir uma mensagem de erro específica via JavaScript, sem recarregar a página.

**US12 — Filtro de projetos**
- Ao clicar em um botão de filtro (ex: "PHP", "JavaScript", "Todos"), apenas os projetos com a tecnologia correspondente devem permanecer visíveis.

**US13 — Modo escuro**
- Ao clicar no botão de alternância, as cores do site devem trocar entre tema claro e escuro, e a preferência deve ser mantida ao recarregar a página.

---

## 5. Priorização MoSCoW

| Prioridade | Histórias | Justificativa |
|---|---|---|
| **Must have** | US01, US02, US03, US04, US05, US06, US07, US08, US09, US10 | São exatamente os conteúdos exigidos no enunciado da atividade ("apresente, de maneira clara e profissional: identificação... formação... competências... projetos... experiências... contato... hobbies... viagens"), além de navegação e responsividade, que são pré-requisitos técnicos obrigatórios. Sem esses itens, a entrega não atende ao objetivo do projeto. |
| **Should have** | US11 | Melhora a experiência de quem quer entrar em contato, mas o contato ainda funciona via link direto (e-mail/GitHub) mesmo sem essa validação extra. |
| **Could have** | US12, US13 | São melhorias de usabilidade e navegação que agregam valor, mas o portfólio cumpre seu objetivo central sem elas. |
| **Won't have now** | Versão em inglês do site; contador regressivo para o intercâmbio em Malta | Ficam fora desta entrega por não serem essenciais ao objetivo desta primeira versão; podem ser avaliadas em entregas futuras do semestre. |

---

## 6. Descrição do MVP

O MVP desta 1ª entrega corresponde a **todo o conteúdo obrigatório do enunciado** (US01 a US10):

- **Necessidades atendidas:** apresentação pessoal, formação, competências, projetos, experiência, contato, hobbies e planos de viagem, todos navegáveis e responsivos.
- **Seções disponíveis:** Início, Formação, Competências, Projetos, Experiência, Hobbies, Viagens & Planos, Contato.
- **Interações implementadas:** menu com destaque automático da seção ativa (scroll spy), menu mobile retrátil (Bootstrap).
- **Histórias que fazem parte do MVP:** US01, US02, US03, US04, US05, US06, US07, US08, US09, US10.
- **O que fica fora desta primeira versão:** validação avançada do formulário de contato (US11), filtro de projetos (US12), modo escuro (US13) — essas ficam para uma próxima iteração, embora US11, US12 e US13 já tenham sido implementadas nesta entrega como incremento além do MVP mínimo.
- **Condição de conclusão do MVP:** o visitante consegue abrir o site, ler todas as seções obrigatórias, navegar entre elas pelo menu, e encontrar pelo menos um canal de contato funcional — em qualquer tamanho de tela.

---

## 7. Backlog acionável

| ID | Item do backlog | História relacionada | Prioridade MoSCoW | Critérios de aceitação | Status |
|---|---|---|---|---|---|
| BL01 | Criar seção de apresentação pessoal (hero) | US01 | Must have | Nome, ocupação e resumo exibidos corretamente e legíveis no celular | Concluído |
| BL02 | Criar seção de formação acadêmica | US02 | Must have | Cada formação lista instituição, curso e período/status | Concluído |
| BL03 | Criar seção de competências técnicas | US03 | Must have | Competências agrupadas por categoria, exibidas como badges | Concluído |
| BL04 | Criar seção de projetos com cards | US04 | Must have | Cada card tem título, descrição, tecnologias; sem links falsos | Concluído |
| BL05 | Criar seção de experiência profissional | US05 | Must have | Cargo, empresa, período e atividades exibidos | Concluído |
| BL06 | Criar seção de contato | US06 | Must have | Pelo menos um canal com link funcional | Concluído |
| BL07 | Criar seção de hobbies | US07 | Must have | Hobby (games) descrito em pelo menos uma frase | Concluído |
| BL08 | Criar seção "Viagens & Planos" | US08 | Must have | Intercâmbio em Malta apresentado claramente como plano futuro | Concluído |
| BL09 | Implementar menu fixo com destaque de seção ativa | US09 | Must have | Link da seção visível recebe destaque visual ao rolar a página | Concluído |
| BL10 | Implementar layout responsivo | US10 | Must have | Sem rolagem horizontal em telas de celular e tablet | Concluído |
| BL11 | Implementar validação do formulário de contato em JS | US11 | Should have | Campos obrigatórios/e-mail inválido geram mensagem de erro sem recarregar a página | Concluído |
| BL12 | Implementar filtro de projetos por tecnologia | US12 | Could have | Clicar em um filtro exibe apenas os projetos daquela tecnologia | Concluído |
| BL13 | Implementar alternância de modo claro/escuro | US13 | Could have | Cores trocam ao clicar no botão e a preferência persiste ao recarregar | Concluído |
