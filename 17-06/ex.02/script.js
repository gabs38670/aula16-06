const artistas = ["Inês Brasil", "Grechen", "Andressa Urach",
   "Valesca Popuzuda", "MC Mirella", "Anitta", "Pablo Vittar",
   "Ludmilla", "Lexa", "Jojo Todynho"];

// 1 - laço for
for (let i = 0; i < artistas.length; i++) {
   document.getElementById("lista1").innerHTML += "<li>" + artistas[i] + "</li>";
}

let i = 0;
while (i < artistas.length) {
   document.getElementById("lista2").innerHTML += "<li>" + artistas[i] + "</li>";
   i++;
}

let j = 0;
do {
    document.getElementById("lista3").innerHTML += "<li>" + artistas[j] + "</li>";
    j++;
} while (j < artistas.length);

artistas.forEach(function (artista) {
    document.getElementById("lista4").innerHTML += "<li>" + artista + "</li>";
});