# Portfólio Pessoal — Taynná Viana Noronha

Portfólio pessoal desenvolvido para a disciplina de Desenvolvimento Full Stack. Este repositório contém duas etapas:

- **1ª Entrega** — planejamento e implementação do portfólio (tag `v1`).
- **Correção de Design com Impeccable** — diagnóstico e melhorias aplicadas sobre o v1, produzindo o `v2` (branch `v2`, também mesclado na `main`).

## Aluna
- **Nome:** Taynná Viana Noronha
- **Curso:** Análise e Desenvolvimento de Sistemas — IFSP Guarulhos

## Tecnologias utilizadas
- HTML5 (semântico)
- CSS3 (variáveis de cor, media queries)
- JavaScript puro (vanilla JS)
- Bootstrap 5 (grid, navbar, componentes utilitários)

Nenhum outro framework/biblioteca de interface foi utilizado, conforme exigido pelo enunciado da 1ª Entrega.

## Como executar
Não é necessário servidor nem instalação — é um site 100% estático.

1. Baixe/extraia a pasta `portfolio`
2. Dê duplo clique em `index.html` para abrir no navegador

(Também funciona normalmente se hospedado em qualquer servidor estático, como GitHub Pages, Vercel ou Netlify.)

## Versões (v1 → v2)
- **Tag `v1`**: estado do portfólio ao final da 1ª Entrega, preservado intacto.
- **Branch `v2`**: versão corrigida após a atividade de correção de design com o Impeccable.

```
git checkout v1   # ver a versão original
git checkout v2   # ver a versão corrigida (ou main, que recebeu o merge)
git log --oneline # ver o histórico de mudanças entre as duas
```

## Estrutura do repositório
```
portfolio/
├── index.html                    # portfólio (1ª Entrega, já com as correções da v2)
├── css/style.css                 # estilos do portfólio
├── css/impeccable.css            # estilos das páginas extra (catálogo + registros)
├── js/script.js
├── docs/documentacao.md          # documentação da 1ª Entrega (histórias, MVP, backlog...)
├── impeccable-catalogo.html      # catálogo dos 23 comandos do Impeccable
└── registros/                    # 15 registros de aplicação (problema → hipótese → comando → prompt → resultado)
    ├── index.html
    └── r01-init.html ... r15-extract.html
```

## Resumo das funcionalidades
- Navegação fixa com destaque automático da seção visível (scroll spy)
- Seções: Início, Formação, Competências, Projetos, Experiência, Hobbies & Viagens, Contato
- Filtro de projetos por tecnologia
- Alternância entre modo claro e escuro (com preferência salva, sem flash de tema ao carregar)
- Formulário de contato com validação em JavaScript
- Layout responsivo (computador, tablet e celular)
- Link "pular para o conteúdo" e foco visível em todos os elementos interativos (acessibilidade de teclado)

## Correção de Design (Impeccable)
- **Catálogo completo dos 23 comandos**: [`impeccable-catalogo.html`](impeccable-catalogo.html)
- **15 registros de aplicação** (problema observado, hipótese, comando, prompt, resultado): [`registros/index.html`](registros/index.html)
- Comandos aplicados: `init`, `document`, `extract`, `shape`, `critique`, `audit`, `colorize`, `typeset`, `layout`, `distill`, `quieter`, `harden`, `optimize`, `polish`, `live` (15 comandos distintos)

## Documentação completa (1ª Entrega)
Ver [`docs/documentacao.md`](docs/documentacao.md) para definição do projeto, prompts utilizados, histórias de usuário, critérios de aceitação, priorização MoSCoW, descrição do MVP e backlog acionável.

## Link da versão publicada
*(adicionar aqui, se solicitado pelo professor)*
