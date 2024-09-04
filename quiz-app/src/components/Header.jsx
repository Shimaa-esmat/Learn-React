import headerImage from '../assets/quiz-logo.png'

export default function Header(){
    return (
    <header 
    className='my-8 text-center'
    >
    <img 
    className='w-12 h-12 drop-shadow-lg mx-auto'
    src={headerImage} alt='Quiz Logo Header '/>
    <h1
    className='font-roboto font-bold  '
    >ReactQuiz </h1>
    </header>
    )
}