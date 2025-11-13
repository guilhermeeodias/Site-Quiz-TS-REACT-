import { useState } from 'react' // Vamos precisar disso!

interface Answer {
  text:string
  correct: boolean
}

interface Question {
  question: string
  answers: Answer[]
}

const quizQuestion: Question [] = [
  {
    question: "Qual é a capital do Brasil?",
    answers: [
      { text: "São Paulo", correct: false },
      { text: "Rio de Janeiro", correct: false },
      { text: "Brasília", correct: true },
      { text: "Salvador", correct: false },
    ],
  },
  {
    question: "Qual biblioteca JavaScript é usada para construir interfaces de usuário?",
    answers: [
      { text: "React", correct: true },
      { text: "Node.js", correct: false },
      { text: "jQuery", correct: false },
      { text: "Flask", correct: false },
    ],
  },
  {
    question: "O que significa HTML?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "High-Level Text Machine Language", correct: false },
      { text: "Hyperlink and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?",
    answers: [
      { text: "Respiração", correct: false },
      { text: "Fotossíntese", correct: true },
      { text: "Digestão", correct: false },
      { text: "Absorção", correct: false },
    ],
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    answers: [
      { text: "José de Alencar", correct: false },
      { text: "Clarice Lispector", correct: false },
      { text: "Carlos Drummond de Andrade", correct: false },
      { text: "Machado de Assis", correct: true },
    ],
  },
  {
    question: "Quanto é 7 * 8?",
    answers: [
      { text: "54", correct: false },
      { text: "56", correct: true },
      { text: "63", correct: false },
      { text: "64", correct: false },
    ],
  },
  {
    question: "Qual é o maior continente do mundo?",
    answers: [
      { text: "África", correct: false },
      { text: "Europa", correct: false },
      { text: "Ásia", correct: true },
      { text: "América", correct: false },
    ],
  },
  {
    question: "Qual é o símbolo químico da água?",
    answers: [
      { text: "O2", correct: false },
      { text: "CO2", correct: false },
      { text: "H2O", correct: true },
      { text: "NaCl", correct: false },
    ],
  },
  {
    question: "Quantos lados tem um hexágono?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: true },
      { text: "7", correct: false },
      { text: "8", correct: false },
    ],
  },
  {
    question: "Em que ano o homem pisou na Lua pela primeira vez?",
    answers: [
      { text: "1965", correct: false },
      { text: "1969", correct: true },
      { text: "1972", correct: false },
      { text: "1981", correct: false },
    ],
  },
  {
    question: "O que o SCSS ou Sass adiciona ao CSS?",
    answers: [
      { text: "Componentes React", correct: false },
      { text: "Conexão com banco de dados", correct: false },
      { text: "Variáveis, aninhamento e mixins", correct: true },
      { text: "Inteligência Artificial", correct: false },
    ],
  },
  {
    question: "Qual é o maior estado do Brasil em área territorial?",
    answers: [
      { text: "Minas Gerais", correct: false },
      { text: "Bahia", correct: false },
      { text: "Pará", correct: false },
      { text: "Amazonas", correct: true },
    ],
  },
  {
    question: "Qual planeta é mais próximo do Sol?",
    answers: [
      { text: "Mercúrio", correct: true },
      { text: "Vênus", correct: false },
      { text: "Terra", correct: false },
      { text: "Marte", correct: false },
    ],
  },
  {
    question: "Quem pintou a 'Mona Lisa'?",
    answers: [
      { text: "Michelangelo", correct: false },
      { text: "Donatello", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Van Gogh", correct: false },
    ],
  },
  {
    question: "Qual destes NÃO é um tipo de dado primitivo em JavaScript?",
    answers: [
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Boolean", correct: false },
      { text: "Array", correct: true },
    ],
  }
]

function App() {
  const [gameStage, setGameStage] = useState<'start' | 'quiz' | 'results'> ('start')

  const [score,setScore] = useState(0)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answersDisabled, setAnswersDisabled] = useState(false)

  const [selectedAnswerText,setSelectedAnswerText] = useState<string | null>(null)
  const [questionAc,setQuestionAc] = useState<number>(0)

  //const totalQuestions = quizQuestion.length
  const totalQuestionsPerRound = 5
  const currentQuestion = quizQuestion[currentQuestionIndex] 
  
  const startQuiz = () => {
      setScore(0)
      setQuestionAc(0)
      setCurrentQuestionIndex(Math.floor(Math.random()*quizQuestion.length))
      setAnswersDisabled(false)
      setSelectedAnswerText(null)
      setGameStage('quiz')
  }

  const selectedAnswer = (selectedAnswer: Answer) => {
    if (answersDisabled) return 
    setAnswersDisabled(true)

    setSelectedAnswerText(selectedAnswer.text)


    if (selectedAnswer.correct) {
      setScore(prevScore => prevScore + 1)
    }

  setTimeout(() => {
      const currentIndex = currentQuestionIndex;
      
      let nextQuestionIndex = Math.floor(Math.random() * quizQuestion.length)

      while (nextQuestionIndex === currentIndex) {
        
        nextQuestionIndex = Math.floor(Math.random() * quizQuestion.length)
      }
      
      if (questionAc + 1 < totalQuestionsPerRound) {
        
        setCurrentQuestionIndex(nextQuestionIndex)
        setQuestionAc(questionAc + 1)

      } else {
        setGameStage('results')
      }

      setAnswersDisabled(false)
      setSelectedAnswerText(null)
    }, 1000)
  }

  const getResultMessage = () => {
    const percentage = (score/totalQuestionsPerRound) * 100
    if(percentage === 100) return "Parabéns tu é um gênio!"
    if(percentage >= 80) return 'Ótimo trabalho! Tu sabe demais'
    if(percentage >= 60) return 'Você se esforçou. Continue tentando'
    if(percentage >= 40) return 'Nada mal! Tente novamente'
    return 'Continue tentando, uma hora tu chega lá.'
  }


  return (
    <div className="bg-gradient-to-bl from-slate-900 to-slate-950 flex justify-center items-center h-screen font-sans p-[1px] ">
      <div className="main-container bg-[#1e293b] w-full max-w-[40rem] rounded-[1.5rem] shadow-2xl shadow-[#fde047]/10 p-[1rem]">
        
        {gameStage === 'start' && (
        <div className="initial-screen  p-[1.3rem] text-center" id="initial-screen">
            <h1 className="text-[#facc15] text-[4rem] font-normal mb-[1.2rem]">Momento Quiz!!</h1>
            <p className="text-[#cbd5e1] text-[1.5rem] mb-[2rem] ">Teste seus conhecimentos com essas questões!!</p>
            <button onClick={startQuiz} className="start-quiz text-[#0f172a] bg-[#facc15] text-[1.8rem] rounded-[0.4rem] font-bold p-[0.6rem] mb-[2rem] transition duration-300 ease-in-out hover:bg-[#fde047]" id="start-quiz">Começar Quiz</button>
        </div>
        )}
        
        {gameStage === 'quiz' && (
        <div className="questions-screen  p-[1rem]" id="questions-screen">
            <h1 className=" text-[#f1f5f9] text-[1.8rem] mb-[1rem]" id="questao-atual">{currentQuestion.question}</h1>
            <div className="questions-screen-header mb-[2rem] text-center flex justify-between" id="questions-screen-header">
                <div className="info-container text-[#94a3b8]" id="info-container">Questão <span id="span-current-question">{questionAc + 1}</span> de <span id="span-total-questions">{totalQuestionsPerRound}</span></div>
                <div id="current-score" className="text-[#94a3b8]">Score: <span id="score">{score}</span></div>
            </div>
            <div id="questions-box" className='flex flex-col gap-4 mb-[2rem]'>
              {currentQuestion.answers.map((answer) => {

                const isSelected = selectedAnswerText === answer.text
                const isCorrect = answer.correct
                let buttonClasses = "answer-btn text-left p-4 bg-[#334155] text-[#f1f5f9] rounded-lg transition-all duration-300"

                if (answersDisabled) {
                  if(isCorrect) {
                    buttonClasses += " bg-green-500 text-white"
                  }else if (isSelected && !isCorrect) {
                    buttonClasses += " bg-red-500 text-white"
                  }
                } else {
                  buttonClasses += " hover:bg-[#475569]"
                }



                return (
                <button onClick={() => selectedAnswer(answer)} disabled={answersDisabled} key={answer.text} className={buttonClasses}>{answer.text}</button>)
              })}
            </div>
            <div id="progress-bar" className="bg-[#334155] w-full h-[1rem] rounded-2rem mb-[1rem] rounded-[1rem]">
                <div id="progress-percentage" className="h-full bg-[#facc15] rounded-[1rem] transition-all duration-300" style={{ width: `${((questionAc + 1) / totalQuestionsPerRound) * 100}%` }}></div>
            </div>
        </div>
        )}

        {gameStage === 'results' && (
        <div className="final-screen  text-center p-[0.4rem]" id="final-screen">
          <h1 className="mb-[1rem] text-[#facc15] text-[2.5rem] font-bold mb-[2rem]">Resultados do Quiz</h1>
          <div className="fim-msg-container bg-[#334155] mb-[2rem] rounded-[1rem] p-[1rem]" id="fim-msg-container">
            <p className="text-[#e2e8eb] text-[1.3rem]">Você acertou <span className="final-score text-[#facc15]" id="final-score">{score}</span> de <span className="final-total-score text-[#facc15]" id="final-total-score">{totalQuestionsPerRound}</span></p>
            <h2 className="text-[2rem] text-[#f0e047]">{getResultMessage()}</h2>
          </div>
          <button onClick={startQuiz} id="restart-quiz-btn" className="restart-quiz-btn text-[#0f172a] bg-[#facc15] text-[1.8rem] rounded-[0.4rem] font-bold p-[0.6rem] mb-[2rem] transition duration-300 ease-in-out hover:bg-[#fde047]">Recomeçar Quiz</button>
        </div>
        )}
    </div>
    
    </div>
    
  )
  
}

export default App
