const quotes = [
    {
        quote: "Happiness depends upon ourselves",
        author: "Aristotle",
    },
    {
        quote: "Happiness is when what you think, what you say, and what you do are in harmony",
        author: "Mahatma Gandhi",

    },
    {
        quote: "The moments of happiness we enjoy take us by surprise. It is not that we seize them, but that they seize us",
        author: "Ashley Montagu",
    },
    {
        quote: "Even if happiness forgets you a little bit, never completely forget about it",
        author: "Jaques Prevert",
    },
    {
        quote: "One of the secrets of a happy life is continuous small treats",
        author: "Iris Murdoch",
    },
    {
        quote: "The only joy in the world is to begin",
        author: "Cesare Pavese",
    },
    {
        quote: "It is only possible to live happily ever after on a daily basis",
        author: "Margaret Bonanno",
    },
    {
        quote: "The pleasure which we most rarely experience gives us greatest delight",
        author: "Epictetus",
    },
    {
        quote: "Remember this, that very little is needed to make a happy life",
        author: "Marcus Aurelius",
    },
    {
        quote: "I wake up every morning with a great desire to live joyfully",
        author: "Anna Howard Shaw",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;