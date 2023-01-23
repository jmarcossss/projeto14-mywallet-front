// Rotas das extilizações
import Screen from "../../componentsStyled/Screen"

import CabecalhoHome from "../../outrasFuncoes/CabecalhoHome";
import CentroHome from "../../outrasFuncoes/CentroHome";
import PontapeHome from "../../outrasFuncoes/PontapeHome";

export default function Home() {
    return (
        <Screen>
            <CabecalhoHome />
            <CentroHome />
            <PontapeHome />
        </Screen>
    );
}
