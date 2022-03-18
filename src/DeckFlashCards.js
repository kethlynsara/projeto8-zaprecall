import Pergunta from "./Pergunta";
import Header from "./Header";
import Footer from "./Footer";

//const questoes = [1, 2, 3, 4, 5, 6, 7, 8];
const flashcards = [
    {
        question: "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
        answer: "Japão e Serra Leoa."
    },
    {
        question: "De onde é a invenção do chuveiro elétrico?",
        answer: "Brasil."
    },
    {
        question: "De quem é a famosa frase “Penso, logo existo”?",
        answer: "Descartes."
    },
    {
        question: "Atualmente, quantos elementos químicos a tabela periódica possui?",
        answer: "118."
    },
    {
        question: "Quais datas são comemoradas em novembro?",
        answer: "Proclamação da República, Dia Nacional da Consciência Negra, Dia de Finados."
    },
    {
        question: " Em qual local da Ásia o português é língua oficial?",
        answer: "Macau."
    },
    {
        question: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
        answer: "Dom Quixote."
    },
    {
        question: " Normalmente, quantos litros de sangue uma pessoa tem?",
        answer: "Entre 4 e 6 litros."
    }
]

export default function DeckFlashCards() {
    return (
        <>
            <Header />
            <main>
                {flashcards.map((flashcard, index) => <Pergunta num={index === 0 ? 1 : index + 1 } question={flashcard.question} answer={flashcard.answer} key={flashcard.question}/>)}
            </main>
            <Footer />
        </>
    );
}


