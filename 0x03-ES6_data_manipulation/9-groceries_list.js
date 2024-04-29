// 9-groceries_list.js

export default function groceriesList() {
  const grcyList = [
    { name: 'Apples', qty: 10 },
    { name: 'Tomatoes', qty: 10 },
    { name: 'Pasta', qty: 1 },
    { name: 'Rice', qty: 1 },
    { name: 'Banana', qty: 5 },
  ];
  const grcyMap = new Map();
  for (const item of grcyList) {
    grcyMap.set(item.name, item.qty);
  }
  return grcyMap;
}
