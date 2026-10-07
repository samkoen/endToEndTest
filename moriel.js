const CARS = [
  {
    id: "c-class",
    brand: "מרצדס-בנץ",
    name: "C-Class",
    shape: "sedan",
    preset: "silver",
    credit: "Alexander Migl",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_W206_IMG_6380.jpg",
    model: "21393b5f402543848db2f26f95a2e9fa",
    modelCredit: "ceron_alex",
    modelLicense: "CC BY-NC",
    modelLicenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
  },
  {
    id: "g-class",
    brand: "מרצדס-בנץ",
    name: "G-Class",
    shape: "gclass",
    preset: "grey",
    credit: "Julian Herzog",
    license: "CC BY 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Mercedes-Benz_W463_G_350_BlueTEC_01.jpg",
    model: "52296f1a65d54a85a2ed7cb67604e554",
    modelCredit: "Outlaw GamesT",
    modelLicense: "CC BY-NC",
    modelLicenseUrl: "https://creativecommons.org/licenses/by-nc/4.0/",
  },
  {
    id: "a6",
    brand: "אאודי",
    name: "A6",
    shape: "sedan",
    preset: "white",
    roof: "black",
    credit: "Alexander-93",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Audi_A6_C9_IAA_2025_DSC_1920.jpg",
    model: "04925f2cea0c4090a58d13d88e3f16d9",
    modelCredit: "Mona x Supercars",
    modelLicense: "CC BY",
    modelLicenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
  {
    id: "q5",
    brand: "אאודי",
    name: "Q5",
    shape: "suv",
    preset: "silver",
    credit: "c M 93",
    license: "CC BY-SA 3.0 de",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/",
    source: "https://commons.wikimedia.org/wiki/File:Audi_Q5_2.0_TDI_quattro_S_line_(GU)_%E2%80%93_f_13102025.jpg",
    model: "60fea790b21c48bcb379be2a6d2c1f81",
    modelCredit: "Ddiaz Design",
    modelLicense: "CC BY-NC-SA",
    modelLicenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  {
    id: "series3",
    brand: "ב.מ.וו",
    name: "סדרה 3",
    shape: "sedan",
    preset: "grey",
    credit: "Alexander-93",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:BMW_G20_(2022)_IMG_7316_(2).jpg",
    model: "82534fdddd7e46e4bdb202d6c1d3c0e7",
    modelCredit: "solid3DDD",
    modelLicense: "CC BY",
    modelLicenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
  {
    id: "x5",
    brand: "ב.מ.וו",
    name: "X5",
    shape: "suv",
    preset: "blue",
    credit: "Vauxford",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:2019_BMW_X5_M50d_Automatic_3.0.jpg",
    model: "b453ba441ff04f9290955d09c3d46b9f",
    modelCredit: "Ddiaz Design",
    modelLicense: "CC BY-NC-SA",
    modelLicenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  {
    id: "p911",
    brand: "פורשה",
    name: "911",
    shape: "coupe",
    preset: "green",
    credit: "Matti Blume",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:Porsche_911_No_1000000,_70_Years_Porsche_Sports_Car,_Berlin_(1X7A3888).jpg",
    model: "d01b254483794de3819786d93e0e1ebf",
    modelCredit: "Lionsharp Studios",
    modelLicense: "CC BY-SA",
    modelLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    id: "cayenne",
    brand: "פורשה",
    name: "Cayenne",
    shape: "suv",
    preset: "white",
    roof: "black",
    credit: "c M 93",
    license: "CC BY-SA 3.0 de",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/",
    source: "https://commons.wikimedia.org/wiki/File:Porsche_Cayenne_(III,_Facelift)_%E2%80%93_f_01012025.jpg",
    model: "74fbea5a4dfc4197839fdd2bf654369a",
    modelCredit: "Ddiaz Design",
    modelLicense: "CC BY-NC-SA",
    modelLicenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  {
    id: "golf",
    brand: "פולקסווגן",
    name: "Golf",
    shape: "hatch",
    preset: "silver",
    credit: "Vauxford",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    source: "https://commons.wikimedia.org/wiki/File:2020_Volkswagen_Golf_Style_1.5_Front.jpg",
    model: "e87d7c0f8937481db236529beb5ecab7",
    modelCredit: "Mona x Supercars",
    modelLicense: "CC BY",
    modelLicenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  },
  {
    id: "passat",
    brand: "פולקסווגן",
    name: "Passat",
    shape: "wagon",
    preset: "white",
    credit: "c M 93",
    license: "CC BY-SA 3.0 de",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/de/",
    source: "https://commons.wikimedia.org/wiki/File:VW_Passat_Variant_Elegance_(B9)_%E2%80%93_f_18052025.jpg",
    model: "29e59c86cd6049cdbeb97680e7db3a36",
    modelCredit: "Ddiaz Design",
    modelLicense: "CC BY-NC-SA",
    modelLicenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
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
  wagon: "סטיישן",
};

const state = {
  carId: null,
  view: "photo",
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

function photo(car, hero) {
  const alt = hero ? `${car.brand} ${car.name}` : "";
  return `<img class="${hero ? "hero" : "thumb"}" src="cars/${car.id}.jpg" alt="${alt}">`;
}

function colorButtons(attr, current) {
  return COLORS.map((color) => `
    <button type="button" class="swatch" data-${attr}="${color.id}" aria-label="${color.name}" aria-pressed="${current === color.id}" style="--swatch:${color.hex}"></button>
  `).join("");
}

function catalog() {
  const cards = CARS.map((car) => `
    <button class="car" type="button" data-car="${car.id}">
      ${photo(car, false)}
      <span class="car-brand">${car.brand}</span>
      <span class="car-name">${car.name}</span>
      <span class="car-type">${SHAPE_LABEL[car.shape]}</span>
      <span class="credit">${car.credit}</span>
    </button>
  `).join("");

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

function specText() {
  return `מרכב ${byId(COLORS, state.body).name}, גג ${roofName()}, חישוקים ${byId(WHEELS, state.wheels).name}, ריפוד ${byId(INTERIORS, state.interior).name}.`;
}

function stage(car) {
  const photoMode = state.view !== "model";
  const visual = photoMode
    ? photo(car, true)
    : `<div class="viewer"><iframe title="תלת־ממד ${car.brand} ${car.name}" src="https://sketchfab.com/models/${car.model}/embed?autostart=1&preload=1&ui_infos=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_vr=0&ui_annotations=0&dnt=1" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe></div>
       <p class="hint">גררו כדי לסובב. גלגלו או צבטו כדי להתקרב.</p>`;
  const credit = photoMode
    ? `צילום: <a href="${car.source}">${car.credit}</a>, <a href="${car.licenseUrl}">${car.license}</a>`
    : `מודל: <a href="https://sketchfab.com/models/${car.model}">${car.modelCredit}</a>, <a href="${car.modelLicenseUrl}">${car.modelLicense}</a>`;
  return `
    <div class="view-switch">
      <button type="button" class="chip" data-view="photo" aria-pressed="${photoMode}">תמונה</button>
      <button type="button" class="chip" data-view="model" aria-pressed="${!photoMode}">תלת־ממד</button>
    </div>
    ${visual}
    <p class="spec">${specText()}</p>
    <p class="credit">${credit}</p>`;
}

function designer(car) {
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
        ${stage(car)}
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

function syncChoices() {
  const spec = document.querySelector(".spec");
  if (!spec || !state.carId) return false;
  spec.textContent = specText();
  const pairs = [
    ["[data-body]", "body", state.body],
    ["[data-roof]", "roof", state.roof],
    ["[data-wheel]", "wheel", state.wheels],
    ["[data-interior]", "interior", state.interior],
  ];
  pairs.forEach(([selector, attr, current]) => {
    document.querySelectorAll(selector).forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset[attr] === current));
    });
  });
  const chosen = document.querySelectorAll(".chosen");
  if (chosen[0]) chosen[0].textContent = `נבחר: ${byId(COLORS, state.body).name}`;
  if (chosen[1]) chosen[1].textContent = `נבחר: ${roofName()}`;
  if (chosen[2]) chosen[2].textContent = `נבחר: ${byId(INTERIORS, state.interior).name}`;
  return true;
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-car], [data-body], [data-roof], [data-wheel], [data-interior], [data-action], [data-view]");
  if (!target) return;
  const structural = Boolean(target.dataset.car || target.dataset.action || target.dataset.view);
  if (target.dataset.car) {
    const car = carById(target.dataset.car);
    state.carId = car.id;
    state.body = car.preset;
    state.roof = car.roof || "match";
    state.wheels = "classic";
    state.interior = "black";
  }
  if (target.dataset.body) state.body = target.dataset.body;
  if (target.dataset.roof) state.roof = target.dataset.roof;
  if (target.dataset.wheel) state.wheels = target.dataset.wheel;
  if (target.dataset.interior) state.interior = target.dataset.interior;
  if (target.dataset.view) state.view = target.dataset.view;
  if (target.dataset.action === "catalog") state.carId = null;
  if (structural || !syncChoices()) render();
});

render();
