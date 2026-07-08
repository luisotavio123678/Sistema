// ========================================
// Enterprise System
// script.js
// ========================================

// Contadores do Dashboard
const dados = {
    clientes: 1280,
    funcionarios: 86,
    estoque: 452,
    financeiro: 987650
};

function animarNumero(id, valor, prefixo = "", sufixo = "") {
    const elemento = document.getElementById(id);
    if (!elemento) return;

    let atual = 0;
    const incremento = Math.max(1, Math.ceil(valor / 120));

    const intervalo = setInterval(() => {
        atual += incremento;

        if (atual >= valor) {
            atual = valor;
            clearInterval(intervalo);
        }

        if (id === "financeiro") {
            elemento.innerHTML =
                prefixo +
                atual.toLocaleString("pt-BR") +
                sufixo;
        } else {
            elemento.innerHTML =
                prefixo +
                atual +
                sufixo;
        }

    }, 15);
}

window.addEventListener("load", () => {

    animarNumero("clientes", dados.clientes);

    animarNumero("funcionarios", dados.funcionarios);

    animarNumero("estoque", dados.estoque);

    animarNumero("financeiro", dados.financeiro, "R$ ");

});

// ========================================
// Tema Escuro
// ========================================

const themeButton = document.getElementById("themeButton");

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
    document.body.classList.add("dark");

    if (themeButton) {
        themeButton.innerHTML =
            '<i class="fa-solid fa-sun"></i>';
    }
}

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        const escuro =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "tema",
            escuro ? "dark" : "light"
        );

        themeButton.innerHTML = escuro
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';

    });

}

// ========================================
// Pesquisa na tabela
// ========================================

const pesquisa = document.querySelector(".search input");

if (pesquisa) {

    pesquisa.addEventListener("keyup", function () {

        const texto = this.value.toLowerCase();

        const linhas = document.querySelectorAll("#tableClients tr");

        linhas.forEach((linha) => {

            const conteudo =
                linha.innerText.toLowerCase();

            linha.style.display =
                conteudo.includes(texto)
                    ? ""
                    : "none";

        });

    });

}

// ========================================
// Notificação
// ========================================

function criarNotificacao(mensagem) {

    const aviso = document.createElement("div");

    aviso.className = "notification";

    aviso.innerHTML = mensagem;

    document.body.appendChild(aviso);

    setTimeout(() => {

        aviso.classList.add("show");

    }, 100);

    setTimeout(() => {

        aviso.classList.remove("show");

        setTimeout(() => {

            aviso.remove();

        }, 400);

    }, 3500);

}

window.addEventListener("load", () => {

    setTimeout(() => {

        criarNotificacao("✅ Sistema iniciado com sucesso.");

    }, 800);

});

// ========================================
// Relógio
// ========================================

function atualizarTitulo() {

    const agora = new Date();

    document.title =
        agora.toLocaleTimeString("pt-BR") +
        " • Enterprise System";

}

setInterval(atualizarTitulo, 1000);

// ========================================
// Saudação
// ========================================

const hora = new Date().getHours();

let saudacao = "Bem-vindo!";

if (hora < 12) {

    saudacao = "Bom dia!";

} else if (hora < 18) {

    saudacao = "Boa tarde!";

} else {

    saudacao = "Boa noite!";

}

console.log(saudacao + " Sistema carregado com sucesso.");

// ========================================
// Cards animados
// ========================================

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});

// ========================================
// Final
// ========================================

console.log("Enterprise System 2026");
