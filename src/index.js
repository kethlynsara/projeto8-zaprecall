import ReactDOM from "react-dom";
import React, {useState} from "react";

import Home from "./Home";
import InitialScreen from "./InitialScreen";

import "./styles/reset.css"
import "./styles/style.css"

function App() {
    const [visivel, setVisivel] = useState(true);
    return (
            <>
                <InitialScreen visivel={visivel} setVisivel={setVisivel}/>
                <Home visivel={visivel} setVisivel={setVisivel}/>
            </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));