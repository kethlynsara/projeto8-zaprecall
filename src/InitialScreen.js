export default function InitialScreen({visivel, setVisivel}) {
    if (visivel) {
        return (
            <>
                <div className="tela1">
                    <img src="./assets/img/logo.png" alt="logo" />
                    <h1>ZapRecall</h1>
                    <buttom onClick={() => setVisivel(false)}>Iniciar Recall!</buttom>
                </div>

            </>
        );
    } else {
        return <></>
    }
}