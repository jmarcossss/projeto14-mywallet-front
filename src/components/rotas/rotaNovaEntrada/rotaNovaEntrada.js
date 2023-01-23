import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/user.context";
import BeatLoader from "react-spinners/BeatLoader";

//Rotas das estilizações
import Screen4 from "../../componentsStyled/Screen4"
import Title4 from "../../componentsStyled/Title4"
import Form from "../../componentsStyled/Form"
import Input from "../../componentsStyled/Input"
import Button from "../../componentsStyled/Button"

export default function NovaEntrada() {
    const nav = useNavigate();
    const { cliente } = useContext(UserContext);
    const [descadastrar, especDescadastrar] = useState(false);
    const [entry, setEntry] = useState({ type: "entry", value: "", description: "", });

    function submitForm(param) {
        param.preventDefault();
        especDescadastrar(true);
        const config = { headers: { Authorization: "Bearer " + cliente.token, }, };
        // Solicitação da conexão
        axios.post("http://localhost:5000/transactions", entry, config)
        // Se a solicitação for OK, então cadastra
            .then((ans) => {
                alert(
                    cliente.username +
                        ", Sua entrada foi cadastrada com sucesso!"
                );
                nav("/home");
            })
            //Se não, dá erro
            .catch((err) => {
                alert(cliente.username + "Erro ao cadastrar sua entrada! Tente novamente.")
                limpaTudo();
                especDescadastrar(false);
            });
    }

    function limpaTudo() {
        setEntry({
            value: "",
            description: "",
        });
    }

    return (
        <Screen4>
            <Title4>Nova entrada</Title4>
            <Form onSubmit={submitForm}>
                <Input
                    name="value" type="number" placeholder="Valor" value={entry.value}
                    onChange={(param) =>
                        setEntry({ ...entry, value: param.target.value })
                    }
                    descadastrar={descadastrar}
                    required
                />
                <Input
                    name="description" type="text" placeholder="Descrição" value={entry.description}
                    onChange={(param) =>
                        setEntry({ ...entry, description: param.target.value })
                    }
                    descadastrar={descadastrar}
                    required
                />
                <Button>
                    {descadastrar
                    ?
                    //Ou não salva
                    (<BeatLoader color="#FFFFFF" />)
                    :
                    //Ou salva
                    ("Salvar entrada")}
                </Button>
            </Form>
            <Link to="/home">
                <ion-icon name="exit-outline"></ion-icon>
            </Link>
        </Screen4>
    );
}