const CARS = [
  { id: "c-class", brand: "מרצדס-בנץ", name: "C-Class", shape: "sedan", preset: "silver" },
  { id: "g-class", brand: "מרצדס-בנץ", name: "G-Class", shape: "gclass", preset: "black" },
  { id: "a6", brand: "אאודי", name: "A6", shape: "sedan", preset: "grey" },
  { id: "q5", brand: "אאודי", name: "Q5", shape: "suv", preset: "white" },
  { id: "series3", brand: "ב.מ.וו", name: "סדרה 3", shape: "sedan", preset: "blue" },
  { id: "x5", brand: "ב.מ.וו", name: "X5", shape: "suv", preset: "black" },
  { id: "p911", brand: "פורשה", name: "911", shape: "coupe", preset: "red" },
  { id: "cayenne", brand: "פורשה", name: "Cayenne", shape: "suv", preset: "grey" },
  { id: "golf", brand: "פולקסווגן", name: "Golf", shape: "hatch", preset: "blue" },
  { id: "passat", brand: "פולקסווגן", name: "Passat", shape: "sedan", preset: "silver" },
];

const COLORS = [
  { id: "black", name: "שחור", hex: "#1a1c1f" },
  { id: "white", name: "לבן", hex: "#f4f1ea" },
  { id: "silver", name: "כסף", hex: "#c5c9d0" },
  { id: "blue", name: "כחול", hex: "#163e66" },
  { id: "red", name: "אדום", hex: "#8e1d24" },
  { id: "green", name: "ירוק", hex: "#1d4a38" },
  { id: "grey", name: "אפור", hex: "#5c6168" },
];

const WHEELS = [
  { id: "classic", name: "קלאסי" },
  { id: "sport", name: "ספורט" },
  { id: "turbine", name: "טורבינה" },
];

const INTERIORS = [
  { id: "black", name: "שחור", hex: "#232323" },
  { id: "beige", name: "בז'", hex: "#d7c4a3" },
  { id: "brown", name: "חום", hex: "#6a4328" },
  { id: "bordeaux", name: "בורדו", hex: "#6e2430" },
];

const SHAPE_LABEL = {
  sedan: "סדאן",
  suv: "רכב שטח",
  coupe: "קופה",
  hatch: "האצ'בק",
  gclass: "שטח",
};

const state = {
  carId: null,
  body: "silver",
  roof: "match",
  wheels: "classic",
  interior: "black",
};

const app = document.querySelector("#app");

function byId(list, id) {
  return list.find((item) => item.id === id);
}

function carById(id) {
  return byId(CARS, id);
}

function glass(uid, d) {
  return `<path d="${d}" fill="url(#glass-${uid})" stroke="rgba(23,32,22,.28)" stroke-width="1.5" stroke-linejoin="round"/>`;
}

function wheel(cx, cy, r, style) {
  const count = style === "sport" ? 12 : 5;
  const width = style === "sport" ? 2 : style === "turbine" ? 9 : 4.5;
  const inner = style === "turbine" ? r * 0.34 : r * 0.16;
  const outer = r - 9;
  let spokes = "";
  for (let i = 0; i < count; i += 1) {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI) / count;
    const x1 = cx + Math.cos(angle) * inner;
    const y1 = cy + Math.sin(angle) * inner;
    const x2 = cx + Math.cos(angle) * outer;
    const y2 = cy + Math.sin(angle) * outer;
    spokes += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#24272c" stroke-width="${width}" stroke-linecap="round"/>`;
  }
  return `
    <g>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#1c1e22"/>
      <circle cx="${cx}" cy="${cy}" r="${r - 3}" fill="#d5d5d5"/>
      <circle cx="${cx}" cy="${cy}" r="${r - 8}" fill="#747980"/>
      ${spokes}
      <circle cx="${cx}" cy="${cy}" r="${Math.max(6, r * 0.2)}" fill="#24272c"/>
      <circle cx="${cx}" cy="${cy}" r="${Math.max(3, r * 0.08)}" fill="#e6e6e6"/>
    </g>`;
}

