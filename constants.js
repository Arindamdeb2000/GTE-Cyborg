// Define questions and corresponding answers
const knowledgeBase = {
  "What is Sourcing pod?": "Sourcing pod is a comprehensive learning platform that provides sourcers with the opportunity to enhance their skills in various sourcing practices, enabling them to stay up-to-date with the latest techniques and trends.",
  "What is Boolean Bank?": "Boolean Bank serves as a comprehensive repository for all the Boolean Strings created by sourcing functions, providing a centralized resource for future use and reference.",
  "What is Extrapolations?": "Extrapolations is a centralized storage system for handout notes, cheat sheets, tools, and other resources used by sourcing functions, facilitating easy access and utilization for future projects.",
  "What is Adobe PCO?": "Adobe PCO (Product Competitor Overview) is a valuable resource that lists competitors' products based on three business verticals, including Creative Cloud, Document Cloud, and Experience Cloud, helping sourcing functions to gain a better understanding of the market and make informed decisions."
};

// Function to get a response based on the user's question
function getBotResponse(userQuestion) {
  const question = userQuestion.toLowerCase();
  return knowledgeBase[question] || "I'm sorry, I don't have information on that topic.";
}
