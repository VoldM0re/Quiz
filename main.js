const questions = [
    {
        question: "Какой из этих крафтов верный?",
        answers: ["Первый", "Второй", "Третий"],
        correct: 1,
        images: ["pic1", "pic2", "pic3"]
    },

    {
        question: "Есть ли в майнкрафте медведи?",
        answers: ["Есть, только белые", "Есть, только белые и панды", "Есть, только бурые", "Есть, только бурые и панды", "Есть, только панды", "В майнкрафте нет медведей"],
        correct: 2,
        images: ["wbear", "bbear", "panda"]
    },

    {
        question: "Сколько всего измерений есть в Minecraft?",
        answers: ["Пять", "Восемь", "Только одно", "Три"],
        correct: 4,
        images: ["nether", "twilight"]
    },

    {
        question: "Сколько нужно слитков железа, чтобы скрафтить наковальню?",
        answers: ["5 слитков", "24 слитка", "31 слиток", "45 слитков"],
        correct: 3,
        images: ["anvil", "ingot"]
    },

    {
        question: "Какова максимальная высота мира в майнкрафте, начиная с версии 1.19?",
        answers: ["256 блоков", "320 блоков", "64 блока", "1200 блоков"],
        correct: 2,
        images: ["worldHeight"]
    },

    {
        question: "Сколько нужно времени (примерно), чтобы добыть обсидиан рукой?",
        answers: ["≈ 2 минуты", "≈ 4 минуты", "≈ 9 минут"],
        correct: 2,
        images: ["obsidian"]
    },

    {
        question: "Можно ли сломать блок бедрока в режиме выживания?",
        answers: ["Можно, киркой", "Можно, но не киркой", "Нельзя"],
        correct: 2,
        images: ["bedrock"]
    },

    {
        question: "Какая кирка (без зачарований) сломает блок камня быстрее всего?",
        answers: ["Алмазная кирка", "Незеритовая кирка", "Золотая кирка", "Каменная кирка"],
        correct: 3,
        images: ["diamond", "netherite", "gold", "stone"]
    },

    {
        question: "Какого зелья нет в игре?",
        answers: ["Зелье взрывоустойчивости", "Зелье отравления", "Зелье ночного зрения", "Зелье плавного падения"],
        correct: 1,
        images: ["potions"]
    },

    {
        question: "Сколько щупалец у гаста?",
        answers: ["Пять", "Семь", "Девять", "Двенадцать"],
        correct: 3,
        images: ["ghast", "ghast2", "ghast3"]
    },

    {
        question: "Кого может съесть лягушка?",
        answers: ["Всех мобов, которые их ударят", "Маленьких слизней и лавовых кубов", "Фантомов"],
        correct: 2,
        images: ["frogs", "frogs2"]
    },

    {
        question: "Как добыть козий рог?",
        answers: ["Убить козу", "Надо подождать, пока с козы выпадет рог", "Коза должна удариться о блок во время атаки"],
        correct: 3,
        images: ["goat", "horn"]
    },

    {
        question: "Какой официальный никнейм у создателя Майнкрафта?",
        answers: ["Steve", "Herobrine", "Jeb", "Notch"],
        correct: 4,
        images: ["steve", "herobrine", "jeb", "notch"]
    },

    {
        question: "Сколько нужно не спать, чтобы начали появляться фантомы?",
        answers: ["1 день", "3 дня", "5 дней"],
        correct: 2,
        images: ["phantom"]
    },

    {
        question: "На какой высоте генерируется алмазная руда с версии 1.18?",
        answers: ["От -63 до 14 блоков", "От -55 до 12 блоков", "От -70 до 20 блоков"],
        correct: 1,
        images: ["diamonds"]
    },

    {
        question: "Какой блок является самым распространённым, не считая воздуха?",
        answers: ["Камень", "Земля", "Глубинный сланец"],
        correct: 1,
        images: ["stoneBlock", "dirtBlock", "deepslateBlock"]
    },

    {
        question: "Сколько существует вариантов козьего рога?",
        answers: ["Один", "Шесть", "Семь", "Восемь"],
        correct: 4,
        images: ["horns"]

    },

];

