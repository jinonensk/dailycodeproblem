let arr = [1, 2, 3, 4, 0, -2, -4, 0, 2, 3, 4, 5, 6, 7, 8, 9, 11, 123, 123, 123];

const search = (value, j) => {
  return value.indexOf(j) !== -1;
};

const findMissedElem = (value) => {
  let i = 1;
  while(search(value, i)) {
    i++;
  }
  // for (let i = 0; search(value, i); i++){};
  return i;
}

let result = findMissedElem(arr);

console.log(result);