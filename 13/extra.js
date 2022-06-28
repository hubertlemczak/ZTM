// Question 1: Clean the room function: given an input of[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For exampleanswer(ArrayFromAbove)should return:[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392, 591]. Bonus: Make it so it organizes strings differently from number types. i.e.[1, "2", "3", 2]should return[[1,2], ["2", "3"]]

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const clean = (arr) => {
  const map = {};
  arr.forEach((num) => {
    let val = map[num];
    if (val > 0) map[num]++;
    else map[num] = 1;
  });
  const newArr = [];
  for (num in map) {
    if (map[num] > 1) {
      const subArr = [];
      for (let i = 1; i <= map[num]; i++) {
        subArr.push(Number(num));
      }
      newArr.push(subArr);
    } else newArr.push(Number(num));
  }
  return newArr;
};
clean(array);

// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example:answer([1,2,3], 4)should return[1,3]

const answer = (arr, target) => {
  const map = {};
  let result;
  arr.forEach((num) => {
    const wantedNum = target - num;
    if (map[wantedNum] === 1) result = [wantedNum, num];
    else map[num] = 1;
  });
  return result;
};
answer([1, 2, 3], 4);
answer([1, 2, 3, 5, 3, 5, 325, 34, 254, 23], 10);

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

const hexDecPairs = new Map([
  ['A', 10],
  ['B', 11],
  ['C', 12],
  ['D', 13],
  ['E', 14],
  ['F', 15],
  ['0', 0],
  ['1', 1],
  ['2', 2],
  ['3', 3],
  ['4', 4],
  ['5', 5],
  ['6', 6],
  ['7', 7],
  ['8', 8],
  ['9', 9],
]);
const decHexPairs = new Map([
  ['10', 'A'],
  ['11', 'B'],
  ['12', 'C'],
  ['13', 'D'],
  ['14', 'E'],
  ['15', 'F'],
  ['0', '0'],
  ['1', '1'],
  ['2', '2'],
  ['3', '3'],
  ['4', '4'],
  ['5', '5'],
  ['6', '6'],
  ['7', '7'],
  ['8', '8'],
  ['9', '9'],
]);

const hexToRgb = (value) => {
  let hex = [value];
  if (value.length === 3) {
    hex = [];
    [...value].forEach((x) => hex.push(x + x));
  }
  hex = hex.join('').split('');

  const red = hexDecPairs.get(hex[0]) * 16 + hexDecPairs.get(hex[1]);
  const green = hexDecPairs.get(hex[2]) * 16 + hexDecPairs.get(hex[3]);
  const blue = hexDecPairs.get(hex[4]) * 16 + hexDecPairs.get(hex[5]);
  return `(${red}, ${green}, ${blue})`;
};

const rgbToHex = (value) => {
  let rgb = value.split(',');
  const rgb1 =
    decHexPairs.get(Math.floor(Number(rgb[0]) / 16).toString()) +
    decHexPairs.get((((Number(rgb[0]) / 16) % 1) * 16).toString());
  const rgb2 =
    decHexPairs.get(Math.floor(Number(rgb[1]) / 16).toString()) +
    decHexPairs.get((((Number(rgb[1]) / 16) % 1) * 16).toString());
  const rgb3 =
    decHexPairs.get(Math.floor(Number(rgb[2]) / 16).toString()) +
    decHexPairs.get((((Number(rgb[2]) / 16) % 1) * 16).toString());
  return `#${rgb1}${rgb2}${rgb3}`;
};
console.log(hexToRgb('DA70D6'));
console.log(rgbToHex('218, 112, 214'));

console.log(hexToRgb('FF0000'));
console.log(hexToRgb('F00'));

console.log(hexToRgb('FFF'));
console.log(rgbToHex('255, 255, 255'));

console.log(rgbToHex('220, 20, 60'));
