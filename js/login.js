import data from '../data.json' assert{'type': 'json'}

const btnSubmit = document.getElementById('login')

btnSubmit.addEventListener('click', (event) => {
    const inputUser = document.getElementById('user').value
    const inputPassword = document.getElementById('password').value
    event.preventDefault()

    const login = data.find((obj) => obj.usuario === inputUser && obj.senha === inputPassword)

    if (login) {
        window.location = '../index.html'
    } else {
        alert('Usuário não encontrado')
    }
    
    console.log(login)
})



