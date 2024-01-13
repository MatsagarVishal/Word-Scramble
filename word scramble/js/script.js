let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]



const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const refreshBtn = document.querySelector(".refresh-word");
const checkWordBtn = document.querySelector(".check-word");
const userWord = document.querySelector(".input");
const time = document.querySelector(".time span b");

const initTime = maxValue => {
    let timer = setInterval(() => {
        if (maxValue > 0) {
            maxValue--;
            time.innerText = maxValue;
        }
        if (maxValue == 0) {
            clearInterval(timer);
            alert("Opp's Time's Up....");
        }
    }, 1000);
}

let currectWord;
const initGame = () => {
    initTime(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];// Gatting random obj

    let wordArray = randomObj.word.split(""); // gatting word as array
    // shuufling the word letters
    for (i = wordArray.length - 1; i > 0; i--) {
        // gatting random number
        let j = Math.floor(Math.random() * i + 1);
        //swapping 
        let temp = wordArray[i];
        wordArray[i] = wordArray[j];
        wordArray[j] = temp;
    }
    console.log(wordArray);
    currectWord = randomObj.word.toLowerCase();
    console.log(wordArray, randomObj.word);
    wordText.innerText = wordArray.join("");

    hintText.innerText = randomObj.hint;

}
initGame();

const checkWord = () => {

    let userWord1 = userWord.value.toLowerCase();
    if (userWord1 === currectWord) {
        alert("Yes ..! Correct ...yeah");
        location.reload();
    }
    else {
        alert(`Opp's It's Wrong.....Correct Word is ${currectWord}`)
    }

}

refreshBtn.addEventListener("click", initGame);
checkWordBtn.addEventListener("click", checkWord);

