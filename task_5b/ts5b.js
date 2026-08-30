const clothes = [
  {type: 'shirt', size: 'M', color: 'red'},
  {type: 'pants', size: 'L', color: 'blue'},
  {type: 'dress', size: 'S', color: 'red'},
];

function getRedClothes(clothesToFilter) {
  return clothesToFilter.filter(function (item) {
    return item.color === 'red';
  });
}

const redClothes = getRedClothes(clothes);
console.log(redClothes);
