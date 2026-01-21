import quizlogo from '../../src/assets/quiz-logo.png';

export default function Header() {
    return <header>
           <img src={quizlogo} alt="" />
           <h1>Quiz</h1>
        </header>
}