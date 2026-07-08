/* =====================================
   SEU COPO BAR & CHOPP
   SCRIPT.JS
===================================== */

// ===============================
// Loader
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 1000);

});

// ===============================
// Menu Mobile
// ===============================

const menuButton = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});

// ===============================
// Navbar Scroll
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(0,0,0,.95)";
        navbar.style.padding = "15px 8%";
        navbar.style.transition = ".4s";

    } else {

        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.padding = "20px 8%";

    }

});

// ===============================
// Scroll Suave
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ===============================
// Botão Voltar ao Topo
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "25px";
topButton.style.bottom = "100px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.cursor = "pointer";
topButton.style.background = "#d4af37";
topButton.style.color = "#000";
topButton.style.fontSize = "22px";
topButton.style.display = "none";
topButton.style.boxShadow = "0 10px 20px rgba(0,0,0,.3)";
topButton.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        topButton.style.display = "block";

    }else{

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Revelar Elementos
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll("section,.card,.testimonial,.photo").forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition=".8s";

    observer.observe(el);

});

// ===============================
// Contador Animado
// ===============================

const numeros = document.querySelectorAll(".numero");

numeros.forEach(numero=>{

    const atualizar=()=>{

        const alvo=+numero.dataset.target;

        const valor=+numero.innerText;

        const incremento=alvo/150;

        if(valor<alvo){

            numero.innerText=Math.ceil(valor+incremento);

            setTimeout(atualizar,15);

        }else{

            numero.innerText=alvo;

        }

    }

    atualizar();

});

// ===============================
// Mensagem Reserva
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Sua solicitação de reserva foi enviada com sucesso! Em breve entraremos em contato.");

form.reset();

});

}

// ===============================
// Relógio Funcionamento
// ===============================

function verificarHorario(){

    const hora = new Date().getHours();

    if(hora >= 17 && hora <= 23){

        console.log("Bar Aberto 🍺");

    }else{

        console.log("Bar Fechado");

    }

}

verificarHorario();

// ===============================
// Ano automático
// ===============================

const ano = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML = `© ${ano} Seu Copo Bar & Chopp - Todos os direitos reservados.`;

}

// ===============================
// Efeito Botões
// ===============================

document.querySelectorAll("button,.btn-primary,.btn-secondary").forEach(botao=>{

botao.addEventListener("mouseenter",()=>{

botao.style.transform="scale(1.05)";

});

botao.addEventListener("mouseleave",()=>{

botao.style.transform="scale(1)";

});

});

// ===============================
// Console
// ===============================

console.log("🍺 Sistema Seu Copo Bar & Chopp carregado com sucesso!");
