import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../../contexts/user.context";
import BeatLoader from "react-spinners/BeatLoader";

//Rotas das estilizações
import Screen4 from "../../componentsStyled/Screen4"
import Title4 from "../../componentsStyled/Title4"
import Form from "../../componentsStyled/Form"
import Input from "../../componentsStyled/Input"
import Button from "../../componentsStyled/Button"

export default function NovaSaida() {
    const nav = useNavigate();
    const { cliente } = useContext(UserContext);
    const [exit, setExit] = useState({ type: "exit", value: "", description: "", });
    const [descadastrar, especDescadastrar] = useState(false);

    function submitForm(param) {
        param.preventDefault();
        especDescadastrar(true);
        const config = { headers: { Authorization: "Bearer " + cliente.token, }, };

        //Solicitação de conexão
        axios.post("http://localhost:5000/transactions", exit, config)
        //Se der ok, existe o cadastro
            .then((ans) => {
                alert(cliente.username + ", Sua saída foi cadastrada com sucesso!");
                nav("/home");
            })
        //Se der ruim, não existe o cadastro
            .catch((err) => {
                alert(cliente.username + "Erro ao cadastrar sua saída! Tente novamente.");
                limpaTudo();
                especDescadastrar(false);
            });
    }

    function limpaTudo() {
        setExit({
            value: "",
            description: "",
        });
    }

    return (
        <Screen4>
            <Title4>Nova saída</Title4>
            <Form onSubmit={submitForm}>
                <Input
                    name="value" type="number" placeholder="Valor" value={exit.value}
                    onChange={(param) =>
                        setExit({ ...exit, value: param.target.value })
                    }
                    descadastrar={descadastrar}
                    required
                />
                <Input
                    name="description" type="text" placeholder="Descrição" value={exit.description}
                    onChange={(param) =>
                        setExit({ ...exit, description: param.target.value })
                    }
                    descadastrar={descadastrar}
                    required
                />
                <Button>
                    {descadastrar ? <BeatLoader color="#FFFFFF" /> : "Salvar saída"}
                </Button>
            </Form>
            <Link to="/home"> <ion-icon name="exit-outline"></ion-icon> </Link>
        </Screen4>
    );
}