function wheels(pairs, style) {
  return pairs.map(([x, y, r]) => wheel(x, y, r, style)).join("");
}

function sedan(uid) {
  return `
    <path class="body-paint outline" d="M86 168 C86 146 112 132 150 128 L196 124 C220 120 236 98 258 74 C282 48 318 36 362 36 H424 C470 36 502 54 522 84 L556 122 C592 128 616 142 616 166 V186 C616 202 598 210 576 210 H124 C98 210 86 198 86 182 Z"/>
    ${glass(uid, "M274 116 L296 72 H366 L360 128 H286 Z")}
    ${glass(uid, "M382 72 H452 L478 112 L468 128 H376 Z")}
    <path class="roof-paint" d="M292 74 C314 46 346 38 372 38 H418 C454 38 482 52 500 76 L486 84 C470 62 446 52 414 50 H366 C338 52 312 62 296 82 Z"/>
    <ellipse class="body-paint" cx="112" cy="158" rx="11" ry="7"/>
    <rect x="584" y="150" width="20" height="10" rx="2" fill="#b43333"/>
    <line x1="368" y1="78" x2="360" y2="196" stroke="rgba(23,32,22,.22)" stroke-width="2"/>
    ${wheels([[176, 214, 33], [498, 214, 33]], state.wheels)}`;
}

function suv(uid) {
  return `
    <path class="body-paint outline" d="M78 156 C78 126 118 106 168 100 L214 96 C232 66 266 40 328 36 H462 C514 38 542 60 556 94 L596 102 C632 110 642 132 636 158 V186 C636 202 616 210 594 210 H116 C90 210 78 194 78 172 Z"/>
    ${glass(uid, "M250 108 L272 58 H390 L384 122 H262 Z")}
    ${glass(uid, "M406 58 H500 L522 100 L514 122 H400 Z")}
    <path class="roof-paint" d="M268 62 C290 42 324 36 360 36 H470 C508 38 530 52 542 72 L528 80 H286 Z"/>
    <line x1="300" y1="28" x2="500" y2="28" stroke="#2c3036" stroke-width="4" stroke-linecap="round"/>
    <line x1="318" y1="28" x2="318" y2="36" stroke="#2c3036" stroke-width="3"/>
    <line x1="482" y1="28" x2="482" y2="36" stroke="#2c3036" stroke-width="3"/>
    <ellipse class="body-paint" cx="108" cy="150" rx="12" ry="8"/>
    <rect x="604" y="142" width="20" height="12" rx="2" fill="#b43333"/>
    <line x1="392" y1="64" x2="384" y2="198" stroke="rgba(23,32,22,.22)" stroke-width="2"/>
    ${wheels([[186, 216, 36], [500, 216, 36]], state.wheels)}`;
}

function coupe(uid) {
  return `
    <path class="body-paint outline" d="M48 186 C48 166 84 152 132 150 L268 144 C286 142 304 118 324 92 C348 60 386 46 438 46 C492 46 524 66 544 98 L582 142 C618 150 642 164 638 184 V202 H92 C64 202 48 194 48 184 Z"/>
    ${glass(uid, "M312 112 L336 64 H470 L520 112 L508 132 H324 Z")}
    <path class="roof-paint" d="M330 96 C352 58 392 48 440 48 C488 48 518 64 534 92 L516 108 C498 78 468 66 432 66 C390 66 356 78 338 108 Z"/>
    <ellipse class="body-paint" cx="86" cy="172" rx="12" ry="7"/>
    <rect x="600" y="164" width="22" height="9" rx="2" fill="#b43333"/>
    ${wheels([[168, 210, 30], [498, 210, 30]], state.wheels)}`;
}

