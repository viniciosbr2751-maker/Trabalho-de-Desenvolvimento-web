// Nav responsiva 

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){
        header.classList.add("flotante");
    }else{
        header.classList.remove("flotante");
    }

});

// galeria abaixo

function filtrar(tipo){

    const itens =
    document.querySelectorAll(".item");

    itens.forEach(item => {

        if(
            tipo === "todos" ||
            item.classList.contains(tipo)
        ){
            item.style.display = "block";
        }

        else{
            item.style.display = "none";
        }

    });

}