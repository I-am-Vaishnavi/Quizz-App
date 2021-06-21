import { useContext } from "react";
import { QuizContext } from "../Helpers/context";
import '../App.css';
import '../Helpers/question'
import React from "react";
import { questions } from "../Helpers/question";

function EndScreen (){
    const{score,setScore,setGameState} = useContext(QuizContext);
    const restartQuiz = () =>{
        setScore(0);
        setGameState("menu");

    };
    return (<div className = "EndScreen">
        <h1>Quiz finished</h1>
        <h3>{score}/{questions.length}</h3>
        <button onClick ={restartQuiz}>Restart Quiz

        </button>
    </div>);
}

export default EndScreen;
