import { Link } from "react-router-dom";

// Rotas das estilizações
import Screen3 from "../componentsStyled/Screen3"
import Entry from "../componentsStyled/Entry"
import LeftColumn from "../componentsStyled/LeftColumn"
import Date from "../componentsStyled/Date"
import Desc from "../componentsStyled/Desc"
import RightColumn from "../componentsStyled/RightColumn"
import EntryValue from "../componentsStyled/EntryValue"

export default function Entries({ type, date, value, description }) {
    return (
        <Screen3>
            <Entry>
                <LeftColumn>
                    <Date>{date}</Date>
                    <Link to="/update-entry">
                        <Desc>{description}</Desc>
                    </Link>
                </LeftColumn>
                <RightColumn>
                    <EntryValue>{"R$ " + value}</EntryValue>
                </RightColumn>
            </Entry>
        </Screen3>
    );
}
