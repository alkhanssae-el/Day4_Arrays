let arr = [-3, 5, -1, 8, 0]
let stock = 0
for (let i = 0 ; i < arr.length ; i++){
    
    if ( arr[i] > 0 ){
        stock += 1
    }
}
console.log(stock)