import { useContext, useEffect, useState } from "react";
import axios from "axios";

import UserContext from "../contexts/user.context";
import MovimentaConta from "../blocks/MovimentaConta";

// Rotas das estilizações
import Content from "../componentsStyled/Content"
import NoContent from "../componentsStyled/NoContent"

export default function CentroHome() {
    const { clienteDaVez } = useContext(UserContext)
    const [oper, setTransactions] = useState([])
    const especif = {headers: {Authorization: "Bearer " + clienteDaVez.token,},}
    useEffect(() => {
        axios.get("http://localhost:5000/home", especif).then((ans) => {
            setTransactions(ans.data);
        });
    }, []);

    return (
        <Content>
            {/* Aqui iremos ver se já existe mais de 1 ação, se sim, exibiremos a tela com as ações
            Se não, não existe nenhuma operação ainda */}
            {oper.length !== 0 ? ( <MovimentaConta oper={oper} /> ) : ( <NoContent>Não há registros de entrada ou saída</NoContent> )}
        </Content>
    );
}

