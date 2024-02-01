// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what do you do", "what's your role", "what is up"],
  ["how many hours gte supports the north american executive team"],
  ["What does Lesten do"], 
  ["What does Mahek do"], 
  ["What does Ari do"],
  ["What does Pooja do"], 
  ["What does Anushree do"],
  ["who created you", "who made you"],
  [
    "What does Lesten D'Souza do",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["haha","ha","lol","hehe","funny","joke"]
]
// Possible responses, in corresponding order
const replies = [
  ["Hello! - I am GTE Cyborg", "Hi! - I am GTE Cyborg", "Hey! - I am GTE Cyborg", "Hi there! - I am GTE Cyborg", "Howdy - I am GTE Cyborg"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "The GTE team, led by individuals like Arindam Deb (ARI), Pooja Saxena, Mahek Mann, Lesten D’Souza, and Anushree Kulkarni, is primarily responsible for Global Executive Hiring. Their key areas of expertise and focus include executing GTE KPIs, sourcing leadership, program management, global intelligence, innovation initiatives, talent communities, executive market intelligence, as well as design and execution of strategic initiatives. Additionally, they play vital roles in managing data, dashboards, and reporting for effective decision-making within the organization.",
    "Global Executive Hiring,Exec Market Intelligence,Research and Innovation",  // Moved this response to the correct position
    "Can you guess?",
    "I don't know actually"
  ],
  ["72 Hours... precisely"],
  [
    "Global Executive Hiring,Exec Market Intelligence,Innovation Initiatives"
  ],
  ["Global Executive Hiring,Exec Market Intelligence,Innovation Initiatives,Talent Communities,Global Intelligence,Design & Execution"],
  ["Global Executive Hiring,GTE KPI Execution,Sourcing Leadership,Program Management,Global Intelligence,Innovation Initiatives,Talent Communities,Exec Market Intelligence,Design & Execution,Data, Dashboard & Reporting"],
  ["Global Executive Hiring,Exec Market Intelligence,Data, Dashboard & Reporting"],
  ["Global Executive Hiring,Exec Market Intelligence,Talent Communities,Global Intelligence,Design & Execution"],
  ["The one and only Global Talent Evangelist -GTE Team, using JavaScript"],
  ["Global Executive Hiring,Exec Market Intelligence,Innovation Initiatives - With 70% dedicated towards Sourcing 20% towards Market Intelligence and 10% towards project initiatives", "I don't have a name"],
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
const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"];
