// 10-update_uniq_items.js

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Array to store keys to update
  const keysToUpdate = [];

  // Iterate through map
  for (const [key, value] of map) {
    if (value === 1) {
      keysToUpdate.push(key);
    }
  }

  // Update the values for required keys
  for (const key of keysToUpdate) {
    map.set(key, 100);
  }
}
