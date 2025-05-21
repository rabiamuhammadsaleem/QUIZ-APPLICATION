window.onload = function () {
    Swal.fire({
        imageUrl: "./images/download.jpeg",
        title: '🎯 Let’s Start the Quiz!',
        html: `<p style="font-size: 18px; margin-top: 5px;">Answer smart. Learn fast. Have fun!</p>`,
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',

        position: window.innerWidth < 768 ? 'top' : 'center',
        grow: window.innerWidth < 768 ? 'row' : false,

        width: window.innerWidth < 768 ? '90%' : '600px',
        padding: window.innerWidth < 768 ? '15px' : '2em',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'rounded-popup'
        },
        confirmButtonText: '🚀 Start Quiz',
        confirmButtonColor: '#4a90e2',
        allowOutsideClick: false,
        allowEscapeKey: false,
    }).then((result) => {
        if (result.isConfirmed) {
            showForm();
        }
    });
};

function showForm() {
    Swal.fire({
        title: 'Fill the Form',
        position: 'top',
        html:
            `<div class="container">Name:
        <input type="text" id="name" placeholder="Enter Your Name" class="data" autocomplete="off">
      </div>
      <div class="container">Father Name:
        <input type="text" id="fatherName" placeholder="Enter Your Father Name" class="data" autocomplete="off">
      </div>
      <div class="container">
        <label for="course">Course:</label>
        <select id="course" class="data">
          <option value="">Select Course:</option>
          <option value="js">Web And App</option>
          <option value="html">Graphic Designing</option>
          <option value="css">Digital Marketing</option>
        </select>
      </div>
      <div class="container">Email:
        <input type="email" id="email" placeholder="Enter your email" class="data" autocomplete="off">
      </div>
      <div class="container">ID Number:
        <input type="number" id="idNumber" placeholder="Enter your ID number" class="data" autocomplete="off">
      </div>
      <div class="container">
        <label for="teacher">Teacher's Name:</label>
        <select id="teacher" class="data">
          <option value="">Select Teacher Name:</option>
          <option value="teacher1">Miss Tayyyaba</option>
          <option value="teacher2">Miss Hina</option>
        </select>
      </div>`,
        confirmButtonText: 'Next',
        preConfirm: () => {
            const name = document.getElementById('name').value.trim();
            const fatherName = document.getElementById('fatherName').value.trim();
            const course = document.getElementById('course').value;
            const email = document.getElementById('email').value.trim();
            const idNumber = document.getElementById('idNumber').value.trim();
            const teacher = document.getElementById('teacher').value;

            if (!name) return Swal.showValidationMessage('Please enter your name');
            if (!fatherName) return Swal.showValidationMessage('Please enter your father name');
            if (!course) return Swal.showValidationMessage('Please select a course');
            if (!email) return Swal.showValidationMessage('Please enter your email');
            if (!idNumber) return Swal.showValidationMessage('Please enter your ID number');
            if (!teacher) return Swal.showValidationMessage("Please select your teacher's name");

            return true;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById("options-section").classList.remove("hidden");
        }
    });
}

