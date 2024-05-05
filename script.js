function Procurar() {
    let pais = document.querySelector("#pais").value;
    let finalUrl = `https://restcountries.com/v3.1/name/${pais}`
    console.log(finalUrl)

    fetch(finalUrl)
        .then(function (responde) {
            if (!responde.ok) {
                throw new Error('País não encontrado');
            }
            return responde.json()
        })
        .then(function (data) {
            if (data && data[0]) {
                console.log(data[0])
                console.log(data[0].population)
                console.log(data[0].capital[0])
                console.log(data[0].continents[0])

                let bandeira = document.querySelector("#bandeira")
                let nome = document.querySelector("#nome")
                let capital = document.querySelector("#capital")
                let pop = document.querySelector("#pop")
                let cont = document.querySelector("#cont")

                nome.innerHTML = pais
                capital.innerHTML = data[0].capital[0]
                cont.innerHTML = data[0].continents[0]
                pop.innerHTML = data[0].population

                // Cria um novo elemento de imagem
                let img = document.createElement('img');
                bandeira.src = data[0].flags.svg; // Define o atributo src para a URL da bandeira
                bandeira.alt = 'Bandeira do país'; // Adiciona um texto alternativo para a imagem
                bandeira.style.width = '100%'; // Define a largura da imagem para se ajustar ao elemento pai
                bandeira.innerHTML = ''; // Limpa qualquer conteúdo existente
                bandeira.appendChild(img); // Adiciona a nova imagem ao elemento bandeira
            }
        })
        .catch(function(error) {
            alert(error.message);
        });
}

document.querySelector("input").addEventListener("keyup", (event) => {
    // Número 13 é a tecla "Enter"
    if (event.keyCode === 13) {
        // Cancela a ação padrão, se necessário
        event.preventDefault();
        // Chama a função
        Procurar();
    }
});


