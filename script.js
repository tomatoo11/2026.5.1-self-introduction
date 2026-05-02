const hobbies = ["NFT", "ゲーム", "酒"];

const hobbyList = document.querySelector("#hobby-list");

hobbies.forEach((hobby) => {
  const item = document.createElement("li");
  item.textContent = hobby;
  hobbyList.appendChild(item);
});
