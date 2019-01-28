let arr = [10, 15, 3, 7, 3, 12, 5, 6, 7, 8];
let k = 17;

const func = (data, value) => {
  for (let i = 0; i < data.length; i++) {
    let first = data[i];
    for (let j = i+1; j < data.length; j++) {
      let second = data[j];
      if (first + second === value) {
        console.log('func: ', first, ' + ', second, ' = ', value);  
      };
    };
  };
};
func(arr, k);


let newArr = arr.map((item) => {
  let a = k - item;
  if (arr.indexOf(a) !== -1) {
    return `${item} ' + ' ${a}`
  };
});
console.log(newArr);


let newArr2 = arr.filter((item) => {
  let a = k - item;
  return (arr.indexOf(a) !== -1);
});
console.log(newArr2);