import headerImage from '../assets/quiz-logo.png'

export default function Header(){
    return (
    <header 
    // className='my-16 text-center'
    >
    <img 
    // className='w-12 h-12 drop-shadow-lg '
    src={headerImage} alt='Quiz Logo Header '/>
    <h1
    className='font-roboto-condensed font-bold '
    >ReactQuiz </h1>
    </header>
    )
}