function hatch(uid) {
  return `
    <path class="body-paint outline" d="M146 168 C146 144 178 126 220 120 L252 116 C270 90 302 60 352 54 H448 C484 54 504 72 514 100 L528 124 H548 C578 130 592 148 592 168 V196 H184 C160 196 146 184 146 168 Z"/>
    ${glass(uid, "M286 108 L310 68 H470 L506 116 L498 132 H298 Z")}
    <path class="roof-paint" d="M308 72 C332 56 360 52 392 52 H446 C474 52 494 64 504 82 L488 90 H326 Z"/>
    <ellipse class="body-paint" cx="176" cy="158" rx="11" ry="7"/>
    <rect x="558" y="146" width="16" height="12" rx="2" fill="#b43333"/>
    <line x1="392" y1="70" x2="386" y2="186" stroke="rgba(23,32,22,.22)" stroke-width="2"/>
    ${wheels([[210, 208, 31], [470, 208, 31]], state.wheels)}`;
}

function gclass(uid) {
  return `
    <path class="body-paint outline" d="M118 132 H206 V84 H520 Q548 84 552 112 V168 H588 V196 H112 V156 Q112 132 136 132 Z"/>
    ${glass(uid, "M220 100 H336 V156 H210 Z")}
    ${glass(uid, "M350 100 H500 V146 H350 Z")}
    <path class="roof-paint" d="M206 84 H532 V104 H206 Z"/>
    <line x1="240" y1="74" x2="500" y2="74" stroke="#2c3036" stroke-width="5" stroke-linecap="round"/>
    <line x1="260" y1="74" x2="260" y2="84" stroke="#2c3036" stroke-width="3"/>
    <line x1="480" y1="74" x2="480" y2="84" stroke="#2c3036" stroke-width="3"/>
    <rect class="body-paint" x="124" y="142" width="22" height="12" rx="2"/>
    <rect x="566" y="146" width="14" height="16" rx="2" fill="#b43333"/>
    <line x1="344" y1="104" x2="344" y2="188" stroke="rgba(23,32,22,.22)" stroke-width="2"/>
    ${wheels([[188, 204, 40], [478, 204, 40]], state.wheels)}`;
}

const SHAPES = { sedan, suv, coupe, hatch, gclass };

function scene(shape, uid) {
  const body = byId(COLORS, state.body).hex;
  const roof = state.roof === "match" ? body : byId(COLORS, state.roof).hex;
  const interior = byId(INTERIORS, state.interior).hex;
  return `
    <svg viewBox="0 0 640 280" style="--body:${body};--roof:${roof}" aria-hidden="true">
      <defs>
        <linearGradient id="glass-${uid}" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stop-color="#f7fbfd"/>
          <stop offset="1" stop-color="${interior}"/>
        </linearGradient>
      </defs>
      <rect x="0" y="242" width="640" height="38" fill="#e4dccb"/>
      <path d="M36 258 H604" stroke="#cfc6b4" stroke-width="3" stroke-dasharray="18 16" stroke-linecap="round"/>
      ${SHAPES[shape](uid)}
    </svg>`;
}

function seats(hex) {
  return `
    <svg viewBox="0 0 200 86" aria-hidden="true">
      <rect x="8" y="24" width="78" height="54" rx="16" fill="${hex}"/>
      <rect x="20" y="6" width="50" height="30" rx="12" fill="${hex}" stroke="rgba(23,32,22,.25)"/>
      <rect x="18" y="34" width="58" height="32" rx="10" fill="#000" opacity=".12"/>
      <rect x="112" y="24" width="78" height="54" rx="16" fill="${hex}"/>
      <rect x="124" y="6" width="50" height="30" rx="12" fill="${hex}" stroke="rgba(23,32,22,.25)"/>
      <rect x="122" y="34" width="58" height="32" rx="10" fill="#000" opacity=".12"/>
    </svg>`;
}

function colorButtons(attr, current) {
  return COLORS.map((color) => `
    <button type="button" class="swatch" data-${attr}="${color.id}" aria-label="${color.name}" aria-pressed="${current === color.id}" style="--swatch:${color.hex}"></button>
  `).join("");
}

