function pesquisar() {

    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById 
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar algo relacionado ao Alzheimer</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let title= ""; 
    let sinopse = "";
    let link = "";


    // Itera sobre cada artigo na lista de artigos
    for (let dado of artigos) {
            title= dado.title.toLowerCase()
            sinopse = dado.sinopse.toLowerCase()
            link = dado.link.toLowerCase()
        // se titulo includes campoPesquisa
        if (title.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || link.includes(campoPesquisa)) {
            // Constrói o HTML para cada item de resultado da pesquisa, 
            // incluindo o título, sinopse e link para mais informações
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.title}</a>
                </h2>
                <p class="descricao-meta">${dado.sinopse}</p>
                <a href=${dado.link} target="_blank">Saiba Mais</a>
            </div>
        `;
        } 
       
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }


    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}