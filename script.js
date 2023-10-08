const API_URL = "https://zenquotes.io/api/today/";

const [birthYear, birthMonth, birthDay] = [2001, 2, 4];
const expectedLifeSpanInYears = 70;
const birthDate = new Date(birthYear, birthMonth, birthDay); // year,month,day
const deathDate = new Date(
  birthYear + expectedLifeSpanInYears,
  birthMonth,
  birthDay
);
const today = new Date();
const content = document.getElementById("content");

let ind = 0;
let weekCount = weeksBetween(birthDate, today);
let percentageOfLifeSpent =
  ((today - birthDate) / (deathDate - birthDate)) * 100;
for (let i = 0; i < 90 * 52; i++) {
  const ndiv = document.createElement("div");
  ndiv.classList.add("box");

  ndiv.classList.add(`${ind}`);
  if (ind <= weekCount) ndiv.classList.add("black");
  content.appendChild(ndiv);
  ind++;
}
document.getElementById("percent").textContent =
  percentageOfLifeSpent.toFixed(2) + "%";
// updateQuote();
async function updateQuote() {
  let quote = await getQuote(API_URL);
  quote= quote[0].q;
  document.getElementById("quote").textContent = quote;
}
async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  return data;
}

function weeksBetween(d1, d2) {
  return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}