(function () {

    const topo = document.getElementById("header");
    const botao = document.querySelector(".menu-btn");

    if (!topo || !botao) return;

    // clicar no hamburguer abre o menu
    botao.addEventListener("click", (evento) => {
        evento.stopPropagation();
        topo.classList.add("flotante");
    });

    // clicar fora fecha o menu (só quando a página está no topo)
    document.addEventListener("click", (evento) => {

        if (window.scrollY <= 100 && !topo.contains(evento.target)) {
            topo.classList.remove("flotante");
        }

    });

})();