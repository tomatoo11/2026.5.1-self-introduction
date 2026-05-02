const hobbies = ["NFT", "ゲーム", "酒"];
const foods = ["お好み焼き", "火鍋", "海鮮"];

const hobbyList = document.querySelector("#hobby-list");
const foodList = document.querySelector("#food-list");

hobbies.forEach((hobby) => {
  const item = document.createElement("li");
  item.textContent = hobby;
  hobbyList.appendChild(item);
});

foods.forEach((food) => {
  const item = document.createElement("li");
  item.textContent = food;
  foodList.appendChild(item);
});
