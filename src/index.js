import ReactDOM from "react-dom";
import React from "react";
import Tela1 from "./Tela1";
import DeckFlashCards from "./DeckFlashCards"; 

function App() {

    return (
        <>
            <Tela1 />
            <DeckFlashCards />
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));