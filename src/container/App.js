// Bibliotecas de uso geral
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import UserContext from "../components/contexts/user.context"
// import ResetStyle from "../assets/css/reset.styles"
import GlobalStyle from "../assets/css/global.styles"

// Caminho das rotas dos componentes 
import Login from "../components/rotas/rotaLogin/rotaLogin"
import Cadastro from "../components/rotas/rotaCadastro/rotaCadastro"
import Home from "../components/rotas/rotaHome/rotaHome"
import NovaEntrada from "../components/rotas/rotaNovaEntrada/rotaNovaEntrada"
import NovaSaida from "../components/rotas/rotaNovaSaida/rotaNovaSaida"

export default function App() {
    // Criando um localStorage para armazenar os dados dos meus usuários
    const [listaCliente, confListaCliente] = useState(
        JSON.parse(window.localStorage.getItem("user")) || {}
    )

    return (
        <UserContext.Provider value={{ listaCliente, confListaCliente }}>
            {/* <ResetStyle /> */}
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/nova-entrada" element={<NovaEntrada />} />
                <Route path="/nova-saida" element={<NovaSaida />} />
                {/* Rota caso o usuário não acesse nenhuma rota de fato, aí aparece uma msg de erro */}
                {/* <Route path="*" element={<ErrorPage />} /> */}
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}
