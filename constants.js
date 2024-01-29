// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  [
    "What are the primary responsibilities of the GTE team?",
    "In which areas does the GTE team specialize?",
    "How does the GTE team contribute to its respective field?",
    "What does GTE team do?", "GTE","Global Talent Evangelist"
  ],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may I know your name",
    "what is your name",
    "what do you call yourself"
  ],
  ["I love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me a story", "tell me a joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "goodbye", "see you later"],
  ["what should I eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"]
];

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "The Global Talent Evangelist (CoE) team = Research Oriented Talent Identification from across the globe, purposeful nurturing of top talent to meet Adobe's business objectives.",
    [
      "a. Spearheading technological innovations",
      "b. Advancing research and development",
      "c. Improving user experiences"
    ]
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"]
];

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
];

// Whatever else you want :)

const coronavirus = [
  "Please stay home",
  "Wear a mask",
  "Fortunately, I don't have COVID",
  "These are uncertain times"
];
