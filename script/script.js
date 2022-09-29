fetch("https://run.mocky.io/v3/539e6e32-094f-4db9-a465-d3ba23b38fd7")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((oneItem) => {
      const flowersCont = document.getElementById("flowers");
      const flowerArticle = createArticle(oneItem);
      flowersCont.appendChild(flowerArticle);
    });
  });

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
