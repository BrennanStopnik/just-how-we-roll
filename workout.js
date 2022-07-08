let sixes = [1,2,3,4,5,6];

function medianD6(arr){
    let sorted = arr.sort(function(a,b){
        return a - b;
    })
    let mid = sorted.length / 2;
    if (sorted.length % 2 == 0){
        return (sorted[mid - 1] + sorted[mid]) / 2;
    }
    return sorted[middle];
}

console.log(medianD6(sixes));