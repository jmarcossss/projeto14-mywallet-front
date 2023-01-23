import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import Input from "../../componentsStyled/Input"
import Screen from "../../componentsStyled/Screen"
import Title from "../../componentsStyled/Title"
import Form from "../../componentsStyled/Form"
import Button from "../../componentsStyled/Button"
import SignIn from "../../componentsStyled/SignIn"

export default function Cadastro() {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setNewUser({
            name: "",
            email: "",
            password: "",
        });
    }

    function submitForm(e) {
        e.preventDefault();

        setDisabled(true);

        axios
            .post("http://localhost:5000/cadastro", newUser)
            .then((ans) => {
                alert("Cadastro concluído! Agora faça o login.");
                navigate("/");
            })
            .catch((err) => {
                alert("Fala no cadastro! Tente novamente");
                clearInputs();
                setDisabled(false);
            });
    }

    return (
        <Screen>
            <Title>MyWallet</Title>
            <Form onSubmit={submitForm}>
                <Input
                    name="nome"
                    type="text"
                    placeholder="Nome"
                    value={newUser.name}
                    onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                    }
                    disabled={disabled}
                    required
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={newUser.email}
                    onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                    }
                    disabled={disabled}
                    required
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Senha"
                    value={newUser.password}
                    onChange={(e) =>
                        setNewUser({
                            ...newUser,
                            password: e.target.value,
                        })
                    }
                    disabled={disabled}
                    required
                />
                {/* <Input
                    name="passwordConfirm"
                    type="password"
                    placeholder="Confirme a senha"
                    value={newUser.passwordConfirm}
                    onChange={(e) =>
                        setNewUser({
                            ...newUser,
                            passwordConfirm: e.target.value,
                        })
                    }
                    disabled={disabled}
                    required
                /> */}
                <Button disabled={disabled}>
                    {disabled ? <BeatLoader color="#FFFFFF" /> : "Cadastrar"}
                </Button>
            </Form>
            <Link to="/">
                <SignIn>
                    Já tem uma conta? <strong>Entre agora!</strong>
                </SignIn>
            </Link>
        </Screen>
    );
}
