let amountPeople, amountPotatoes, amountOnions, amountEggs;

const ONIONS = 300;
const EGGS = 3;
const POTATOESBYPERSON = 200;

amountPeople = parseInt(prompt(`Ingrese la cantidad de comensales: `));
amountPotatoes = (amountPeople * POTATOESBYPERSON) / 1000;
amountOnions = amountPotatoes * ONIONS;
amountEggs = amountPotatoes * EGGS;

console.log(`La cantidad de ingredientes son los siguientes:
    Papas: ${amountPotatoes} kg
    Cebolla: ${amountOnions} gramos
    Huevo: ${Math.ceil(amountEggs)}
`);

