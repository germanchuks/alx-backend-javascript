// 8-clean_set.js

export default function cleanSet(set, startString) {
  if (!set || !startString || (typeof startString !== 'string') || !(set instanceof Set)) {
    return '';
  }

  const setList = [];

  for (const item of set.values()) {
    if (typeof item === 'string' && item.startsWith(startString)) {
      setList.push(item.substring(startString.length));
    }
  }
  return setList.join('-');
}
