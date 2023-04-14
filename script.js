const content = document.getElementById("content");
let ind = 0;
let weekCount = weeksBetween(new Date(2001, 2, 4), new Date());
for (let i = 0; i < 90*52; i++) {
  const ndiv = document.createElement("div");
  ndiv.classList.add("box");

  ndiv.classList.add(`${ind}`);
  if (ind <= weekCount) ndiv.classList.add("black");
  content.appendChild(ndiv);
  ind++;
}
function weeksBetween(d1, d2) {
  return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}
