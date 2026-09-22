let arr = [1, 2, 4, 5]
let elem = 3;
arr.unshift(elem)
let i = 0;
while(i < arr.length-1 && arr[i] > arr[i + 1]){
  let temp = arr[i];
  arr[i] = arr[i+1];
  arr[i+1] = temp;

  i++
}
console.log(arr) 