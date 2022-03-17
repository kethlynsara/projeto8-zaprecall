import Pergunta from "./Pergunta";
import Header from "./Header";
import Footer from "./Footer";

const questoes = [1, 2, 3, 4, 5, 6, 7, 8];

export default function DeckFlashCards() {
    return (
        <>
            <Header />
            <main>
                {questoes.map(questao => <Pergunta num={questao} />)}
            </main>
            <Footer />
        </>
    );
}