// Quiz Questions 
const quizQuestions = {
    general: [
        {
            question: "What is the capital of Pakistan?",
            opt1: "Karachi",
            opt2: "Lahore",
            opt3: "Islamabad",
            opt4: "Peshawar",
            correct: "Islamabad"
        },
        {
            question: "Which city is known as the economic hub of Pakistan?",
            opt1: "Karachi",
            opt2: "Islamabad",
            opt3: "Lahore",
            opt4: "Multan",
            correct: "Karachi"
        },
        {
            question: "Who was the first Prime Minister of Pakistan?",
            opt1: "Liaquat Ali Khan",
            opt2: "Zulfikar Ali Bhutto",
            opt3: "Benazir Bhutto",
            opt4: "Ayub Khan",
            correct: "Liaquat Ali Khan"
        },
        {
            question: "In which year did Pakistan become a nuclear power?",
            opt1: "1995",
            opt2: "1998",
            opt3: "2000",
            opt4: "1996",
            correct: "1998"
        },
        {
            question: "Which is the national flower of Pakistan?",
            opt1: "Jasmine",
            opt2: "Rose",
            opt3: "Tulip",
            opt4: "Sunflower",
            correct: "Jasmine"
        },
        {
            question: "What is the national language of Pakistan?",
            opt1: "Urdu",
            opt2: "Punjabi",
            opt3: "English",
            opt4: "Sindhi",
            correct: "Urdu"
        },
        {
            question: "Which river is the longest in Pakistan?",
            opt1: "Chenab",
            opt2: "Indus",
            opt3: "Ravi",
            opt4: "Jhelum",
            correct: "Indus"
        },
        {
            question: "Which mountain is the highest in Pakistan?",
            opt1: "Nanga Parbat",
            opt2: "Mount Everest",
            opt3: "K2",
            opt4: "Tirich Mir",
            correct: "K2"
        },
        {
            question: "When did Pakistan become independent?",
            opt1: "14 August 1947",
            opt2: "15 August 1947",
            opt3: "23 March 1940",
            opt4: "14 August 1948",
            correct: "14 August 1947"
        },
        {
            question: "Who is known as the Father of the Nation in Pakistan?",
            opt1: "Allama Iqbal",
            opt2: "Liaquat Ali Khan",
            opt3: "Muhammad Ali Jinnah",
            opt4: "Ayub Khan",
            correct: "Muhammad Ali Jinnah"
        },
        {
            question: "Which city is famous for its historical Mughal architecture in Pakistan?",
            opt1: "Islamabad",
            opt2: "Lahore",
            opt3: "Quetta",
            opt4: "Sialkot",
            correct: "Lahore"
        },
        {
            question: "Which province is the largest by area in Pakistan?",
            opt1: "Punjab",
            opt2: "Sindh",
            opt3: "Khyber Pakhtunkhwa",
            opt4: "Balochistan",
            correct: "Balochistan"
        },
        {
            question: "What does the white color in Pakistan's flag represent?",
            opt1: "Peace",
            opt2: "Muslim majority",
            opt3: "Minorities",
            opt4: "Progress",
            correct: "Minorities"
        },
        {
            question: "Which Pakistani scientist is known as the father of Pakistan's nuclear program?",
            opt1: "Abdus Salam",
            opt2: "Dr. Abdul Qadeer Khan",
            opt3: "Dr. Samar Mubarakmand",
            opt4: "Dr. Atta-ur-Rahman",
            correct: "Dr. Abdul Qadeer Khan"
        },
        {
            question: "Which currency is used in Pakistan?",
            opt1: "Rupee",
            opt2: "Taka",
            opt3: "Rial",
            opt4: "Dirham",
            correct: "Rupee"
        }
    ],
    iq: [
        {
            question: "What comes next: 2, 4, 8, 16, ...?",
            opt1: "18",
            opt2: "24",
            opt3: "32",
            opt4: "36",
            correct: "32"
        },
        {
            question: "If ALL PENS are BOOKS and ALL BOOKS are TREES, then all PENS are?",
            opt1: "Trees",
            opt2: "Pens",
            opt3: "Books",
            opt4: "None",
            correct: "Trees"
        },
        {
            question: "What comes next in the sequence: 2, 6, 12, 20, ?",
            opt1: "28",
            opt2: "30",
            opt3: "32",
            opt4: "36",
            correct: "30"
        },
        {
            question: "If 3 cats can catch 3 mice in 3 minutes, how many cats are needed to catch 100 mice in 100 minutes?",
            opt1: "3",
            opt2: "100",
            opt3: "33",
            opt4: "9",
            correct: "3"
        },
        {
            question: "Which word does not belong to the group?",
            opt1: "Apple",
            opt2: "Banana",
            opt3: "Carrot",
            opt4: "Mango",
            correct: "Carrot"
        },
        {
            question: "What is the missing number: 4, 9, 16, 25, ?",
            opt1: "36",
            opt2: "30",
            opt3: "33",
            opt4: "40",
            correct: "36"
        },
        {
            question: "If TODAY is TUESDAY, what day will it be after 100 days?",
            opt1: "Wednesday",
            opt2: "Thursday",
            opt3: "Friday",
            opt4: "Saturday",
            correct: "Thursday"
        },
        {
            question: "Which number is the odd one out: 2, 3, 5, 9, 11, 13?",
            opt1: "5",
            opt2: "9",
            opt3: "11",
            opt4: "13",
            correct: "9"
        },
        {
            question: "What comes next: J, F, M, A, M, J, J, A, S, ?",
            opt1: "O",
            opt2: "N",
            opt3: "D",
            opt4: "T",
            correct: "O"
        },
        {
            question: "If E = 5 and TEA = 26, then what is the value of CUP?",
            opt1: "40",
            opt2: "43",
            opt3: "45",
            opt4: "50",
            correct: "45"
        },
        {
            question: "What is the next number in the series: 1, 1, 2, 3, 5, 8, ?",
            opt1: "13",
            opt2: "12",
            opt3: "11",
            opt4: "14",
            correct: "13"
        },
        {
            question: "If SOUTH is coded as 12345, and NORTH as 54321, then SNORT is?",
            opt1: "15342",
            opt2: "14325",
            opt3: "15432",
            opt4: "12435",
            correct: "15432"
        },
        {
            question: "Which number replaces the question mark: 3, 6, 18, 72, ?",
            opt1: "360",
            opt2: "288",
            opt3: "216",
            opt4: "144",
            correct: "360"
        },
        {
            question: "If 1=5, 2=25, 3=325, then 4 = ?",
            opt1: "4325",
            opt2: "425",
            opt3: "432",
            opt4: "5325",
            correct: "4325"
        },
        {
            question: "Which is the mirror image of the word 'BOX'?",
            opt1: "XOB",
            opt2: "BOX",
            opt3: "XOƃ",
            opt4: "ƎOX",
            correct: "XOB"
        }
    ],

    math: [
        {
            question: "What is 12 * 8?",
            opt1: "96",
            opt2: "108",
            opt3: "84",
            opt4: "92",
            correct: "96"
        },
        {
            question: "What is 2 + 2?",
            opt1: "3",
            opt2: "4",
            opt3: "5",
            opt4: "6",
            correct: "4"
        },
        {
            question: "What is 10 - 4?",
            opt1: "6",
            opt2: "5",
            opt3: "7",
            opt4: "8",
            correct: "6"
        },
        {
            question: "What is 3 x 3?",
            opt1: "6",
            opt2: "9",
            opt3: "12",
            opt4: "8",
            correct: "9"
        },
        {
            question: "What is 12 ÷ 4?",
            opt1: "2",
            opt2: "3",
            opt3: "4",
            opt4: "5",
            correct: "3"
        },
        {
            question: "What is 5 squared?",
            opt1: "10",
            opt2: "20",
            opt3: "25",
            opt4: "15",
            correct: "25"
        },
        {
            question: "What is the value of Pi (approx)?",
            opt1: "2.14",
            opt2: "3.14",
            opt3: "1.41",
            opt4: "4.13",
            correct: "3.14"
        },
        {
            question: "What is 100 - 45?",
            opt1: "55",
            opt2: "65",
            opt3: "75",
            opt4: "85",
            correct: "55"
        },
        {
            question: "What is 7 + 6?",
            opt1: "12",
            opt2: "14",
            opt3: "13",
            opt4: "11",
            correct: "13"
        },
        {
            question: "What is half of 20?",
            opt1: "10",
            opt2: "15",
            opt3: "5",
            opt4: "8",
            correct: "10"
        },
        {
            question: "What is 9 x 2?",
            opt1: "18",
            opt2: "16",
            opt3: "20",
            opt4: "22",
            correct: "18"
        },
        {
            question: "What is 25 + 25?",
            opt1: "50",
            opt2: "40",
            opt3: "55",
            opt4: "60",
            correct: "50"
        },
        {
            question: "What is the square root of 36?",
            opt1: "5",
            opt2: "6",
            opt3: "7",
            opt4: "8",
            correct: "6"
        },
        {
            question: "What is 8 ÷ 2?",
            opt1: "3",
            opt2: "4",
            opt3: "6",
            opt4: "5",
            correct: "4"
        },
        {
            question: "What is 11 + 11?",
            opt1: "20",
            opt2: "21",
            opt3: "22",
            opt4: "23",
            correct: "22"
        },
    ],

    islamic: [
        {
            question: "How many times a day do Muslims pray?",
            opt1: "3",
            opt2: "4",
            opt3: "5",
            opt4: "6",
            correct: "5"
        },
        {
            question: "Who is the last Prophet in Islam?",
            opt1: "Prophet Isa",
            opt2: "Prophet Musa",
            opt3: "Prophet Muhammad (PBUH)",
            opt4: "Prophet Ibrahim",
            correct: "Prophet Muhammad (PBUH)"
        },
        {
            question: "What is the holy book of Muslims?",
            opt1: "Bible",
            opt2: "Torah",
            opt3: "Quran",
            opt4: "Vedas",
            correct: "Quran"
        },
        {
            question: "What is the first month of the Islamic calendar?",
            opt1: "Ramadan",
            opt2: "Muharram",
            opt3: "Shawwal",
            opt4: "Rajab",
            correct: "Muharram"
        },
        {
            question: "Which city do Muslims face during prayer?",
            opt1: "Madinah",
            opt2: "Jerusalem",
            opt3: "Makkah",
            opt4: "Cairo",
            correct: "Makkah"
        },
        {
            question: "What is the fasting month called?",
            opt1: "Shaban",
            opt2: "Ramadan",
            opt3: "Dhul Hijjah",
            opt4: "Muharram",
            correct: "Ramadan"
        },
        {
            question: "How many Surahs are in the Quran?",
            opt1: "112",
            opt2: "114",
            opt3: "116",
            opt4: "120",
            correct: "114"
        },
        {
            question: "What does 'Islam' mean?",
            opt1: "Peace",
            opt2: "Love",
            opt3: "Obedience",
            opt4: "Kindness",
            correct: "Peace"
        },
        {
            question: "What is Hajj?",
            opt1: "Fasting",
            opt2: "Charity",
            opt3: "Pilgrimage",
            opt4: "Prayer",
            correct: "Pilgrimage"
        },
        {
            question: "How many pillars of Islam are there?",
            opt1: "3",
            opt2: "4",
            opt3: "5",
            opt4: "6",
            correct: "5"
        },
        {
            question: "Which angel delivered the Quran?",
            opt1: "Israfil",
            opt2: "Jibrael",
            opt3: "Mikael",
            opt4: "Azrael",
            correct: "Jibrael"
        },
        {
            question: "What is Zakat?",
            opt1: "Fasting",
            opt2: "Charity",
            opt3: "Pilgrimage",
            opt4: "Prayer",
            correct: "Charity"
        },
        {
            question: "Which animal is mentioned in Surah Al-Fil?",
            opt1: "Horse",
            opt2: "Lion",
            opt3: "Elephant",
            opt4: "Camel",
            correct: "Elephant"
        },
        {
            question: "Which Prophet built the Kaaba with his son?",
            opt1: "Musa",
            opt2: "Ibrahim",
            opt3: "Isa",
            opt4: "Nuh",
            correct: "Ibrahim"
        },
        {
            question: "Where was Prophet Muhammad (PBUH) born?",
            opt1: "Madinah",
            opt2: "Jerusalem",
            opt3: "Makkah",
            opt4: "Taif",
            correct: "Makkah"
        },
    ],

    quran: [
        {
            question: "What is the first word revealed in the Quran?",
            opt1: "Bismillah",
            opt2: "Iqra",
            opt3: "Alhamdulillah",
            opt4: "Qul",
            correct: "Iqra"
        },
        {
            question: "What is the longest Surah in the Quran?",
            opt1: "Al-Fatiha",
            opt2: "Al-Baqarah",
            opt3: "Al-Kahf",
            opt4: "Yaseen",
            correct: "Al-Baqarah"
        },
        {
            question: "What is the shortest Surah?",
            opt1: "Al-Kawthar",
            opt2: "Al-Asr",
            opt3: "Al-Ikhlas",
            opt4: "An-Nas",
            correct: "Al-Kawthar"
        },
        {
            question: "Which Surah means 'The Opening'?",
            opt1: "Al-Baqarah",
            opt2: "Al-Fatiha",
            opt3: "Al-Nas",
            opt4: "Al-Ikhlas",
            correct: "Al-Fatiha"
        },
        {
            question: "How many Juz are in the Quran?",
            opt1: "30",
            opt2: "60",
            opt3: "114",
            opt4: "99",
            correct: "30"
        },
        {
            question: "In which language was the Quran revealed?",
            opt1: "Urdu",
            opt2: "Arabic",
            opt3: "Hebrew",
            opt4: "Persian",
            correct: "Arabic"
        },
        {
            question: "Which Surah has no Bismillah?",
            opt1: "Al-Baqarah",
            opt2: "Al-Tawbah",
            opt3: "Al-Ma'idah",
            opt4: "Al-Anfal",
            correct: "Al-Tawbah"
        },
        {
            question: "What is the last Surah of the Quran?",
            opt1: "Al-Ikhlas",
            opt2: "Al-Nas",
            opt3: "Al-Falaq",
            opt4: "Al-Kawthar",
            correct: "Al-Nas"
        },
        {
            question: "Which Surah is called the heart of the Quran?",
            opt1: "Al-Fatiha",
            opt2: "Al-Baqarah",
            opt3: "Yaseen",
            opt4: "Al-Nas",
            correct: "Yaseen"
        },
        {
            question: "Which Surah was revealed completely in one night?",
            opt1: "Al-Fatiha",
            opt2: "Al-Baqarah",
            opt3: "Al-Anfal",
            opt4: "Al-An'am",
            correct: "Al-An'am"
        },
        {
            question: "Which Surah has two Bismillahs?",
            opt1: "Al-Naml",
            opt2: "Al-Tawbah",
            opt3: "Al-Fajr",
            opt4: "Al-Baqarah",
            correct: "Al-Naml"
        },
        {
            question: "Which Prophet is mentioned the most in the Quran?",
            opt1: "Ibrahim",
            opt2: "Isa",
            opt3: "Musa",
            opt4: "Muhammad (PBUH)",
            correct: "Musa"
        },
        {
            question: "Which Surah is recited in every Rak'ah of prayer?",
            opt1: "Al-Baqarah",
            opt2: "Al-Kawthar",
            opt3: "Al-Fatiha",
            opt4: "Al-Ikhlas",
            correct: "Al-Fatiha"
        },
        {
            question: "How many Makki Surahs are there in the Quran?",
            opt1: "86",
            opt2: "28",
            opt3: "100",
            opt4: "92",
            correct: "86"
        },
        {
            question: "Which Surah mentions both Makkah and Madinah?",
            opt1: "Al-Baqarah",
            opt2: "Al-Tawbah",
            opt3: "Al-Fath",
            opt4: "Al-Mumtahanah",
            correct: "Al-Fath"
        },
    ],

    web: [
        {
            question: "What is a website?",
            opt1: "A TV program",
            opt2: "A printed book",
            opt3: "A collection of web pages",
            opt4: "An email address",
            correct: "A collection of web pages"
        },
        {
            question: "What does HTML stand for?",
            opt1: "Hyper Trainer Marking Language",
            opt2: "Hyper Text Markup Language",
            opt3: "Hyper Text Marketing Language",
            opt4: "Hyperlink Text Mark Language",
            correct: "Hyper Text Markup Language"
        },
        {
            question: "Which property is used in CSS to change text color?",
            opt1: "font-color",
            opt2: "color",
            opt3: "text-color",
            opt4: "foreground",
            correct: "color"
        },
        {
            question: "What does CSS stand for?",
            opt1: "Cascading Style Sheets",
            opt2: "Colorful Style Syntax",
            opt3: "Creative Style System",
            opt4: "Computer Style Sheet",
            correct: "Cascading Style Sheets"
        },
        {
            question: "Which JavaScript function is used to write text to the browser console?",
            opt1: "console.write()",
            opt2: "document.write()",
            opt3: "console.log()",
            opt4: "print()",
            correct: "console.log()"
        },
        {
            question: "In web development, what is Bootstrap primarily used for?",
            opt1: "Database queries",
            opt2: "Server scripting",
            opt3: "Responsive design",
            opt4: "Image editing",
            correct: "Responsive design"
        },

        {
            question: "Which of the following is a JavaScript framework?",
            opt1: "Laravel",
            opt2: "Django",
            opt3: "React",
            opt4: "MySQL",
            correct: "React"
        },
        {
            question: "What is HTML used for?",
            opt1: "To style pages",
            opt2: "To add logic",
            opt3: "To create web page structure",
            opt4: "To store data",
            correct: "To create web page structure"
        },
        {
            question: "What is the file extension for HTML?",
            opt1: ".css",
            opt2: ".html",
            opt3: ".js",
            opt4: ".txt",
            correct: ".html"
        },
        {
            question: "What does CSS do?",
            opt1: "Adds behavior",
            opt2: "Stores data",
            opt3: "Styles web pages",
            opt4: "Compiles code",
            correct: "Styles web pages"
        },
        {
            question: "What is JavaScript mainly used for?",
            opt1: "Database queries",
            opt2: "Adding interactivity",
            opt3: "Making layouts",
            opt4: "Styling pages",
            correct: "Adding interactivity"
        },
        {
            question: "Which of these is a web browser?",
            opt1: "Google Chrome",
            opt2: "Adobe Photoshop",
            opt3: "MS Word",
            opt4: "FileZilla",
            correct: "Google Chrome"
        },
        {
            question: "Which symbol is used for a class in CSS?",
            opt1: "#",
            opt2: "%",
            opt3: ".",
            opt4: "&",
            correct: "."
        },
        {
            question: "Which input type is used for passwords?",
            opt1: "text",
            opt2: "hidden",
            opt3: "password",
            opt4: "secure",
            correct: "password"
        },
        {
            question: "Which attribute is used to specify the destination of a link?",
            opt1: "src",
            opt2: "href",
            opt3: "alt",
            opt4: "target",
            correct: "href"
        },
    ]
};

