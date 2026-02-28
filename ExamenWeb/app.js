const inpBuscar = document.getElementById("inpBuscar");
const dateTo = document.getElementById("dateTo");
const dateFrom = document.getElementById("dateFrom");
const container = document.getElementById("container");

const obtenerDatos = async() => {
    const response = await fetch("https://newsapi.org/v2/everything?q=apple&from=2026-02-22&to=2026-02-22&sortBy=popularity&apiKey=94db1efefc9f4cea829aff89fe62b2ca");
    console.log(response);
    const data = await response.json();
    console.log(data);

    container.innerHTML = "<h2>Todas las noticias</h2>"

    data.articles.forEach(element=>{
        const card = document.createElement("div");
        card.classList.add("col-md-6");

        card.innerHTML = `<div class="card" style="width: 45rem;">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <img src="${element.urlToImage}" class="card-img-top" alt="${data.title}">
                                <p class="card-text">${element.description}</p>
                                <p class="card-text">Medio: ${element.source.name}</p>
                                <p class="card-text">${element.publishedAt}</p>
                                <a href=${element.url} class="card-link">Ver mas</a>
                            </div>
                        </div>`
        container.appendChild(card);
    });

}

obtenerDatos();