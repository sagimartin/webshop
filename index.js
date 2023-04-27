// Statements (if, for, while)
// Variables (const, let, var)
// functions
// data structures ([], {})

// example object for demo
const chanel = {
  model: "chanel-1",
  price: {
    usd: 1000,
    eur: 1200,
    huf: 300000,
  },
  color: "#f00",
  sizes: [32, 34, 36],

  // method
  getLocalPrice: function (code) {
    return this.price[code];
  },
};

const basket = [];

// 1. render the stock
// 2. basket
// 3. order, summarize
// 4. search in the shop

// First fucntion to run. Entry point
function main() {
  const stock = getStockForShop();
  renderStock(stock);

  // look after it (Set)
  const colors = new Set();
  const models = new Set();

  for (let i = 0; i < stock.length; i++) {
    colors.add(stock[i].color);
    models.add(stock[i].model);
  }

  // look after it (Array.from)
  renderFilters(Array.from(colors), Array.from(models));
  initInteractions(stock);
}

function getStock() {
  const stock = [
    {
      name: "chanel-1",
      model: "chanel",
      price: {
        usd: 1000,
        eur: 1200,
        huf: 300000,
      },
      color: "#f00",
      sizes: [32, 34, 36],
    },
    {
      name: "chanel-2",
      model: "chanel",
      price: {
        usd: 900,
        eur: 1000,
        huf: 250000,
      },
      color: "#0f0",
      sizes: [32, 34],
    },
    {
      name: "prada-1",
      model: "prada",
      price: {
        usd: 5000,
        eur: 6000,
        huf: 1000000,
      },
      color: "#00f",
      sizes: [32, 34, 36],
    },
    {
      name: "prada-2",
      model: "prada",
      price: {
        usd: 500,
        eur: 600,
        huf: 50000,
      },
      color: "#fe2",
      sizes: [32, 34, 36],
    },
    {
      name: "lanvin-1",
      model: "lanvin",
      price: {
        usd: 800,
        eur: 900,
        huf: 80000,
      },
      color: "#f00",
      sizes: [32, 36],
    },
  ];

  return stock;
}

function getStockForShop() {
  // 1. make a request to a backend
  // 2. place the response to a variable
  const stock = getStock();
  // manipulate?

  // 3. return with the stock
  return stock;
}

function renderStock(stock) {
  const screen = document.getElementById("screen");

  // 1. clear the screen
  screen.innerHTML = "";

  // 2. render the items from stock
  for (let i = 0; i < stock.length; i++) {
    const div = renderOneItem(stock[i]);
    screen.append(div);
  }
}

function renderOneItem(item) {
  // generate a div for the item
  const div = document.createElement("div");
  const name = document.createElement("h1");
  const price = document.createElement("div");
  const color = document.createElement("div");
  const sizes = document.createElement("table");
  const order = document.createElement("button");

  name.innerText = item.name;
  price.innerText = item.price.huf + " HUF";
  color.style.backgroundColor = item.color;
  color.className = "color";

  order.innerText = "Add to order";
  order.className = "order-button";
  order.itemName = item.name;

  const tr = document.createElement("tr");
  for (let i = 0; i < item.sizes.length; i++) {
    const td = document.createElement("td");
    td.innerText = item.sizes[i];
    tr.append(td);
  }
  sizes.append(tr);
  div.append(name, price, order, color, sizes);

  return div;
}

function renderFilters(colors, models) {
  // colors: ['#f00', '#0f0', ..]
  // models: ['chanel', 'prada']

  //1. clear the filters
  const filters = document.getElementById("filter");
  filters.innerHTML = "";

  //2. genedare filter elements
  //3. return the filters

  const div = document.createElement("div");
  const modelSelector = document.createElement("select");
  const colorSelector = document.createElement("div");

  colorSelector.id = "color-selector";
  modelSelector.id = "model-selector";

  const def = document.createElement("option");
  def.innerText = "--Select a model--";
  def.value = "";

  modelSelector.append(def);
  for (let i = 0; i < models.length; i++) {
    const option = document.createElement("option");
    option.innerText = models[i];
    option.value = models[i];
    modelSelector.append(option);
  }

  for (let i = 0; i < colors.length; i++) {
    const color = document.createElement("div");
    color.style.backgroundColor = colors[i];
    color.className = "color";
    colorSelector.append(color);
  }

  div.append(colorSelector, modelSelector);
  filters.append(div);
}

function renderBasket() {
  // 1. clear the basket element
  const basketEl = document.getElementById("basket");
  basket.innerHTML = "";

  // 2. render the new basket
  for (let i = 0; i < basket.length; i++) {
    const div = document.createElement("div");
    div.innerText = basket[i].name;
    basketEl.append(div);
  }
}

function initInteractions(stock) {
  const orderButtons = Array.from(document.querySelectorAll(".order-button"));
  const colorSelectors = document.querySelectorAll("#color-selector .color");
  const modelSelector = document.querySelector("#model-selector");

  for (let i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener("click", function (event) {
      // anonymus function expression
      const name = event.target.itemName;
      const item = findItemByName(stock, name);
      addItemToBasket(item);
      renderBasket();
    });
  }
}

function findItemByName(stock, name) {
  // look after (Array.prototye.find)
  return stock.find(function (item) {
    return item.name === name;
  });
}

function filterStockByModel(stock, model) {
  // 1. filter the stock by a model
  // 2. return with the new list
}

function filterStockByColor(stock, color) {
  // 1. filter the stock by a color
  // 2. return with the new list
}

function addItemToBasket(item) {
  // 1. add the item variable to a basket
  // 2. request to backend for store the order
  basket.push(item);
}

main();
