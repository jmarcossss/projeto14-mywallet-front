// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import UserContext from "../../contexts/user.context";
import Screen from "../../componentsStyled/Screen"

import CabecalhoHome from "../../outrasFuncoes/CabecalhoHome";
import CentroHome from "../../outrasFuncoes/CentroHome";
import FooterContent from "../../outrasFuncoes/PontapeHome";

export default function Home() {
    return (
        <Screen>
            <CabecalhoHome />
            <CentroHome />
            <FooterContent />
        </Screen>
    );
}
