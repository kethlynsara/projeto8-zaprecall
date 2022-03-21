import React from "react";

export default function Pergunta({num, question, answer, concluidos, callback, setIcone}) {
    const [etapa, setEtapa] = React.useState("hidden");

    if (etapa === "hidden") {
        return (
            <div className="pergunta" onClick={() => setEtapa("pergunta")}>
                <p>Pergunta {num}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        );
    }

    if (etapa === "pergunta") {
        return (
            <div className="questao">
                <p>{question}</p>
                <img src="./assets/img/arrow.png" alt="arrow" onClick={() => setEtapa("resposta")} />
            </div>
        )
    }

    if (etapa === "nao-lembrei") {
        return (
            <div className="resposta-concluida red">
                <p>Pergunta {num}</p>
                <img src="./assets/img/x.png" alt="nao-lembrei" />
            </div>
        );
    }


    if (etapa === "quase-nao-lembrei") {
        return (
            <div className="resposta-concluida orange">
                <p>Pergunta {num}</p>
                <img src="./assets/img/orange.png" alt="quase-nao-lembrei" />
            </div>
        );
    }


    if (etapa === "zap") {
        return (
            <div className="resposta-concluida green">
                <p>Pergunta {num}</p>
                <img src="./assets/img/check.png" alt="zap" />
            </div>
        );
    }


    if (etapa === "resposta") {
        return (
            <div className="resposta">
                <p>{answer}</p>
                <div className="zapMemory">
                    <buttom onClick={() => {
                        setEtapa("nao-lembrei");
                        callback(concluidos + 1);
                        setIcone("nao-lembrei");
                        }} className="nao-lembrei">Não lembrei</buttom>
                    <buttom onClick={() => {
                        setEtapa("quase-nao-lembrei");
                        callback(concluidos + 1);
                        setIcone("quase-nao-lembrei");
                        }} className="quase-lembrei">Quase não lembrei</buttom>
                    <buttom onClick={() => {
                        setEtapa("zap")
                        callback(concluidos + 1);
                        setIcone("zap");
                        }} className="zap">Zap</buttom>
                </div>
            </div>
        );
    }
}