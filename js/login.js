// receber os dados do formulario
// verificar no banco de dados, se o login existe
    // 
// liberar o acesso à pagina

let bdLogin = []

// função para criar o login
const CriarLogin = (event) => {
    event.preventDefault()
    const DadosFormNovo = new FormData(event.target)

    const user = DadosFormNovo.get("NovoUsuario")
    const password = DadosFormNovo.get("NovaSenha")
    
    const NovoAcesso = {
        user,
        password
    }

    const AcessoExiste = bdLogin.find((acesso) => {
        return acesso.user == NovoAcesso.user
    })

    if (AcessoExiste) {
        return alert("Login ja existe!!")
    } 

    bdLogin = [NovoAcesso, ...bdLogin]
    console.log("Novo acesso criado", NovoAcesso)
    
    event.target.reset()
}

// função para verificar os dados e fazer login
const FazerLogin = (event) => {
    event.preventDefault()
    const DadosForm = new FormData(event.target)

    let user = DadosForm.get("usuario")
    let password = DadosForm.get("senha")

    console.log(user)
    console.log(password)

    let loginSucesso = false

    for (let i = 0; i < bdLogin.length; i++) {

        if (user == bdLogin[i].user && password == bdLogin[i].password) {
            loginSucesso = true
            break
        }
    }

    if (loginSucesso == true) {
        console.log("Login efetuado com sucesso!")
        window.location.href = "index2.html"
    } else {
        console.log("Usuario ou senha incorreto")
    }
}