// Переменные
let score = 0;
let questionIndex = -1;

// Основные элементы
const quizTitle = document.querySelector('.quiz_title');
const questionsList = document.querySelector('.questions');
const submitButton = document.querySelector('#submit');
const images = document.querySelector('.images');
images.style.display = 'none';

// Очистка страницы
function clearPage() {
    quizTitle.innerHTML = '';
    questionsList.innerHTML = '';
    images.innerHTML = '';
}

// Отображение вопроса
function generateQuestion() {
    const titleTemplate = `<h2 class="title">%title%</h2>`;
    const replacedTitle = titleTemplate.replace('%title%', questions[questionIndex]['question']);
    quizTitle.innerHTML = replacedTitle;

    for ([index, answerText] of questions[questionIndex]['answers'].entries()) {
        const answerTemplate = `
                <li>
                    <label>
                        <input value="%number%" type="radio" class="answer" name="answer">
                        <span>%answer%</span>
                    </label>
                </li>`;

        const replacedAnswer = answerTemplate
            .replace('%answer%', answerText)
            .replace('%number%', index + 1);

        questionsList.innerHTML += replacedAnswer;
    }

    const imageTemplate = `<img src="images/%imgtmp%.png" class="top_image">`;
    for ([Iindex, imageTitle] of questions[questionIndex]['images'].entries()) {
        const replaceImage = imageTemplate.replace("%imgtmp%", imageTitle);
        images.innerHTML += replaceImage
    }

}

// Проверка выбранного пользователем варианта ответа
function checkAnswer() {

    if (questionIndex === -1) { // Если тест не начался
        questionIndex++;
        clearPage();
        generateQuestion();
        submitButton.innerHTML = 'Ответить'
        images.style.display = 'flex';

    } else { // Тест начался
        console.log('СТАРТ');
        const checkedRadio = questionsList.querySelector('input[type="radio"]:checked');
        const chosenAnswer = parseInt(checkedRadio.value);

        if (!checkedRadio) { // Если ни одна радиометка не активна
            submitButton.blur();
            return;
        }

        if (chosenAnswer === questions[questionIndex]['correct']) { score++; } // Если ответ верный

        if (questionIndex !== questions.length - 1) { // Если вопрос не последний
            questionIndex++
            clearPage();
            generateQuestion();
            return

        } else { // Если вопрос последний
            clearPage();
            generateResults();
            images.style.display = 'none';
        }
    }
}

function generateResults() {
    console.log('Your score is ' + score);

    const resultsTemplate = `
        <h2 class="title">%title%</h2>
        <h3 class="summary">%message%</h3>
        <h2 class="result">Твой результат: %result%</h2>
    `;

    let title, message;
    if (score === questions.length) {
        title = "Поздравляю!";
        message = "Ты полностью прошёл тест и правильно ответил на все вопросы. Ты - настоящий знаток майнкрафта!";
    } else if ((score * 100) / questions.length >= 75) {
        title = "Молодец!";
        message = "Ты ответил правильно почти на все вопросы! Настоящий профессионал, так держать!";
    } else if ((score * 100) / questions.length >= 50) {
        title = "Неплохо!";
        message = "Ты ответил правильно более чем на половину вопросов! Возможно, ты только начинаешь свой путь в этом кубическом мире, или давно не следил за обновлениями. Пора бы освежить знания ;)";
    } else {
        title = 'Не отчаивайся!';
        message = "Ты ответил правильно меньше, чем на половину вопросов, но это не повод расстраиваться! Следи за новостями об игре на Youtube, а главное - сам почаще исследуй мир, и вскоре сможешь набрать 100% правильных ответов ;)";
    }

    let result = `${score} из ${questions.length}`;

    const endingMessage = resultsTemplate
        .replace('%title%', title)
        .replace('%message%', message)
        .replace('%result%', result)

    quizTitle.innerHTML = endingMessage;
    submitButton.blur();
    submitButton.innerText = 'Пройти тест ещё раз';
    submitButton.onclick = () => { history.go() };
}