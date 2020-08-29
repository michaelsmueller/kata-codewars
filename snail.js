const updatePosition = (position, lower, upper) => {
  switch (position.direction) {
    case 'right':
      if (position.x !== upper.x) position.x ++;
      else {
        position.y ++;
        position.direction = 'down';
        lower.y ++;
      }
      break;
    case 'down':
      if (position.y !== upper.y) position.y ++;
      else {
        position.x --;
        position.direction = 'left';
        upper.y --;
      }
      break;
    case 'left':
      if (position.x !== lower.x) position.x --;
      else {
        position.y --;
        position.direction = 'up';
        upper.x --;
      }
      break;
    case 'up':
      if (position.y !== lower.y) position.y --;
      else {
        position.x ++;
        position.direction = 'right';
        lower.x ++;
      }
      break;
  }
};

const snail = (array) => {
  const { length } = array;
  const lower = { x: 0, y: 0 };
  const upper = { x: length - 1, y: length - 1 };
  const position = { x: 0, y: 0, direction: 'right' };
  const result = [];
  if (array[0].length) {
    for (i = 0; i < Math.pow(length, 2); i++) {
      result.push(array[position.y][position.x]);
      updatePosition(position, lower, upper);
    }  
  }
  return result;
};

const array0 = [[]];
const array1 = [[1]];
const array2 = [[1, 2], [3, 4]];
const array3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array5 = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];
const array6 = [[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]];

console.log(snail(array6));
