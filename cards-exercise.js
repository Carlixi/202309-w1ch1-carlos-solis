const cards = () => {
  const sticks = ["Trebol", "Corazones", "Picas", "Diamantes"];
  const numberValue = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "As"];
  let deck = [];
  for (let i of sticks) {
    for (let k of numberValue) {
      const obj = {
        sticks: i,
        numberValue: k,
      };
      deck.push(obj);
    }
  }
  return deck;
  
};
console.log(cards())

const deck = cards();

const handleCard = () => {
  const dom = document;
  const h3Element = dom.querySelector("h3");
  const buttonElement = dom.querySelector("button");
  buttonElement.addEventListener("click", () => {
    const randomCard = deck[Math.floor(Math.random() * deck.length)];
    h3Element.textContent = `Carta Aleatoria: ${randomCard.numberValue} de ${randomCard.sticks}`;
  });
};

handleCard();
