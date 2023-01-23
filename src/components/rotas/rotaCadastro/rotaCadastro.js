import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

// Rotas das estilizações
import Input from "../../componentsStyled/Input"
import Screen from "../../componentsStyled/Screen"
import Title from "../../componentsStyled/Title"
import Form from "../../componentsStyled/Form"
import Button from "../../componentsStyled/Button"
import SignIn from "../../componentsStyled/SignIn"

export default function Cadastro() {
    const nav = useNavigate();
    const [cliente, especifCliente] = useState({name: "", email: "", password: "",});
    const [descadastrar, especifDescadastrar] = useState(false);
    function submitForm(param) {
        param.preventDefault();
        especifDescadastrar(true);
        axios.post("http://localhost:5000/cadastro", cliente)
        .then((resp) => {
                alert("Cadastro concluído! Agora faça o login.");
                nav("/");
            })
            .catch((error) => {
                alert("Erro ao cadastrar");
                limparTudo();
                especifDescadastrar(false);
            });
    }
    function limparTudo() {
        especifCliente({name: "", email: "", password: "",});
    }

    return (
        <Screen>
            <Title>MyWallet</Title>
            <Form onSubmit={submitForm}>
                <Input
                    name="nome" type="text" placeholder="Nome" value={cliente.name}
                    onChange={(param) =>
                        especifCliente({ ...cliente, name: param.target.value })
                    }
                    descadastrar={descadastrar}
                    required
                />
                <Input
                    name="email" type="email" placeholder="E-mail" value={cliente.email}
                    onChange={(param) =>
                        especifCliente({ ...cliente, email: param.target.value })
                    }
                    descadastrar={descadastrar}
                    required
                />
                <Input
                    name="password" type="password" placeholder="Senha" value={cliente.password}
                    onChange={(param) =>
                        especifCliente({
                            ...cliente,
                            password: param.target.value,
                        })
                    }
                    descadastrar={descadastrar}
                    required
                />
                <Button descadastrar={descadastrar}> {descadastrar ? <BeatLoader color="#FFFFFF" /> : "Cadastrar"}</Button>
            </Form>
            <Link to="/">
                <SignIn>Já tem uma conta?<strong> Entre agora!</strong></SignIn>
            </Link>
        </Screen>
    );
}
