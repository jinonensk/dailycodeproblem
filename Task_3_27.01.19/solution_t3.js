// doesn't work with not simple Obj, Array in Array etc

let arr = [0, 1, 2, 3, {f:1, s:2, t:3}, buz = (a) => {console.log(a)}, null, undefined, NaN, true, 'false']

let obj = {
  first: 1,
  second: 2,
  third: 3
};

// let test1 = 123
// let test2 = "true"

// let Numbers = 123;

// console.log(String(obj));
// console.log(String(Numbers));

const serialize = (value) => {
  let str = '';
  if (Array.isArray(value)) {

    for (let item of value) {
      // --------- try to find way handle Array in Array
      // if (Array.isArray(item)) {
      //   let elem = serialize(item);
      //   console.log(elem)
      //   str += `[${elem}];`;
      // } else 

      if (typeof(item) !== 'object' || item === null) {
      // console.log(typeof(item));
      str += `${typeof(item)};${String(item)};`;
      } else {
        let objStr = 'object;{';
        for (let p in item) {
          objStr += `${p}:${item[p]},`;
        };
        str += `${objStr}};`;
      };  
    };
  } else if (typeof(value) === 'object' || value !== null) {
    let objStr = '!object;{';
      for (let p in value) {
        objStr += `${p}:${value[p]},`;
        
    };
    str += `${objStr}};`;
  };
  // console.log(str);
  return str;
};

let testStringArr = serialize(arr);
let testStringObj = serialize(obj);

const deserialize = (value) => {

  if (value.indexOf("!object") !== 0) {
    let outputArr = [];
    let arr = value.split(';');
    let j = 0;
    // console.log(arr);
    for (let i = 0; i < arr.length; i += 2) {
      let type = arr[i];
      // console.log(type);
      let item = arr[i+1];
      let elem;
      switch(type) {
      case ('object'):
        if (item !== 'null') {
          // console.log(item);
          elem = eval('(' + item + ')');
        } else {
          elem = null;
        }
        break
      case ('number'):
        elem = Number(item);
        break
      case ('function'):
        elem = eval(item);
        break
      case ('boolean'):
        elem = Boolean(item);
        break
      case ('string'):
        elem = item;
        break
      case ('underfined'):
        elem = item;
        break
      };
      outputArr[j] = elem;
      j++;
    };
    outputArr.splice(-1,1);
    return outputArr;

  } else {
    let arr = value.split(';');
    return elem = eval('(' + arr[1] + ')');
  }
};

let newArr = deserialize(testStringArr);
let newObj = deserialize(testStringObj)


// console.log(arr);
// console.log(testStringArr);
// console.log(newArr);

console.log(obj);
console.log(testStringObj);
console.log(newObj);