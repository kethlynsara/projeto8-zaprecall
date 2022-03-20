import React from "react";

export default function Tela1() {
    const [visivel, setVisivel] = React.useState(true);
    if (visivel === true) {
        return (
            <>
                <div className="tela1">
                    <img src="./css/assets/img/logo.png" alt="logo" />
                    <h1>ZapRecall</h1>
                    <buttom onClick={() => setVisivel(false)}>Iniciar Recall!</buttom>
                </div>

            </>
        );
    } else {
        return <> </>
    }
}