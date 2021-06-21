
import { useContext } from "react";
import { QuizContext } from "../Helpers/context";
import '../App.css';
export default  function MainMenu(){
    const{gameState,setGameState,userName, setUserName} = useContext(QuizContext);
    return (
        <div className ="Menu">
           <section className="Run">
               </section>
            <button 
                onClick={()=>{
                    setGameState("quiz");
                }}> 
                    Start Quiz
                </button>
        </div>
    );
}
