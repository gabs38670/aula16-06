const artista = ["Inês Brasil", "Grechen", "Andressa Urach",
    "Valesca Popuzuda", "MC Mirella", "Anitta", "Pablo Vittar",
    "Ludmilla", "Lexa", "Jojo Todynho"];

    // 1 - laço for
    for (let i = 0; i < artista.length; i++){
       document.getElementById("lista1").innerHTML += "<li>" + artista[i] + "</li>";
    }