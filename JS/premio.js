// Nav responsiva

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){
        header.classList.add("flotante");
    }else{
        header.classList.remove("flotante");
    }

});

// DADOS DOS PREMIOS
// tipo: "premio" (ganhou) ou "indicacao" (foi indicado)
// grupo: true quando o prêmio foi do BTS e não só do Yoongi

const premios = {

    yoongi: [

        {
            ano: "2016",
            titulo: "Artista do Ano - MAMA",
            detalhe: "Prêmio principal do Mnet Asian Music Awards, conquistado pelo BTS.",
            tipo: "premio",
            grupo: true
        },

        {
            ano: "2017",
            titulo: "Hot Trend Award - Melon Music Awards",
            detalhe: "Pela produção da música Wine, da cantora Suran.",
            tipo: "premio",
            grupo: false
        },

        {
            ano: "2017",
            titulo: "Música do Ano - Melon Music Awards",
            detalhe: "Spring Day, do BTS.",
            tipo: "premio",
            grupo: true
        },

        {
            ano: "2017",
            titulo: "Artista do Ano - MAMA",
            detalhe: "O BTS ganhou o prêmio pelo segundo ano seguido.",
            tipo: "premio",
            grupo: true
        },

        {
            ano: "2017 a 2021",
            titulo: "Top Social Artist - Billboard Music Awards",
            detalhe: "Cinco anos seguidos como artista mais engajado nas redes sociais.",
            tipo: "premio",
            grupo: true
        },

        {
            ano: "2018",
            titulo: "Ordem do Mérito Cultural",
            detalhe: "Condecoração do governo da Coreia do Sul entregue ao BTS.",
            tipo: "premio",
            grupo: true
        },

        {
            ano: "2019",
            titulo: "Música do Ano - Melon Music Awards",
            detalhe: "Boy With Luv, do BTS.",
            tipo: "premio",
            grupo: true
        },

        {
            ano: "2020",
            titulo: "Melhor Colaboração - MAMA",
            detalhe: "Pela música Eight, em parceria com a cantora IU.",
            tipo: "premio",
            grupo: false
        },

        {
            ano: "2021",
            titulo: "Artista do Ano - American Music Awards",
            detalhe: "O BTS foi o primeiro grupo asiático a ganhar esse prêmio.",
            tipo: "premio",
            grupo: true
        },

        {
            ano: "2021 e 2022",
            titulo: "Grammy - Melhor Performance de Dupla/Grupo Pop",
            detalhe: "Indicações do BTS com Dynamite e Butter.",
            tipo: "indicacao",
            grupo: true
        }

    ],

    iverson: [

        {
            ano: "1997",
            titulo: "Rookie do Ano (NBA)",
            detalhe: "Melhor novato da temporada, logo depois de ser o número 1 do Draft.",
            tipo: "premio"
        },

        {
            ano: "1999",
            titulo: "Cestinha da NBA",
            detalhe: "Primeiro dos 4 títulos de maior pontuador da liga (1999, 2001, 2002 e 2005).",
            tipo: "premio"
        },

        {
            ano: "2000 a 2010",
            titulo: "All-Star Game",
            detalhe: "Foi escolhido para o jogo das estrelas 11 vezes.",
            tipo: "premio"
        },

        {
            ano: "2001",
            titulo: "MVP da temporada",
            detalhe: "Melhor jogador da NBA, levando o Philadelphia 76ers até a final.",
            tipo: "premio"
        },

        {
            ano: "2001 e 2005",
            titulo: "MVP do All-Star Game",
            detalhe: "Melhor jogador do jogo das estrelas em duas edições.",
            tipo: "premio"
        },

        {
            ano: "2001 a 2003",
            titulo: "Líder de roubos de bola",
            detalhe: "Foi o jogador com mais roubos de bola por jogo três vezes (2001, 2002 e 2003).",
            tipo: "premio"
        },

        {
            ano: "1999, 2001 e 2005",
            titulo: "Primeiro Time da NBA (All-NBA)",
            detalhe: "Escolhido entre os cinco melhores jogadores da temporada.",
            tipo: "premio"
        },

        {
            ano: "2004",
            titulo: "Medalha de bronze nas Olimpíadas",
            detalhe: "Conquistada com a seleção dos Estados Unidos em Atenas.",
            tipo: "premio"
        },

        {
            ano: "2014",
            titulo: "Camisa 3 aposentada",
            detalhe: "O Philadelphia 76ers aposentou o número que ele usava.",
            tipo: "premio"
        },

        {
            ano: "2016",
            titulo: "Hall da Fama do Basquete",
            detalhe: "Entrada no Naismith Memorial Basketball Hall of Fame.",
            tipo: "premio"
        },

        {
            ano: "2021",
            titulo: "Time dos 75 anos da NBA",
            detalhe: "Escolhido entre os 75 maiores jogadores da história da liga.",
            tipo: "premio"
        }

    ]

};

// MONTA A LISTA NA TELA

function mostrarPremios(pessoa, idLista, idContador){

    const lista = document.getElementById(idLista);

    let total = 0;

    premios[pessoa].forEach(item => {

        const card = document.createElement("div");

        card.classList.add("premio");

        // indicação não entra na contagem de prêmios
        if(item.tipo === "indicacao"){
            card.classList.add("indicacao");
        }else{
            total++;
        }

        // etiqueta mostra se foi do grupo ou só dele
        let etiqueta = "";

        if(item.tipo === "indicacao"){
            etiqueta = '<span class="etiqueta">Indicação</span>';
        }else if(item.grupo === true){
            etiqueta = '<span class="etiqueta">BTS</span>';
        }else if(item.grupo === false){
            etiqueta = '<span class="etiqueta">Individual</span>';
        }

        card.innerHTML = `
            <p class="ano">${item.ano}</p>
            <p class="titulo">${item.titulo}</p>
            <p class="detalhe">${item.detalhe}</p>
            ${etiqueta}
        `;

        lista.appendChild(card);

    });

    document.getElementById(idContador).textContent =
        total + " prêmios e conquistas";

}

mostrarPremios("yoongi", "listaYoongi", "contadorYoongi");
mostrarPremios("iverson", "listaIverson", "contadorIverson");
