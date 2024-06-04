//variables

let btn= document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");


const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      person: "Albert Einstein"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "The best way to predict the future is to invent it.",
      person: "Alan Kay"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "The secret of getting ahead is getting started.",
      person: "Mark Twain"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success.",
      person: "Albert Schweitzer"
    }
  ];
  
btn.addEventListener('click', function(){

    //for generating a random whole number from 0 to quote length
    let random = Math.floor(Math.random()* quotes.length);

    //updating the quote and person to a random property from the object
    quote.innerText = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})
  