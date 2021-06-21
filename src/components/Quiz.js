
import React,{useState,useContext,useRef,useEffect} from 'react';
import { QuizContext } from '../Helpers/context';
import '../App.css';
import {questions} from '../Helpers/question';
function Quiz (){
    const{score,setScore,setGameState} = useContext(QuizContext);
    const[currQuestion,setCurrQuestion]=useState(0);
    const[optionchosen,setoptionchosen] = useState("");
    /*const[timerMinutes,setTimerMinutes] = useState('00');
    const[timerSeconds,setTimerSeconds] = useState('01');
    let interval = useRef();
    const startTimer =() =>{
        const CountDownTime =new Date('June 21 , 2021 00:00:00').getTime();
        interval = setInterval(()=> {
            const now = new Date().getTime();
            const distance = CountDownTime -now;
            const Minutes = Math.floor((distance%(1000*60*60))/(1000*60));
            const Seconds = Math.floor((distance%(1000*60))/1000);

            if(distance<0){
                clearInterval(interval.current);

            } else{
                setTimerMinutes(Minutes);
                setTimerSeconds(Seconds);
            }
        },1000);
    };
    useEffect(()=>{
        startTimer();
        return()=>{clearInterval(interval.current);};
    });*/
    const [seconds, setSeconds] = React.useState(100);
    React.useEffect(() => {
        if(seconds>0){
            setTimeout(()=> setSeconds(seconds-1),1000);
        }
        else{
            setSeconds("Time's UP!!");
            setGameState("EndScreen");
        }});
    const MenuStart = () => {
        if(questions[currQuestion].answer==optionchosen){
            setScore(score-1);
        }
        alert("Quiz Has been Started");
    };
    const previousQuestion =() => {
        if(questions[currQuestion].answer==optionchosen){
            setScore(score-1);
        }
        setCurrQuestion(currQuestion-1);
    };
    const nextquestion = () =>{
        if(questions[currQuestion].answer==optionchosen){
           setScore(score+1); 
        }
        setCurrQuestion(currQuestion+1);
    };
    const finishQuiz=() =>{
        if(questions[currQuestion].answer==optionchosen){
            setScore(score+1); 
         }
         setGameState("EndScreen");
    };
    return (
       
        
        <div className="Quiz">
            <div className="App">
                </div>
                <section className="timer-container">
                <section className="timer">
                    <div>
                        <span className="mdi mdi-calendar-clock timer-icon"></span>
                        <h2>Count Down Time in Seconds : </h2>

                    </div>
                    <div>{seconds}</div>
                </section>
            </section>
            <h1>{questions[currQuestion].prompt}</h1>
            <div className="questions">
                <button onClick={() => setoptionchosen("A")}>
                    {questions[currQuestion].OptionA}</button>
                <button onClick={() => setoptionchosen("B")}>
                    {questions[currQuestion].OptionB}</button>
                <button onClick={() => setoptionchosen("C")}>
                    {questions[currQuestion].OptionC}</button>
                <button onClick={() => setoptionchosen("D")}>
                    {questions[currQuestion].OptionD}</button>

            </div>
            {currQuestion == questions.length-3 ? (
                <button onClick={MenuStart} id="previousQuestion">Menu</button>
            ):(

            <button onClick={previousQuestion} id="previousQuestion">Previous Question</button>)}

            {currQuestion == questions.length-1 ? (
                <button onClick={finishQuiz} id="nextQuestion">Finish Quiz</button>
            ):(
            <button onClick={nextquestion} id="nextQuestion" >
                Next Question</button>)}
        </div>
    );
}

export default Quiz;
