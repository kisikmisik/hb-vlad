// Функція для створення конфеті
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#f39c12', '#e74c3c', '#9b59b6', '#3498db', '#2ecc71', '#f1c40f'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            
            confettiContainer.appendChild(confetti);
            
            // Видаляємо конфеті після анімації
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 50);
    }
}

// Функція для початку святкування
function startCelebration() {
    // Створюємо конфеті
    createConfetti();
    
    // Додаємо додаткові анімації
    const title = document.querySelector('.title');
    const cake = document.querySelector('.cake');
    const friendName = document.querySelector('.friend-name');
    
    // Анімація заголовка
    title.style.animation = 'bounce 0.5s ease-in-out 5';
    
    // Анімація торта
    cake.style.animation = 'rotate 1s ease-in-out 3';
    
    // Анімація імені
    friendName.style.animation = 'pulse 0.5s ease-in-out 5';
    
    // Змінюємо текст кнопки
    const btn = document.querySelector('.celebration-btn');
    btn.textContent = '🎉 Святкуємо! 🎉';
    btn.style.animation = 'pulse 1s ease-in-out infinite';
    
    // Відтворюємо prank.mp3
    if (typeof Audio !== 'undefined') {
        try {
            const prankAudio = new Audio('prank.mp3');
            prankAudio.volume = 0.8; // Встановлюємо гучність на 80%
            prankAudio.play().catch((e) => {
                console.log('Не вдалося відтворити prank.mp3:', e);
            });
        } catch (e) {
            console.log('Помилка при створенні аудіо:', e);
        }
    }
    
    // Відновлюємо нормальні анімації через 3 секунди
    setTimeout(() => {
        title.style.animation = '';
        cake.style.animation = '';
        friendName.style.animation = '';
        btn.style.animation = '';
        btn.textContent = '🎉 Почати святкування!';
    }, 3000);
}

