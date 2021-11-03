var arr = [-10, -5, 1, 2, 3, 4, 5, -8, 0, -7];
var minusIndex = 0;
var minNum = 0;
var endNum = arr[1];

for(i=0; i<arr.length; i++) {
    if(i % 2 != 0) {
        minusIndex = i;
    }
    if (i == 1) {
        break;
    } else if(arr[1] >= arr[minusIndex]) {
        minNum = arr[minusIndex];
    }

}
console.log(minNum);