// Start quiz function
function startQuiz(type) {
    const quizTitles = {
        general: "General Knowledge Quiz",
        web: "Web and App Quiz",
        iq: "IQ Quiz",
        math: "Math Quiz",
        islamic: "Islamic Quiz",
        quran: "Quran Quiz"
    };

    document.getElementById("quiz-title").innerText = quizTitles[type] || "Quiz";
    document.getElementById("options-section").classList.add("hidden");
    document.getElementById("quiz-section").classList.remove("hidden");


    const totalQuestions = quizQuestions[type].length;
    document.getElementById("total-questions").textContent = totalQuestions;


    // Timer functionality
    let timeLeft = 360;
    const timerElement = document.querySelector('.timer');

    const timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        } else {
            timeLeft--;
        }
    }, 1000);

    // Load first question
    let quiz = document.getElementById("quiz");
    let index = 0;
    let score = 0;
    let wrongAnswers = 0;

    function loadQuestion() {
        document.getElementById("current-question").textContent = index + 1;
        let q = quizQuestions[type][index];
        quiz.innerHTML = `
      <h1>Question # ${index + 1}</h1>
      <h3>${q.question}</h3>
<label><input type="radio" name="opt" value="${q.opt1}">${q.opt1}</label><br>
<label><input type="radio" name="opt" value="${q.opt2}">${q.opt2}</label><br>
<label><input type="radio" name="opt" value="${q.opt3}">${q.opt3}</label><br>
<label><input type="radio" name="opt" value="${q.opt4}">${q.opt4}</label><br>
    `;
    }
    function endQuiz() {
        document.querySelector('.quiz-header').style.display = "none";
        clearInterval(timerInterval);
        let percentage = (score / totalQuestions) * 100;
        wrongAnswers = totalQuestions - score;
        document.getElementById("quiz").innerHTML = `
    <div class="score-page">
      <h2>Quiz completed successfully</h2>
      <div class="percentage">${percentage.toFixed(0)}% Score</div>
      <div class="attempted">Well done! You have successfully answered <span class="qno"> ${score}</span> out of <span class="tq"> ${totalQuestions} </span> questions correctly and <span class="wq">${wrongAnswers} </span> incorrect attempts </div>
      <button id="restart" class="restart-btn">Restart Quiz</button>
      </div>
  `;

        Swal.fire({
            title: "Congratulations!",
            text: "You completed the quiz.",
            imageUrl: "./images/images.jpeg",
            imageWidth: 250,
            imageHeight: 250,
            imageAlt: "Popup image",
            width: 350,
            height: 150,
        });
        document.querySelector('.quiz-header').classList.add('hidden');
        document.getElementById("next").style.display = "none";
        document.getElementById("restart").addEventListener("click", restartQuiz);

    }

    function restartQuiz() {
        index = 0;
        score = 0;
        timeLeft = 180;

        document.querySelector('.quiz-header').classList.remove('hidden');
        document.getElementById("next").style.display = "block";
        loadQuestion();
    }

    document.getElementById("next").onclick = function () {
        const selected = document.querySelector('input[name="opt"]:checked');
        if (!selected) {
            Swal.fire({
                title: 'Oops!',
                text: 'Please select an answer before proceeding.',
                icon: 'warning',
                iconColor: '#f8bb86',

                position: window.innerWidth < 768 ? 'top' : 'center',
                width: window.innerWidth < 768 ? '90%' : '400px',
                padding: window.innerWidth < 768 ? '1rem' : '1.5rem',


                showClass: {
                    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
                },
                hideClass: {
                    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
                }
            });
            return;
        }
        else {
            const userAnswer = selected.value;
            const correctAnswer = quizQuestions[type][index].correct;

            if (userAnswer === correctAnswer) {
                score++;
            }
        }
        index++;

        if (index < quizQuestions[type].length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    };

    loadQuestion();
}
