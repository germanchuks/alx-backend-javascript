// 8-clean_set.js

export default function cleanSet(set, startString) {
  const setList = [];
  if (startString.length !== 0) {
    for (const item of set) {
      if (item.startsWith(startString)) {
        setList.push(item.substring(startString.length));
      }
    }
  }
  return setList.join('-');
}
