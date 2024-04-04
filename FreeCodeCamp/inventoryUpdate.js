function updateInventory(arr1, arr2) {
  const inventoryMap = new Map();

  // Initialize inventory from arr1
  for (const [quantity, item] of arr1) {
    inventoryMap.set(item, quantity);
  }

  // Update inventory from arr2
  for (const [quantity, item] of arr2) {
    const currentQuantity = inventoryMap.get(item) || 0;
    inventoryMap.set(item, currentQuantity + quantity);
  }

  // Convert the map to a sorted array of entries
  const sortedInventory = [...inventoryMap.entries()].sort(
    (a, b) => a[1] - b[1]
  );

  // Construct the result array
  const result = sortedInventory.map(([item, quantity]) => [quantity, item]);

  return result;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
