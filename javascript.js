const quotes = [
  "It's never too late to be what you might have been",
  "Success isn't final failure, is not fatal, it's the courage to continue that counts",
  "If you want the best the world has to offer, offer the world your best",
  "Instead of worrying about what you cannot control shift your energy to what you can create",
  "The future belongs to those who believe in the beauty of their dreams",
  "It's only after you've stepped outside your comfort zone that you begin to change, grow, and transform",
];


const quote = document.getElementById('quote');
const input = document.getElementById('typed-value');
const start = document.getElementById('start');
const message = document.getElementById('message')

let wordQueue;
let highlightPosition ;
let startTime;

function startGame() {
   
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    quoteText = quotes[quoteIndex];

  wordQueue = quoteText.split(' ');
   quote.innerHTML = wordQueue.map(word => (`<span>${word}</span>`)).join('');

    highlightPosition = 0;
    quote.childNodes[highlightPosition].className = 'highlight';

    startTime = new Date().getTime();

    document.body.className = ' ';
    start.className = 'started'
}

function checkInput() {
    console.log('checking input');

   const currentWord = wordQueue [0].replaceAll('.','').replaceAll('.','').replaceAll(':','').replaceAll(';','');
  const typedValue = input.value.trim();

   if (currentWord !== typedValue) {
        input.className = currentWord.startsWith(typedValue) ? '' : 'error';
       return;
    }

    wordQueue.shift();  
    input.value = '';

    quote.childNodes[highlightPosition].className = '';

    input.focus();
    input.value = '';
    message.innerText = '';

    if (wordQueue.length === 0){
      gameOver();
        return;
        }

    highlightPosition++;
    quote.childNodes[highlightPosition].className = 'highlight';
}

function gameOver() {
    const elapsedTime = new Date().getTime() - startTime;
    message.innerHTML=
    `<span class="congracts"> Congratulations!</span>
    <br> You finished in ${elapsedTime/1000} seconds.`;
    document.body.className = "winner"

}


start.addEventListener('click', startGame);
input.addEventListener('input', checkInput);