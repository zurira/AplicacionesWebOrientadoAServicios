const inpBuscar = document.getElementById("inpBuscar");
const dateTo = document.getElementById("dateTo");
const dateFrom = document.getElementById("dateFrom");
const container = document.getElementById("container");
const btnBuscar = document.getElementById("btnBuscar");

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
                                <img src="${element.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFhNLjRKHgrAPc6QcPbyLKcqHWmrMS6ZOqg&s'}" class="card-img-top" alt="${data.title}">
                                <p class="card-text">${element.description}</p>
                                <p class="card-text">Medio: ${element.source.name}</p>
                                <p class="card-text">${element.publishedAt}</p>
                                <a href=${element.url} target="_blank" class="card-link">Ver mas</a>
                            </div>
                        </div>`
        container.appendChild(card);
    });

}

const buscarNoticia = async() =>{
    const q = inpBuscar.value;
    const from = dateFrom.value;
    const to = dateTo.value;

    if(q == "" && from == "" && to ==""){
        container.innerHTML = "<p>Debes ingresar al menos 1 parametro</p>";
        return;
    }
    
    let url = `https://newsapi.org/v2/everything?sortBy=popularity&apiKey=94db1efefc9f4cea829aff89fe62b2ca`;
    if (q) {
        url += `&q=${q}`;
    }
    if (from) {
        url += `&from=${from}`;
    }
    if (to) {
        url += `&to=${to}`;
    }

    const response = await fetch(url);
    const data = await response.json();


    if (data.articles && data.articles.length > 0) {

    container.innerHTML = "<h2>Resultados</h2>"

    data.articles.forEach(element=>{
        const card = document.createElement("div");
        card.classList.add("col-md-6");

        card.innerHTML = `<div class="card" style="width: 45rem;">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <img src="${element.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYFhNLjRKHgrAPc6QcPbyLKcqHWmrMS6ZOqg&s'}" class="card-img-top" alt="${data.title}">
                                <p class="card-text">${element.description}</p>
                                <p class="card-text">Medio: ${element.source.name}</p>
                                <p class="card-text">${element.publishedAt}</p>
                                <a href=${element.url} target="_blank" class="card-link">Ver mas</a>
                            </div>
                        </div>`
        container.appendChild(card);

    });
        
    } else{
        container.innerHTML = "<p>No se encontraron noticias.</p>";

    }

}

//obtenerDatos();

btnBuscar.addEventListener("click", buscarNoticia);