const PLAYERS = [
  { id: "mbappe", name: "Mbappé", club: "ריאל מדריד", pos: "ATT" },
  { id: "vini", name: "Vinícius", club: "ריאל מדריד", pos: "ATT" },
  { id: "bellingham", name: "Bellingham", club: "ריאל מדריד", pos: "MID" },
  { id: "courtois", name: "Courtois", club: "ריאל מדריד", pos: "GK" },
  { id: "militao", name: "Militão", club: "ריאל מדריד", pos: "DEF" },
  { id: "yamal", name: "Lamine Yamal", club: "ברצלונה", pos: "ATT" },
  { id: "pedri", name: "Pedri", club: "ברצלונה", pos: "MID" },
  { id: "kounde", name: "Koundé", club: "ברצלונה", pos: "DEF" },
  { id: "haaland", name: "Haaland", club: "מנצ'סטר סיטי", pos: "ATT" },
  { id: "rodri", name: "Rodri", club: "מנצ'סטר סיטי", pos: "MID" },
  { id: "musiala", name: "Musiala", club: "באיירן", pos: "MID" },
  { id: "davies", name: "Davies", club: "באיירן", pos: "DEF" },
  { id: "neuer", name: "Neuer", club: "באיירן", pos: "GK" },
  { id: "saka", name: "Saka", club: "ארסנל", pos: "ATT" },
  { id: "saliba", name: "Saliba", club: "ארסנל", pos: "DEF" },
  { id: "gloukh", name: "Oscar Gloukh", club: "נבחרת ישראל", pos: "MID" },
  { id: "solomon", name: "Manor Solomon", club: "נבחרת ישראל", pos: "ATT" },
];

const SLOTS = [
  { id: "al", line: "ATT", x: 22, y: 18 },
  { id: "ac", line: "ATT", x: 50, y: 12 },
  { id: "ar", line: "ATT", x: 78, y: 18 },
  { id: "ml", line: "MID", x: 26, y: 36 },
  { id: "mc", line: "MID", x: 50, y: 32 },
  { id: "mr", line: "MID", x: 74, y: 36 },
  { id: "dl", line: "DEF", x: 14, y: 68 },
  { id: "dcl", line: "DEF", x: 37, y: 72 },
  { id: "dcr", line: "DEF", x: 63, y: 72 },
  { id: "dr", line: "DEF", x: 86, y: 68 },
  { id: "gk", line: "GK", x: 50, y: 90 },
];

const state = {
  phase: "mine",
  mine: [],
  friend: [],
  picks: [],
};

const app = document.querySelector("#app");

function playerById(id) {
  return PLAYERS.find((player) => player.id === id);
}

function assign(ids) {
  const buckets = { GK: [], DEF: [], MID: [], ATT: [] };
  ids.forEach((id) => buckets[playerById(id).pos].push(playerById(id)));

  const placed = {};
  const extra = [];
  ["GK", "DEF", "MID", "ATT"].forEach((line) => {
    const slots = SLOTS.filter((slot) => slot.line === line);
    slots.forEach((slot) => {
      if (buckets[line].length) placed[slot.id] = buckets[line].shift();
    });
    extra.push(...buckets[line]);
  });

  SLOTS.filter((slot) => !placed[slot.id]).forEach((slot, index) => {
    if (extra[index]) placed[slot.id] = extra[index];
  });
  return placed;
}

function toggle(id) {
  if (state.phase === "compare") return;
  const index = state.picks.indexOf(id);
  if (index >= 0) {
    state.picks.splice(index, 1);
  } else if (state.picks.length < 11) {
    state.picks.push(id);
  }
  render();
}

function showToFriend() {
  if (state.picks.length !== 11) return;
  if (state.phase === "mine") {
    state.mine = state.picks.slice();
    state.picks = [];
    state.phase = "friend";
  } else if (state.phase === "friend") {
    state.friend = state.picks.slice();
    state.phase = "compare";
  }
  render();
}

function restart() {
  state.phase = "mine";
  state.mine = [];
  state.friend = [];
  state.picks = [];
  render();
}

function pitchMarkup(ids, ready) {
  const placed = ready ? assign(ids) : {};
  const spots = SLOTS.map((slot, index) => {
    const player = placed[slot.id];
    const name = player ? player.name : "";
    const club = player ? player.club : "";
    return `
      <div class="spot" style="left:${slot.x}%;top:${slot.y}%;animation-delay:${index * 30}ms">
        <div class="dot">${player ? player.name.slice(0, 1) : ""}</div>
        <span class="pname">${name}</span>
        <span class="pclub">${club}</span>
      </div>`;
  }).join("");
  return `<div class="pitch${ready ? " ready" : ""}" aria-hidden="true">${spots}</div>`;
}

function renderCompare() {
  app.innerHTML = `
    <header class="top">
      <div>
        <h1>שני הרכבים</h1>
        <p class="hint">כל אחד מגן על הבחירות שלו.</p>
      </div>
      <button class="ghost" id="restart" type="button">מההתחלה</button>
    </header>
    <section class="compare">
      <article class="compare-card">
        <h2>ההרכב שלי</h2>
        ${pitchMarkup(state.mine, true)}
      </article>
      <article class="compare-card">
        <h2>ההרכב של החבר</h2>
        ${pitchMarkup(state.friend, true)}
      </article>
    </section>`;
  document.querySelector("#restart").addEventListener("click", restart);
}

function renderBuild() {
  const ready = state.picks.length === 11;
  const title = state.phase === "friend" ? "תור החבר" : "ההרכב שלי";
  const hint = state.phase === "friend"
    ? "החבר בוחר אחד־עשר שחקנים, ואז משווים."
    : "בוחרים אחד־עשר. הקבוצה עולה על המגרש בבת אחת, ב־4-3-3.";
  const action = state.phase === "friend" ? "השווה" : "הראה לחבר";

  const cards = PLAYERS.map((player) => {
    const selected = state.picks.includes(player.id);
    const locked = !selected && state.picks.length === 11;
    return `
      <button class="player" type="button" data-id="${player.id}" aria-pressed="${selected}" ${locked ? "disabled" : ""}>
        <span class="player-name">${player.name}</span>
        <span class="player-club">${player.club}</span>
      </button>`;
  }).join("");

  app.innerHTML = `
    <header class="top">
      <div>
        <h1>${title}</h1>
        <p class="hint">${hint}</p>
      </div>
      <p class="count">${state.picks.length} / 11</p>
    </header>
    <section class="layout">
      <div class="pitch-wrap">
        ${pitchMarkup(state.picks, ready)}
      </div>
      <div class="roster">
        <h2>השחקנים</h2>
        <div class="players">${cards}</div>
        <div class="actions">
          <button class="primary" id="show" type="button" ${ready ? "" : "disabled"}>${action}</button>
          <button class="ghost" id="restart" type="button">מההתחלה</button>
        </div>
      </div>
    </section>`;

  app.querySelectorAll(".player").forEach((button) => {
    button.addEventListener("click", () => toggle(button.dataset.id));
  });
  document.querySelector("#show").addEventListener("click", showToFriend);
  document.querySelector("#restart").addEventListener("click", restart);
}

function render() {
  if (state.phase === "compare") renderCompare();
  else renderBuild();
}

render();
