// Nav responsiva 

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){
        header.classList.add("flotante");
    }else{
        header.classList.remove("flotante");
    }

});

// Main content abaixo

const perguntas = document.querySelectorAll(".pergunta");

perguntas.forEach(pergunta => {

    pergunta.addEventListener("click", () => {

        const cardAtual = pergunta.parentElement;

        document
        .querySelectorAll(".curiosidade")
        .forEach(card => {
            card.classList.remove("ativa");
        });
        cardAtual.classList.add("ativa");
    });

});