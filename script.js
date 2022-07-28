const quizData = [
    {
        question: "Content whose main purpose is to attract attention and encourage visitors to click on a link to a particular web page.",
        a: "Credible",
        b: "Fake News",
        c: "Satire",
        d: "Click Bait",
        correct: "d",
    },
    {
        question: "Sources that use humor, irony, exaggeration, ridicule, and false information to comment on current events are...",
        a: "Credible",
        b: "Satire",
        c: "News",
        d: "Click Bait",
        correct: "b",
    },
    {
        question: "What is the definition of Fake News?",
        a: "News that deliberately misleads readers",
        b: "News where a reporter unknowingly made a mistake",
        c: "News from a political organization",
        d: "All of the above",
        correct: "a",
    },
    {
        question: "Why is fake news a problem?",
        a: "It distracts people from real news",
        b: "It creates fear",
        c: "Peoples' lives are harmed",
        d: "all of the above",
        correct: "d",
    },

    {
        question: "How can you verify a report you suspect is fake?",
        a: "Ask your friend their opinion",
        b: "Ignore it",
        c: "Research the source/author/facts/date",
        d: "Share it anyway",
        correct: "c",
    }, 

    {
        question: "What is a possible reliable source?",
        a: "Wikipedia",
        b: "Student/Fellow Peers",
        c: "Encyclopedia",
        d: "Social Media",
        correct: "c",
    }, 

    {
        question: "Which word means a prank or joke?",
        a: "prolific",
        b: "hoax",
        c: "impressionable",
        d: "credible",
        correct: "b",
    }, 

    {
        question: "Which word means convincing, or believable based on evidence?",
        a: "prolific",
        b: "hoax",
        c: "impressionable",
        d: "credible/reliable",
        correct: "d",
    }, 

    {
        question: "Why do people create fake news?",
        a: "To fool people",
        b: "To entertain people",
        c: "To make money",
        d: "To influence people's beliefs and actions",
        correct: "d",
    }, 

    {
        question: "Some news stories are",
        a: "Totally fake",
        b: "clickbait",
        c: "written by internet trolls",
        d: "all choices are true",
        correct: "d",
    }, 

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <h3>Developed by Reymarc Jason Tampos (2022) V.1</h3>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})