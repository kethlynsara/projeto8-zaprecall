let nomeIcone = [];
let cont = 0;

export default function Footer({ concluidos, icone }) {
    if (icone === "nao-lembrei") {
        nomeIcone.push(<img src="./css/assets/img/x.png" alt="nao-lembrei" />);
        cont++;
    } else if (icone === "quase-nao-lembrei") {
        nomeIcone.push(<img src="./css/assets/img/orange.png" alt="quase-nao-lembrei" />)
    } else if (icone === "zap") {
        nomeIcone.push(<img src="./css/assets/img/check.png" alt="zap" />)
    }

    if (concluidos === 8 && cont !== 0) {
        return (
            <footer>
                <div className="msg-final">
                    <div className="parabens">
                        <img src="./css/assets/img/sad.png" alt="putz" />
                        <p>PUTZ!</p>
                    </div>
                    <p className="msg-putz">{`Ainda faltaram alguns... 
                                            Mas não desanime!`}</p>

                </div>
                <div className="icones-selecionados">{nomeIcone.map((nome) => nome)}</div>
            </footer>

        )
    } else if (concluidos === 8 && cont === 0) {
        return (
            <footer>
                <div className="msg-final">
                    <div className="parabens">
                        <img src="./css/assets/img/party.png" alt="parabens" />
                        <p>PARABÉNS!</p>
                    </div>
                    <p className="msg-parabens">Você não esqueceu de nenhum flashcard!</p>
                </div>
                <div className="icones-selecionados">{nomeIcone.map((nome) => nome)}</div>
            </footer>

        )
    } else {
        return (
            <footer>
                <p>{concluidos}/8 CONCLUÍDOS</p>
                <div className="icones-selecionados">{nomeIcone}</div>
            </footer>
        )
    }
}
