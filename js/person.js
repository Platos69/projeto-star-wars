document.addEventListener("DOMContentLoaded", () => {
    const urlParam = new URLSearchParams(window.location.search)
    const indexPersona = urlParam.get('index')

    const imgPersona = document.querySelector('.personagem-img')
    imgPersona.src = `../image/perso${indexPersona}.png`

    urlPersona = `https://swapi.dev/api/people/${indexPersona}`

    fetch(urlPersona)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro de rede! Código: ${response.status}`)
            }
            return response.json() //precisa do return
        })
        .then((data) => {
            renderizarPersonagens(data)
        })
        .catch((err) => console.log(err))
})

let renderizarPersonagens = (array) => {
    const nome = document.querySelector('.nome')
    const altura = document.querySelector('.altura')
    const peso = document.querySelector('.peso')
    const genero = document.querySelector('.genero')
    const corCabelo = document.querySelector('.cor_cabelo')
    const corOlho = document.querySelector('.cor_olho')
    const corPele = document.querySelector('.cor_pele')
    const dataNascimento = document.querySelector('.data_nascimento')

    nome.innerHTML = `${array.name}`
    altura.innerHTML = `${array.height}`
    peso.innerHTML = `${array.mass}`
    genero.innerHTML = `${array.gender}`
    corCabelo.innerHTML = `${array.hair_color}`
    corOlho.innerHTML = `${array.eye_color}`
    corPele.innerHTML = `${array.skin_color}`
    dataNascimento.innerHTML = `${array.birth_year}`
}