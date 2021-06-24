function get1to255() {
    var arr = [];
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}

// var newCount = get1to255();
// console.log(newCount);

function getEven1000() {
    var arr = [];
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            arr.push(i);
        }
    }
    return arr;
}

// var thousand = getEven1000();
// console.log(thousand);

function sumOddTo5000() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++) {
        sum += i;
    }
    return sum;
}

// var fiveThousand = sumOddTo5000();
// console.log(fiveThousand);

function iterateArray(arr) {

    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// var firstArr = iterateArray([1,2,5]);
// var secondArr = iterateArray([-5,2,5,12]);
// console.log(firstArr);
// console.log(secondArr);

function findMax(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// var arrMax = findMax([-3,3,5,7]);
// console.log(arrMax);

function findAverage(arr) {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
        avg = sum / arr.length;
    }
    return avg;
}

// var newAverage = findAverage([1,3,5,7,20]);
// console.log(newAverage);

function arrayOdd() {
    var arr = [];
    for (var i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}

// var newOddArray = arrayOdd();
// console.log(newOddArray);

function greaterThanY(Y, arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Y < arr[i]) {
            sum++;
        }
    }
    return sum;
}

// var checkWork = greaterThanY(3, [1,3,5,7]);
// console.log(checkWork);

function squares(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= arr[i];
    }
    return arr;
}

// var newSquares = squares([1,5,10,-2]);
// console.log(newSquares);

function negatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

// var newArr = negatives([1,5,10,-2]);
// console.log(newArr);

function maxMinAvg(arr) {
    var max = 0;
    var min = 0;
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        if (min > arr[i]) {
            min = arr[i]
        }
        sum += arr[i];
        avg = sum / arr.length;
    }
    arr = [max, min, avg];
    return arr;
}

// var newMaxMinAvg = maxMinAvg([1, 5, 10, -2]);
// console.log(newMaxMinAvg);

function swapValues(arr){
    var first = arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=first;
    return arr;
}

// var swappedValues = swapValues([1,5,10,-2])
// console.log(swappedValues);

function numberToString(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]="Dojo";
        }
    }
    return arr;
}

var testNumberToString = numberToString([-1,-3,2]);
console.log(testNumberToString);