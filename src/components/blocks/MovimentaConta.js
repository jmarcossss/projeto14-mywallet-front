import Entries from "./Entries.block";
import Exities from "./Exities.block";

// Rotas das estilizações
import Screen2 from "../componentsStyled/Screen2"
import List from "../componentsStyled/List"
import Total from "../componentsStyled/Total"
import Title2 from "../componentsStyled/Title2"
import Value from "../componentsStyled/Value"

export default function MovimentaConta({ movimentacoesDaConta }) {
    // Inicialmente está tudo zerado na conta, sem ganhos nem perdas
    let valorDeEntrada = 0, valorDeSaida = 0;
    movimentacoesDaConta.forEach((param) => {
        // Se o valor de entrada que foi acionado, é recebido dinheiro, se for o valor de saída, é perdido dinheiro
        param.type === "entry" ? (valorDeEntrada += Number(param.value)) : (valorDeSaida += Number(param.value)); });
    // Valor da diferença entre o que você recebeu e o que você perdeu  
    let diferenca = valorDeEntrada - valorDeSaida;

    return (
        <Screen2>
            <List>
                {movimentacoesDaConta
                    .map((movDaConta, containerDaConta) =>
                        movDaConta.type === "entry" 
                        ? 
                        (   // Valores que são recebidos como entrada
                            <Entries
                                key={containerDaConta} type={movDaConta.type} date={movDaConta.date} value={movDaConta.value} description={movDaConta.description}
                            />
                        ) 
                        : 
                        (   // Valores que são recebidos como saída
                            <Exities
                                key={containerDaConta} type={movDaConta.type} date={movDaConta.date} value={movDaConta.value} description={movDaConta.description}
                            />
                        )
                    ).reverse()}
            </List>
            <Total>
                <Title2>SALDO</Title2>
                <Value diferenca={diferenca}>{"R$ " + diferenca}</Value>
            </Total>
        </Screen2>
    );
}