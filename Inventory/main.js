const items = [
  { id: 1, name: 'Potion', quantity: 5, active: true },
  { id: 2, name: 'Sword', quantity: 0, active: false },
  { id: 3, name: 'Shield', quantity: 2, active: true },
  { id: 4, name: 'Bow', quantity: null, active: true }
];

// Retreve Valid items through quantity and active
const getValidItems = items =>
  items.filter(item =>
    Number.isFinite(item.id) &&
    item.id > 0 &&

    typeof item.name === 'string' &&
    item.name.trim() !== '' &&

    Number.isFinite(item.quantity) &&
    item.quantity >= 0 &&

    typeof item.active === 'boolean'
  );

// Filter for active items
const getActiveItems = items => (items.filter(item => (item.active)))

// Filter list of out of stock items
const getOutOfStockItems = items =>{return items
    .filter(item => item.quantity === 0)
    .map(item => item.name)}

// The total quantity of all items together
const getTotalQuantity = items =>{ 
    let total = 0; 
    items.forEach(item => { total += item.quantity})
return total;}

// Summary of inventory
const summary = items => {
  const validItemsList = getValidItems(items);
  const totalItemsQuantity = getTotalQuantity(validItemsList);
  const totalItems = items.length;
  const validItems = validItemsList.length;
  const activeItems = getActiveItems(validItemsList).length;
  const outOfStock = getOutOfStockItems(validItemsList).length;

  console.log(`Total items: ${totalItems}\n`);
  console.log(`Valid items: ${validItems}\n`);
  console.log(`Active items: ${activeItems}\n`);
  console.log(`Out of stock: ${outOfStock}\n`);
  console.log(`Total quantity in stock: ${totalItemsQuantity}\n`);
  console.log(`Out of stock items: ${getOutOfStockItems(validItemsList).join(', ')}\n`);

};




summary(items)