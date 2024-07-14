const express = require("express");
const app = express();

app.get("/greet/:name", (req, res) => {
  res.send(`welcome ${req.params.name}`);
  console.log(req.params.name);
});

app.get("/roll/:number", (req, res) => {
  if (isNaN(req.params.number) == true) {
    res.send(`use a number`);
  }
  if (isNaN(req.params.number) == false) {
    res.send(`you rolled ${req.params.number}`);
  }
});
const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

app.get("/collectibles/:loc", (req, res) => {
  if (collectibles.length >= req.params.loc) {
    res.send(
      `name : ${collectibles[req.params.loc].name} price: ${
        collectibles[req.params.loc].price
      } `
    );
    console.log(collectibles[req.params.loc]);
  } else {
    res.send("This item is not yet in stock. Check back soon!");
  }
});

const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" },
];

app.get("/shoes", (req, res) => {
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  const type = req.query.type;
  let loweredprice = [];
  let upperedprice = [];
  let picked = [];
  let trueArr = [];
  let allArr = [];

  shoes.forEach((shoe) => {});
  console.log(allArr);
  shoes.forEach((shoe) => {
    if (minPrice <= shoe.price) {
      loweredprice.push(shoe);
    }
  });
  shoes.forEach((shoe) => {
    if (maxPrice >= shoe.price) {
      upperedprice.push(shoe);
    }
  });
  shoes.forEach((shoe) => {
    if (type === shoe.type) {
      picked.push(shoe);
    }
  });

  let workingArr = [picked, loweredprice, upperedprice].filter(
    (arr) => arr.length > 0
  );

  trueArr = workingArr.reduce((total, arr) => {
    return total.filter((x) => arr.includes(x));
  }, shoes);
  console.log(trueArr);
  let finalResult = [];

  trueArr.forEach((element) => {
    finalResult.push(
      `name : ${element.name} , price : ${element.price}  , type : ${element.type} <br>`
    );
  });
  res.send(`${finalResult.join("")}`);
});

app.listen(3000, () => {
  console.log("3000 is here");
});