// Додаємо анімацію при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function() {
    // Створюємо фонові елементи
    createBackgroundElements();
    
    // Анімація появи елементів
    const elements = document.querySelectorAll('.birthday-card > *');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.8s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Додаємо ефект паралаксу для кульок
    document.addEventListener('mousemove', function(e) {
        const balloons = document.querySelectorAll('.balloon');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        balloons.forEach((balloon, index) => {
            const speed = (index + 1) * 0.5;
            const xOffset = (x - 0.5) * speed * 20;
            const yOffset = (y - 0.5) * speed * 20;
            
            balloon.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
    
    // Додаємо клік по елементам для додаткової анімації
    const interactiveElements = document.querySelectorAll('.gift, .firework, .cake');
    interactiveElements.forEach(el => {
        el.addEventListener('click', function() {
            this.style.transform = 'scale(1.3) rotate(10deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
});

// Функція для створення додаткових ефектів
function addSparkles() {
    const sparkles = document.createElement('div');
    sparkles.innerHTML = '✨';
    sparkles.style.position = 'fixed';
    sparkles.style.left = Math.random() * window.innerWidth + 'px';
    sparkles.style.top = Math.random() * window.innerHeight + 'px';
    sparkles.style.fontSize = '2rem';
    sparkles.style.pointerEvents = 'none';
    sparkles.style.zIndex = '999';
    sparkles.style.animation = 'sparkle 2s ease-out forwards';
    
    document.body.appendChild(sparkles);
    
    setTimeout(() => {
        sparkles.remove();
    }, 2000);
}

// Додаємо випадкові іскорки
setInterval(addSparkles, 2000);

// Функція для створення додаткових фонових елементів
function createBackgroundElements() {
    const body = document.body;
    
    // Створюємо випадкові фонові елементи
    for (let i = 0; i < 15; i++) {
        const bgElement = document.createElement('div');
        bgElement.className = 'random-bg-element';
        bgElement.style.cssText = `
            position: fixed;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            width: ${Math.random() * 100 + 50}px;
            height: ${Math.random() * 100 + 50}px;
            background: url('bg.jpg') center center;
            background-size: cover;
            border-radius: 50%;
            z-index: -4;
            opacity: ${Math.random() * 0.3 + 0.1};
            filter: blur(${Math.random() * 3 + 1}px);
            animation: randomFloat ${Math.random() * 30 + 20}s linear infinite;
            animation-delay: -${Math.random() * 20}s;
        `;
        body.appendChild(bgElement);
    }
}

// Анімація для випадкових фонових елементів
const style = document.createElement('style');
style.textContent = `
    @keyframes randomFloat {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
        }
        25% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(90deg) scale(1.2);
        }
        50% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(180deg) scale(0.8);
        }
        75% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(270deg) scale(1.1);
        }
        100% {
            transform: translate(0, 0) rotate(360deg) scale(1);
        }
    }
`;
document.head.appendChild(style);

// Функції для верифікації
let currentQuestion = 1;
const correctAnswers = {
    1: 12,  // Кількість танго
    2: 3,   // Кількість терабайт порнушки
    3: 'gay' // Сексуальна орієнтація
};

function startVerification() {
    document.getElementById('verificationModal').style.display = 'block';
    currentQuestion = 1;
    showQuestion(1);
}

function showQuestion(questionNum) {
    // Приховуємо всі питання
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
    
    // Показуємо потрібне питання
    if (questionNum === 'success') {
        document.getElementById('success').classList.add('active');
    } else {
        document.getElementById(`question${questionNum}`).classList.add('active');
        
        // Очищаємо поля вводу
        if (questionNum <= 2) {
            document.getElementById(`answer${questionNum}`).value = '';
        }
    }
}

function checkAnswer1() {
    const answer = parseInt(document.getElementById('answer1').value);
    
    if (answer === correctAnswers[1]) {
        // Правильна відповідь - переходимо до другого питання
        currentQuestion = 2;
        showQuestion(2);
    } else {
        // Неправильна відповідь - перенаправляємо на сайт
        redirectToGayMaleTube();
    }
}

function checkAnswer2() {
    const answer = parseInt(document.getElementById('answer2').value);
    
    if (answer === correctAnswers[2]) {
        // Правильна відповідь - переходимо до третього питання
        currentQuestion = 3;
        showQuestion(3);
    } else {
        // Неправильна відповідь - перенаправляємо на сайт
        redirectToGayMaleTube();
    }
}

function checkAnswer3() {
    const answer = document.getElementById('answer3').value;
    
    if (answer === correctAnswers[3]) {
        // Всі три відповіді правильні - показуємо успіх
        showQuestion('success');
    } else {
        // Неправильна відповідь - перенаправляємо на сайт
        redirectToGayMaleTube();
    }
}

// Змінні для мінігри
let gameTimer;
let timeLeft = 10;
let isGameActive = false;

// Функція для початку мінігри
function startMinigame() {
    document.querySelector('.verification-content h2').textContent = 'ЧИ ВАРТИЙ ТИ ТОГО, ЩОБ БУТИ ГЕЄМ?';
    playAudio('win.mp3')
    showQuestion(4);
    isGameActive = true;
    timeLeft = 10;
    
    // Запускаємо таймер
    gameTimer = setInterval(updateTimer, 1000);
    
    // Запускаємо рух кнопки
    startButtonMovement();
}

// Функція оновлення таймера
function updateTimer() {
    timeLeft--;
    document.querySelector('.timer').textContent = timeLeft;
    
    if (timeLeft <= 0) {
        endGame(false); // Поразка
    }
}

// Функція руху кнопки
function startButtonMovement() {
    const button = document.getElementById('cancelButton');
    
    function moveButton() {
        if (!isGameActive) return;
    
        // Максимальні координати для руху по всьому вікну
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
    
        // Випадкові нові координати (від 0 до макс)
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
    
        button.style.position = 'fixed'; // Щоб відноситись до вікна, а не контейнера
        button.style.left = newX + 'px';
        button.style.top = newY + 'px';
    
        // Дуже швидкий рух (від 50мс до 200мс)
        const speed = Math.random() * 150 + 500;
        setTimeout(moveButton, speed);
    }
    
    moveButton();
}

// Функція кліку по кнопці
function buttonClicked() {
    if (isGameActive) {
        endGame(true); // Перемога
    }
}

// Функція закінчення гри
function endGame(won) {
    isGameActive = false;
    clearInterval(gameTimer);
    
    if (won) {
        showWinScreen();
    } else {
        showLoseScreen();
    }
}

// Показ екрану перемоги
function showWinScreen() {
    const winScreen = document.getElementById('win-screen');
    winScreen.style.display = 'block';
    winScreen.style.backgroundImage = 'url("win.jpg")';
    winScreen.style.backgroundSize = 'contain'
    winScreen.style.backgroundPosition = 'left'
    winScreen.style.backgroundRepeat = 'repeat'
    // Відтворюємо звук перемоги
    playAudio('prank.mp3');
}

// Показ екрану поразки
function showLoseScreen() {
    const loseScreen = document.getElementById('lose-screen');
    loseScreen.style.display = 'block';
    loseScreen.style.backgroundImage = 'url("loose.jpg")';
    
    // Відтворюємо звук поразки
    playAudio('loose.mp3');
}

// Функція відтворення аудіо
function playAudio(filename) {
    if (typeof Audio !== 'undefined') {
        try {
        const audio = new Audio(filename);
        audio.volume = 1;
        audio.play().catch((e) => {
            console.log('Не вдалося відтворити аудіо:', e);
        });
    } catch (e) {
        console.log('Помилка при створенні аудіо:', e);
    }
}
}

// Функція закриття екрану гри
function closeGameScreen() {
    document.getElementById('win-screen').style.display = 'none';
    document.getElementById('lose-screen').style.display = 'none';
    closeVerification();
}

function redirectToGayMaleTube() {
    // Створюємо повідомлення про помилку
    alert('ТИ ПРОЇБАВСЯ, АБО ТИ НІХУЯ НЕ ВЛАД');
    
    // Перенаправляємо на вказаний сайт
    setTimeout(() => {
        window.location.href = 'https://www.gaymaletube.com/';
    }, 1000);
}

function closeVerification() {
    document.getElementById('verificationModal').style.display = 'none';
}

// Додаємо можливість закрити модальне вікно кліком поза ним
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('verificationModal');
    
    // Додаємо можливість закрити модальне вікно клавішею Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeVerification();
        }
    });
    
    // Додаємо можливість відповідати на питання клавішею Enter
    document.getElementById('answer1').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAnswer1();
        }
    });
    
    document.getElementById('answer2').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAnswer2();
        }
    });
    
    // Додаємо можливість відповідати на третє питання клавішею Enter
    document.getElementById('answer3').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAnswer3();
        }
    });
}); 