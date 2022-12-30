import Pergunta from "./Pergunta";
import Header from "./Header";
import Footer from "./Footer";
import {useState} from "react";

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

flashcards.sort(comparador);

function comparador() { 
    return Math.random() - 0.5; 
}

export default function Home({setVisivel}) {
    const [totalConcluidos, setTotalConcluidos] = useState(0);
    const [icone, setIcone] = useState("");
    const [resetEtapa, setResetEtapa] = useState(false);
    return (
        <>
            <Header />
            <main>
                {flashcards.map((flashcard, index) => <Pergunta num={index + 1} 
                                                                question={flashcard.question} 
                                                                answer={flashcard.answer} 
                                                                key={flashcard.question} 
                                                                concluidos={totalConcluidos} 
                                                                callback={setTotalConcluidos}
                                                                setIcone={setIcone}
                                                                resetEtapa={resetEtapa}
                                                                setResetEtapa={setResetEtapa}
                                                                />)}
            </main>
            <Footer concluidos={totalConcluidos} setConcluidos={setTotalConcluidos} icone={icone} setVisivel={setVisivel} setResetEtapa={setResetEtapa}/>
        </>
    );
}