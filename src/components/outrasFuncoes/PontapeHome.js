import { Link } from "react-router-dom";

// Rotas das estiizações
import Content2 from "../componentsStyled/Content2"
import NewEntry from "../componentsStyled/NewEntry"
import NewExit from "../componentsStyled/NewExit"
import Title3 from "../componentsStyled/Title3"

export default function PontapeHome() {
    return (
        <Content2>
            <Link to="/new-entry">
                <NewEntry>
                    <ion-icon name="add-circle-outline"></ion-icon> <Title3> Nova <br /> entrada </Title3>
                </NewEntry>
            </Link>
            <Link to="/new-exit">
                <NewExit>
                    <ion-icon name="remove-circle-outline"></ion-icon> <Title3> Nova <br /> saída </Title3>
                </NewExit>
            </Link>
        </Content2>
    );
}
