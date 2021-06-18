const quotes = [
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "No wise man ever wished to be younger.",
        author: "Jonathan Swift",
    },
    {
        quote: "The true traveler is he who goes on foot, and even then, he sits down a lot of the time.",
        author: "Colette",
    },
    {
        quote: "I suppose that's one of the ironies of life doing the wrong thing at the right moment.",
        author: "Charlie Chaplin",
    },
    {
        quote: "All would live long, but none would be old.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Dream as if you'll live forever. Live as if you'll die today.",
        author: "James Dean",
    },
    {
        quote: "Life is a tale told by an idiot -- full of sound and fury, signifying nothing.",
        author: "William Shakespeare",
    },
    {
        quote: "The duty of youth is to challenge corruption.",
        author: "Kurt Cobain",
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
        author: "Albert Einstein",
    },
    {
        quote: "Youth is something very new: twenty years ago no one mentioned it.",
        author: "Gabriel Coco Chanel",
    },
    


];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

