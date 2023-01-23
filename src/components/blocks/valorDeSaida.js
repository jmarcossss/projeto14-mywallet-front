import { Link } from "react-router-dom";

// Rotas das estilizações
import Screen3 from "../componentsStyled/Screen3"
import Exit from "../componentsStyled/Exit"
import LeftColumn from "../componentsStyled/LeftColumn"
import Date from "../componentsStyled/Date"
import Desc from "../componentsStyled/Desc"
import RightColumn from "../componentsStyled/RightColumn"
import ExitValue from "../componentsStyled/ExitValue"

export default function Exities({ type, date, value, description }) {
    return (
        <Screen3>
            <Exit>
                <LeftColumn>
                    <Date>{date}</Date>
                    <Link to="/update-exit">
                        <Desc>{description}</Desc>
                    </Link>
                </LeftColumn>
                <RightColumn>
                    <ExitValue>{"R$ " + value}</ExitValue>
                </RightColumn>
            </Exit>
        </Screen3>
    );
}
