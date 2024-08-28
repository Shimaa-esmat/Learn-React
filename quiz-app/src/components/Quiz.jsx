import QUESTIONS from '../questions.js'
import completedQuizImage from '../assets/quiz-complete.png' 

import QuestionTimer from './QuetionTimer.jsx'

import { useState } from "react"
import questions from '../questions.js'




export default function Quiz(){
    const timer = 10000 
    const [ userAnswers, setUserAnswers] = useState([])
    const activeQuestionIndex = userAnswers.length
    const finishedQuiz = activeQuestionIndex === questions.length


    if(finishedQuiz){
        return(
            <div id='summary'>
                <img src={completedQuizImage} alt='completed quiz'/>
                <h2>Quiz completed</h2>
            </div>
        )
    }


    function handleSelectAnswer(answer){
        setUserAnswers(
            (prevAnswer) =>{
                return [
                ...prevAnswer, answer
            ]}
        );
    }

    const unorderedAnswers = [...QUESTIONS[activeQuestionIndex].answers]
    unorderedAnswers.sort(()=> Math.random() - 0.5);
// console.log(userAnswers)
    return (
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer 
                    timeout={timer}
                    onTimeout={(() => handleSelectAnswer(null))}
                />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                {
                    unorderedAnswers.map(answer => (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswer(answer)} >{answer}</button>
                        </li>
                    )) 
                }
                </ul>
            </div>
        </div>
        
    )
}