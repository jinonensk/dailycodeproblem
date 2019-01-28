let input = [1, 2, 3, 4, 5];

// --------- > _ <

const func = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = 1;

    for (let k = 0; k < arr.length; k++) {
      if (i !== k) {
        let currentElement = arr[k];
        elem *= currentElement;
      };
    };
    
    output.push(elem);
  };
  return output;
};

arr = func(input);
console.log(arr);

// --------- > _ <

const buz = (arr) => {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    currentElem = arr[i]; 
    arr.splice(i, 1);
    
    let elem = arr.reduce((res, current) => {
      return res * current;
    }, 1);
    output.push(elem);

    arr.splice(i, 0, currentElem);
  };

  return output;
};

arr2 = buz(input);
console.log(arr2);

// --------- > _ <

// doesn't work if we have 0 in array
const sup = (arr) => {

  let value = arr.reduce((res, current) => {
    return res * current;
  }, 1);

  output = arr.map((item) => {
    return value / item;
  })
  
  return output;
};

arr3 = sup(input);
console.log(arr3);