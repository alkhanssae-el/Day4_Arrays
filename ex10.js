let arr = [10, 20, 30, 40]
let arr1 = []

for (let i = 0; i < arr.length ; i++){
   let value = 30
    if (value === arr[i])
   continue
  arr1.push(arr[i])
}

console.log(arr1)