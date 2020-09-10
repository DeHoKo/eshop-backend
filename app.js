const express = require("express");
const app = express();
const port = 3001;

const goods = [
  {
    id: 1,
    category: "Sneakers",
    brand: "Nike",
    model: "AIR ZOOM PEGASUS 37",
    image: "/mock/images/pegasus/pegasus1.jpg",
    price: 339,
    color: "black",
    sizes: [
      { us: 9, ru: 41.5 },
      { us: 9.5, ru: 42 },
      { us: 10, ru: 43 },
    ],
    tags: ["new", "running"],
  },
  {
    id: 2,
    category: "Sneakers",
    brand: "Vans",
    model: "UA ULTRARANGE EXO SE",
    image: "/mock/images/vans/vans1.jpg",
    price: 339,
    color: "",
    sizes: [
      { us: 8, ru: 40.5 },
      { us: 9.5, ru: 42.5 },
      { us: 10, ru: 43 },
    ],
    tags: ["new"],
  },
  {
    id: 3,
    category: "Sneakers",
    brand: "Under Armour",
    model: "UA Lockdown 5",
    image: "/mock/images/ua/ua1.jpg",
    price: 219,
    color: "blue",
    sizes: [
      { us: 7, ru: 39 },
      { us: 9.5, ru: 42 },
    ],
    tags: ["new", "basketball"],
  },
  {
    id: 4,
    category: "Sneakers",
    brand: "adidas",
    model: "STRUTTER",
    image: "/mock/images/adidas/adidas1.jpg",
    price: 184,
    color: "",
    sizes: [
      { us: 9, ru: 42 },
      { us: 9.5, ru: 42.5 },
      { us: 10, ru: 43 },
    ],
    tags: ["new"],
  },
  {
    id: 5,
    category: "Sneakers",
    brand: "Nike",
    model: "ZOOM 2K MEN'S SHOE",
    image: "/mock/images/zoom/zoom1.jpg",
    price: 254,
    color: "",
    sizes: [
      { us: 9, ru: 41.5 },
      { us: 9.5, ru: 42 },
      { us: 10, ru: 43 },
    ],
    tags: [],
  },
];

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/products", (req, res) => {
  res.json(goods);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
