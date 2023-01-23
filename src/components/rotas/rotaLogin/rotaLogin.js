// IMports padrões
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/user.context";

// Algumas animações
import BeatLoader from "react-spinners/BeatLoader";

// Importando os componentes do css do Login
import Input from "./componentsLogin/Input"
import Screen from "./componentsLogin/Screen"
import Title from "./componentsLogin/Title"
import Form from "./componentsLogin/Form"
import Button from "./componentsLogin/Button"
import SignUp from "./componentsLogin/SignUp"

export default function Login() {
    const nav = useNavigate();
    const { setLoggedUser } = useContext(UserContext);
    const [cliente, setUser] = useState({
        email: "",
        password: "",
    });
    const [disabled, setDisabled] = useState(false);

    function limparTudo() {
        setUser({
            email: "",
            password: "",
        });
    }

    function cadastraTudo(param) {
        param.preventDefault();
        setDisabled(true);
        axios.post("http://localhost:5000/cadastro", cliente)
        // Caso o usuário consiga se conectar, ele consegue ir para a prox página
        axios.then((ans) => {
                window.localStorage.setItem("user", JSON.stringify(ans.data));
                setLoggedUser(ans.data);
                alert("Bem vindo " + ans.data.username);
                nav("/home");
            })
            .catch((err) => {
                alert("Email ou senha incorretos! Tente novamente.");
                limparTudo();
                setDisabled(false);
            });
    }

    return (
        <Screen>
            <Title>MyWallet</Title>
            <Form onSubmit={cadastraTudo}>
                <Input
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    value={cliente.email}
                    onChange={(param) =>
                        setUser({ ...cliente, email: param.target.value })
                    }
                    disabled={disabled}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={cliente.password}
                    onChange={(param) =>
                        setUser({ ...cliente, password: param.target.value })
                    }
                    disabled={disabled}
                    required
                />
                <Button disabled={disabled}>
                    {disabled ? <BeatLoader color="#FFFFFF" /> : "Entrar"}
                </Button>
            </Form>
            <Link to="/cadastro">
                <SignUp>
                    Primeira vez?Cadastre-se
                </SignUp>
            </Link>
        </Screen>
    );
}
