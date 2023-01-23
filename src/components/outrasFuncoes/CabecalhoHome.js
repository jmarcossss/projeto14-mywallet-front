import { useNavigate } from "react-router-dom"
import axios from "axios"
import UserContext from "../contexts/user.context"
import { useContext } from "react"

// Rotas das estilizações
import Content from "../componentsStyled/Content"
import Title from "../componentsStyled/Title"

export default function CabecalhoHome() {
    const nav = useNavigate()
    const { clienteDaVez } = useContext(UserContext)
    const config = {headers: {Authorization: "Bearer " + clienteDaVez.token,},}
    function sessaoEncerrada() {
        axios.delete("http://localhost:5000/session", config).then((ans) => {alert(ans.data); nav("/") });
    }

    return (
        <Content>
            <Title>Olá,  {clienteDaVez.username}</Title>
            <ion-icon
                name="exit-outline"
                onClick={() => {
                    sessaoEncerrada()
                }}
            ></ion-icon>
        </Content>
    )
}