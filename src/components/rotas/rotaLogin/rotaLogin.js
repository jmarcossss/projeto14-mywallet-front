// IMports padrões
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import axios from "axios"
import UserContext from "../../contexts/user.context"

// Algumas animações
import BeatLoader from "react-spinners/BeatLoader"

// Importando os componentes do css do Login
import Input from "../../componentsStyled/Input"
import Screen from "../../componentsStyled/Screen"
import Title from "../../componentsStyled/Title"
import Form from "../../componentsStyled/Form"
import Button from "../../componentsStyled/Button"
import SignUp from "../../componentsStyled/SignUp"

export default function Login() {
    const nav = useNavigate()
    const { setLoggedUser } = useContext(UserContext)
    const [cliente, especifCliente] = useState({email: "", password: "", })
    const [descadastrar, especifDescadastrar] = useState(false)

    function cadastraTudo(param) {
        param.preventDefault()
        especifDescadastrar(true)
        axios.post("http://localhost:5000/cadastro", cliente)
        // Caso o usuário consiga se conectar, ele consegue ir para a prox página
        .then((resp) => {
                window.localStorage.setItem("user", JSON.stringify(resp.data))
                setLoggedUser(resp.data)
                alert("Bem vindo " + resp.data.username)
                nav("/home")
            })
            .catch((error) => {
                alert("Email e/ou senha estão errados")
                limparTudo()
                especifDescadastrar(false)
            })
    }

    function limparTudo() {
        especifCliente({email: "", password: "",})
    }

    return (
        <Screen>
        <Title>MyWallet</Title>
            <Form onSubmit={cadastraTudo}>
                <Input
                    name = "email" type = "text" placeholder = "E-mail" value={cliente.email}
                    onChange={(param) => especifCliente({...cliente, email: param.target.value})}
                    descadastrar={descadastrar}
                    required
                />
                <Input
                    name = "password" type = "password" placeholder = "Senha" value={cliente.password}
                    onChange={(param) =>
                        especifCliente({ ...cliente, password: param.target.value})
                    }
                    descadastrar={descadastrar}
                    required
                />
                <Button descadastrar={descadastrar}>{descadastrar ? <BeatLoader color="#FFFFFF" /> : "Entrar"}</Button>
            </Form>
            <Link to="/cadastro">
                <SignUp>Primeira vez?<strong> Cadastre-se!</strong></SignUp>
            </Link>
        </Screen>
    )
}
