// Statements (if, for while)
// Variables (const, let, var)
// function
// data structures ([], {})

const chanel = {
    model: 'chanel-1',
    color: '#f00',
    price: {
        usd: 1000,
        eur: 1200,
        huf: 300000
    },
    sizes: [32, 34, 36],
    // method - olyan mint egy fuggveny de nem az
    getPrice: function (code) {
        // this; minden functionnak van egy rejtett this valtozo this === chanel
        return this.price[code] // itt nem kell chanel.price[code] eleg a this
    } 
};

chanel['price']['eur']
chanel.getPrice('usd')

chanel.price.eur // 1200 - az euros ara .-rol . ra érdemes haladni


////


// Statements (if, for while)
// Variables (const, let, var)
// function
// data structures ([], {})

const chanel = {
    model: 'chanel-1',
    color: '#f00',
    price: {
        usd: 1000,
        eur: 1200,
        huf: 300000
    },
    sizes: [32, 34, 36],
    getLocalPrice: function (code) {
        return this.price[code] 
}
};

// 1. render the stock
// 2. basket
// 3. order, summarize
// 4. search in the shop

// EZT A HAROM FUNKCIÓT SZERETNÉNK

// letrehozhatok vazfugfgvenyeket

function getStockForShop() {
    // 1. make a request to a backend
    // 2. place the response to a variable
    // 3. return with the stock
}

function renderStock(stock) { // parameterkent kap egy stockot es azt fogja renderelni - honnan lesz meg a stock? kulon fuggveny
    // 1. clean the screen
    // 2. render the items from stock
    // legyen bemenete es kimenete
}

function initInterActions() {
    // event listeners 
}

function filterStockByModell(stock, model) { // ezekbol előállít egy uj listat
    // 1. filter the stock by model
    // 2. return with the stock
}

function filterStockByColor(stock, color) {
    // 1. filter the stock by a color
    // 2. return with the new list
}

function addItemToBasket(item) {
    // 1. add the item variable to the basket
}

// first func to run. Entry point
function main() {
    
}

main();


//// innentol mar nem csinaltam hanem neztem 

