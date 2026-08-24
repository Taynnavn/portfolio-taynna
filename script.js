document.addEventListener('DOMContentLoaded', () => {

    /* ===== 1. Menu com destaque automático da seção visível (scroll spy) ===== */
    const secoes = document.querySelectorAll('main section[id]');
    const linksNav = document.querySelectorAll('#lista-nav a[data-secao]');

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                const idAtual = entrada.target.getAttribute('id');
                linksNav.forEach(link => {
                    link.classList.toggle('ativo', link.dataset.secao === idAtual);
                });
            }
        });
    }, { rootMargin: '-45% 0px -45% 0px' });

    secoes.forEach(secao => observador.observe(secao));

    // Fecha o menu mobile ao clicar em um link
    const menuColapsavel = document.getElementById('menuNav');
    linksNav.forEach(link => {
        link.addEventListener('click', () => {
            if (menuColapsavel.classList.contains('show')) {
                bootstrap.Collapse.getInstance(menuColapsavel)?.hide();
            }
        });
    });


    /* ===== 2. Filtro de projetos por tecnologia ===== */
    const botoesFiltro = document.querySelectorAll('.btn-filtro');
    const itensProjeto = document.querySelectorAll('.item-projeto');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            botoesFiltro.forEach(b => b.classList.remove('ativo'));
            botao.classList.add('ativo');

            const filtro = botao.dataset.filtro;

            itensProjeto.forEach(item => {
                const tecnologias = item.dataset.tecnologias || '';
                const corresponde = filtro === 'todos' || tecnologias.includes(filtro);
                item.querySelector('.card-projeto').classList.toggle('escondido', !corresponde);
            });
        });
    });


    /* ===== 3. Alternância de modo claro/escuro (com preferência salva) ===== */
    const btnTema = document.getElementById('btn-tema');
    const body = document.body;
    const temaSalvo = localStorage.getItem('portfolio-tema');

    if (temaSalvo === 'escuro') {
        body.setAttribute('data-tema', 'escuro');
        btnTema.textContent = '☀️ Modo claro';
    }

    btnTema.addEventListener('click', () => {
        const temaAtual = body.getAttribute('data-tema');
        const novoTema = temaAtual === 'escuro' ? 'claro' : 'escuro';

        body.setAttribute('data-tema', novoTema);
        localStorage.setItem('portfolio-tema', novoTema);
        btnTema.textContent = novoTema === 'escuro' ? '☀️ Modo claro' : '🌙 Modo escuro';
    });


    /* ===== 4. Validação do formulário de contato ===== */
    const formContato = document.getElementById('form-contato');
    const feedbackForm = document.getElementById('feedback-form');

    function validarEmail(valor) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    }

    formContato.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let valido = true;

        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');

        const erroNome = document.getElementById('erro-nome');
        const erroEmail = document.getElementById('erro-email');
        const erroMensagem = document.getElementById('erro-mensagem');

        erroNome.textContent = '';
        erroEmail.textContent = '';
        erroMensagem.textContent = '';
        feedbackForm.textContent = '';

        if (nome.value.trim().length < 2) {
            erroNome.textContent = 'Digite seu nome completo.';
            valido = false;
        }

        if (!validarEmail(email.value.trim())) {
            erroEmail.textContent = 'Digite um e-mail válido.';
            valido = false;
        }

        if (mensagem.value.trim().length < 10) {
            erroMensagem.textContent = 'Escreva uma mensagem com pelo menos 10 caracteres.';
            valido = false;
        }

        if (valido) {
            feedbackForm.style.color = '#2E7D32';
            feedbackForm.textContent = 'Mensagem validada! (envio real depende de um backend, fora do escopo desta entrega)';
            formContato.reset();
        } else {
            feedbackForm.style.color = '#C0392B';
            feedbackForm.textContent = 'Corrija os campos destacados acima.';
        }
    });

});
