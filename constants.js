// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["What do you do?", "What do GTE Executive Team do?"],
  ["Tell me about Arindam Deb (ARI)."],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
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
  ["Hello! -  I an GTE Cyborg", "Hi! -  I an GTE Cyborg", "Hey!" -  I an GTE Cyborg, "Hi there! -  I an GTE Cyborg","Howdy -  I an GTE Cyborg"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "I am GTE Cyborg, your Global Talent Evangelist! Feel free to chat with me.",
    "The GTE team, led by individuals like Arindam Deb (ARI), Pooja Saxena, Mahek Mann, Lesten D’Souza, and Anushree Kulkarni, is primarily responsible for Global Executive Hiring. Their key areas of expertise and focus include executing GTE KPIs, sourcing leadership, program management, global intelligence, innovation initiatives, talent communities, executive market intelligence, as well as design and execution of strategic initiatives. Additionally, they play vital roles in managing data, dashboards, and reporting for effective decision-making within the organization.",
    "The GTE team, led by individuals like Arindam Deb (ARI), Pooja Saxena, Mahek Mann, Lesten D’Souza, and Anushree Kulkarni, is primarily responsible for Global Executive Hiring. Their key areas of expertise and focus include executing GTE KPIs, sourcing leadership, program management, global intelligence, innovation initiatives, talent communities, executive market intelligence, as well as design and execution of strategic initiatives. Additionally, they play vital roles in managing data, dashboards, and reporting for effective decision-making within the organization.",
    "I am GTE Cyborg, your Global Talent Evangelist! Feel free to chat with me."
  ],
  ["Arindam Deb, also known as ARI, is responsible for executing executive hiring strategies, achieving a team target of 24 hires in FY 24, and leading a sourcing team. With a 60% focus on KPI execution (North America Executive Hiring), Ari collaborates with stakeholders, ensures compliance, promotes diversity, conducts market research, and monitors talent pipelines. Additionally, he manages 30% of Market Intelligence using data-driven decision-making and tools adoption. Ari dedicates 10% to research, analytics, and innovation, focusing on continuous improvement, strategic initiatives, and diversity programs. \n\nFocus Areas: Global Executive Hiring, GTE KPI Execution, Sourcing Leadership, Program Management, Global Intelligence, Innovation Initiatives, Talent Communities, Exec Market Intelligence, Design & Execution, Data, Dashboard & Reporting"],
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
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!","Good one!"]
]

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
