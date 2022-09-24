const items = [
  {
    name: "Ніжна свіжість",
    flowers: "троянди та лілії",
    price: 445,
    image: "./images/bouquet_cart1.png",
  },
  {
    name: "Сорбет",
    flowers: "хризантеми та троянди",
    price: 450,
    image: "./images/bouquet_cart2.png",
  },
  {
    name: "Yellow Song",
    flowers: "соняшники та солідаго",
    price: 455,
    image: "./images/bouquet_cart3.png",
  },
  {
    name: "Персиковий нектар",
    flowers: "лілії та троянди",
    price: 455,
    image: "./images/bouquet_cart4.png",
  },
  {
    name: "Аврора",
    flowers: "лілії та троянди",
    price: 460,
    image: "./images/bouquet_cart5.png",
  },
  {
    name: "Класика кохання",
    flowers: "червоні троянди",
    price: 465,
    image: "./images/bouquet_cart6.png",
  },
];

function createArticle(item) {
  let flowerItem = document.createElement("article");
  let flowerImage = document.createElement("img");
  flowerImage.src = item.image;
  flowerItem.appendChild(flowerImage);
  let flowerName = document.createElement("p");
  flowerName.className = "flowerName";
  let flowerPrice = document.createElement("p");
  flowerPrice.className = "flowerPrice";
  flowerName.innerText = item.name + ":\n" + item.flowers;
  flowerPrice.innerText = item.price + " ₴";
  flowerItem.appendChild(flowerName);
  flowerItem.appendChild(flowerPrice);
  return flowerItem;
}

items.forEach(oneItem => {
    const flowersCont = document.getElementById("flowers");
    console.dir(flowersCont);
    const flowerArticle = createArticle(oneItem);
    flowersCont.appendChild(flowerArticle);
})
