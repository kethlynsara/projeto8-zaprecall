import React from "react";

export default function Pergunta(props) {
    //const [question, answer, num] = props;
    const [etapa, setEtapa] = React.useState("hidden");

    if (etapa === "hidden") {
        return (
            <div className="pergunta" onClick={() => setEtapa("pergunta")}>
                <p>Pergunta {props.num}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
        );
    }

    if (etapa === "pergunta") {
        return (
            <div className="questao">
                <p>{props.question}</p>
                <img src="./css/assets/img/arrow.png" alt="arrow" onClick={() => setEtapa("resposta")} />
            </div>
        )
    }

    if (etapa === "zapResposta") {
        return (
            <div className="pergunta zap-resposta" onClick={() => setEtapa("pergunta")}>
                <p>Pergunta {props.num}</p>
                <img src="./css/assets/img/x.png" alt="arrow" />
            </div>
        );
    }

    if (etapa === "resposta") {
        return (
            <div className="resposta">
                <p>{props.answer}</p>
                <div className="zapMemory">
                    <buttom onClick={() => {
                        props.callback(1)
                        setEtapa("zapResposta")
                    }}
                        className="nao-lembrei">Não lembrei</buttom>
                    <buttom onClick={() => props.callback(1)} className="quase-lembrei">Quase não lembrei</buttom>
                    <buttom onClick={() => props.callback(1)} className="zap">Zap</buttom>
                </div>
            </div>
        );
    }
}