function catalog() {
  const cards = CARS.map((car) => {
    const saved = { body: state.body, roof: state.roof, wheels: state.wheels, interior: state.interior };
    state.body = car.preset;
    state.roof = "match";
    state.wheels = "classic";
    state.interior = "black";
    const art = scene(car.shape, car.id);
    Object.assign(state, saved);
    return `
      <button class="car" type="button" data-car="${car.id}">
        <span class="car-art">${art}</span>
        <span class="car-brand">${car.brand}</span>
        <span class="car-name">${car.name}</span>
        <span class="car-type">${SHAPE_LABEL[car.shape]}</span>
      </button>`;
  }).join("");

  return `
    <p class="kicker">מוריאל</p>
    <header class="top">
      <div>
        <h1>בחירת רכב</h1>
        <p class="hint">עשרה רכבים מתוצרת גרמניה. בוחרים אחד, ואז מעצבים אותו.</p>
      </div>
    </header>
    <section class="cars">${cards}</section>`;
}

function roofName() {
  if (state.roof === "match") return "בצבע המרכב";
  return byId(COLORS, state.roof).name;
}

function designer(car) {
  const spec = `מרכב ${byId(COLORS, state.body).name}, גג ${roofName()}, חישוקים ${byId(WHEELS, state.wheels).name}, ריפוד ${byId(INTERIORS, state.interior).name}.`;
  const wheelChips = WHEELS.map((item) => `
    <button type="button" class="chip" data-wheel="${item.id}" aria-pressed="${state.wheels === item.id}">${item.name}</button>
  `).join("");
  const interiorButtons = INTERIORS.map((item) => `
    <button type="button" class="swatch" data-interior="${item.id}" aria-label="${item.name}" aria-pressed="${state.interior === item.id}" style="--swatch:${item.hex}"></button>
  `).join("");

  return `
    <p class="kicker">מוריאל</p>
    <header class="top">
      <div>
        <h1>${car.brand} ${car.name}</h1>
        <p class="hint">${SHAPE_LABEL[car.shape]}</p>
      </div>
      <button class="ghost" type="button" data-action="catalog">רכב אחר</button>
    </header>
    <section class="studio">
      <div class="stage">
        ${scene(car.shape, "stage")}
        <p class="spec">${spec}</p>
      </div>
      <div class="panel">
        <section class="option">
          <h2>צבע המרכב</h2>
          <div class="swatches">${colorButtons("body", state.body)}</div>
          <p class="chosen">נבחר: ${byId(COLORS, state.body).name}</p>
        </section>
        <section class="option">
          <h2>צבע הגג</h2>
          <div class="swatches">
            <button type="button" class="chip" data-roof="match" aria-pressed="${state.roof === "match"}">כמו המרכב</button>
            ${colorButtons("roof", state.roof)}
          </div>
          <p class="chosen">נבחר: ${roofName()}</p>
        </section>
        <section class="option">
          <h2>חישוקים</h2>
          <div class="chips">${wheelChips}</div>
        </section>
        <section class="option">
          <h2>ריפוד</h2>
          <div class="seats">${seats(byId(INTERIORS, state.interior).hex)}</div>
          <div class="swatches">${interiorButtons}</div>
          <p class="chosen">נבחר: ${byId(INTERIORS, state.interior).name}</p>
        </section>
      </div>
    </section>`;
}

function render() {
  const car = carById(state.carId);
  app.innerHTML = car ? designer(car) : catalog();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-car], [data-body], [data-roof], [data-wheel], [data-interior], [data-action]");
  if (!target) return;
  if (target.dataset.car) {
    const car = carById(target.dataset.car);
    state.carId = car.id;
    state.body = car.preset;
    state.roof = "match";
    state.wheels = "classic";
    state.interior = "black";
  }
  if (target.dataset.body) state.body = target.dataset.body;
  if (target.dataset.roof) state.roof = target.dataset.roof;
  if (target.dataset.wheel) state.wheels = target.dataset.wheel;
  if (target.dataset.interior) state.interior = target.dataset.interior;
  if (target.dataset.action === "catalog") state.carId = null;
  render();
});

render();
