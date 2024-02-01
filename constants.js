const prompts = [
  ["Hello! - I am GTE Cyborg", "Hi! - I am GTE Cyborg", "Hey! - I am GTE Cyborg", "Hi there! - I am GTE Cyborg", "Howdy - I am GTE Cyborg"],
  ["What do you do?"],
  ["Who created you?"],
  ["Tell me about Arindam Deb (ARI)."],
  ["Tell me about Pooja Saxena."],
  ["Tell me about Mahek Mann."],
  ["Tell me about Lesten D’Souza."],
  ["Tell me about Anushree Kulkarni."],
  ["What is the High-level Talent Sourcing Workflow?"],
  ["What is the Committed Resource Weekly Activity Breakdown?"]
];

const replies = [
  ["I am GTE Cyborg, your Global Talent Evangelist! Feel free to chat with me."],
  ["The GTE team, led by individuals like Arindam Deb (ARI), Pooja Saxena, Mahek Mann, Lesten D’Souza, and Anushree Kulkarni, is primarily responsible for Global Executive Hiring. Our key areas of expertise include executing GTE KPIs, sourcing leadership, program management, global intelligence, innovation initiatives, talent communities, executive market intelligence, as well as design and execution of strategic initiatives. Additionally, we play vital roles in managing data, dashboards, and reporting for effective decision-making within the organization."],
  ["The one and only Global Talent Evangelist - GTE Team, using JavaScript."],
  ["Arindam Deb, also known as ARI, is responsible for executing executive hiring strategies, achieving a team target of 24 hires in FY 24, and leading a sourcing team. With a 60% focus on KPI execution (North America Executive Hiring), Ari collaborates with stakeholders, ensures compliance, promotes diversity, conducts market research, and monitors talent pipelines. Additionally, he manages 30% of Market Intelligence using data-driven decision-making and tools adoption. Ari dedicates 10% to research, analytics, and innovation, focusing on continuous improvement, strategic initiatives, and diversity programs. \n\nFocus Areas: Global Executive Hiring, GTE KPI Execution, Sourcing Leadership, Program Management, Global Intelligence, Innovation Initiatives, Talent Communities, Exec Market Intelligence, Design & Execution, Data, Dashboard & Reporting"],
  ["Pooja Saxena's role primarily focuses on Talent Attraction, contributing 70% to Executive Hiring KPI execution. This involves executive search techniques, relationship building, and assessing leadership competencies. Additionally, she handles 20% in Market Intelligence, emphasizing competitor analysis, talent mapping, and forecasting talent trends. With 10% in Data, Dashboards, and reporting on KPI progress.\n\nFocus Areas: Global Executive Hiring, Exec Market Intelligence, Data, Dashboard & Reporting"],
  ["Mahek Mann, a key contributor in Adobe's Global Talent Evangelist (GTE) Team, plays a vital role in executive searches (60%), ensuring alignment with organizational objectives. She drives creativity and strategic insight in projects encompassing Market Intelligence, Strategic Sourcing, and Design (20%). Mahek excels in technical expertise, data-driven storytelling, and mentoring, utilizing tools like PowerPoint, Adobe Illustrator, Adobe Express, SharePoint Site, and Power Bi.\n\nFocus Areas: Global Executive Hiring, Exec Market Intelligence, Innovation Initiatives, Talent Communities, Global Intelligence, Design & Execution"],
  ["Lesten D'Souza's role primarily focuses on Talent Attraction, contributing 70% to Executive Hiring KPI execution. This involves executive search techniques, relationship building, and assessing leadership competencies. Additionally, he handles 20% in Market Intelligence, emphasizing competitor analysis, talent mapping, and forecasting talent trends. With 10% in Design, Analytics, and Projects, Lesten utilizes data analysis, project management, visualization tools, and strategic planning.\n\nFocus Areas: Global Executive Hiring, Exec Market Intelligence, Innovation Initiatives"],
  ["Joining on 12th February 2024, Anushree allocates 40% of her bandwidth to executing Executive Hiring KPIs, ensuring alignment with organizational goals. Additionally, she dedicates 10% to Design and Execution, 40% to Global Market Intelligence, and 20% to cultivating Talent Communities. Anushree excels in strategic insights, data-driven decision-making, and utilizes tools like PowerPoint.\n\nFocus Areas: Global Executive Hiring, Exec Market Intelligence, Talent Communities, Global Intelligence, Design & Execution"],
  ["The high-level talent sourcing workflow includes stages like Prekick-off, Kickoff, Calibration and Sourcing, Name Generation, Research Insights, and Search Strategy Recommendations. Committed resources dedicate 72 hours per week to support 15 searches."],
  ["Activity\tLesten\tMahek\tPooja\tAri\tAnushree\tTotal Weekly Hrs.\nResearch\t5.25\t4.50\t4.20\t4.50\t3.00\t21.45\nDiversity\t3.50\t3.00\t2.80\t3.00\t2.00\t14.30\nScreening + Recommendation Process\t5.25\t4.50\t4.20\t4.50\t3.00\t21.45\nWD (Reviewing Applicants, Data Integrity)\t1.75\t1.50\t1.40\t1.50\t1.00\t7.15\nAdmin (Calibration Materials)\t1.75\t1.50\t1.40\t1.50\t1.00\t7.15\nWeekly Hours\t17.50\t15.00\t14.00\t15.00\t10.00\t71.50"]
];

// Map prompts with replies and print in console
prompts.forEach((prompt, index) => {
  console.log(`Prompt: ${prompt.join(', ')}`);
  console.log(`Reply: ${replies[index].join('\n')}`);
  console.log("-----");
});


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
