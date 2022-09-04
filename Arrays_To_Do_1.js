// Push Front

// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function arrayPushFront() {
    arr1 = [5, 7, 2, 3]
    for(var i=arr1.length; i>0; i--){
        arr1[i] = arr1[i-1]
    }
    arr1[0]=8
    console.log(arr1)
}

arrayPushFront();

function arrayPushFront2() {
    arr2 = [99]
    for(var i=arr2.length; i>0; i--){
        arr2[i] = arr2[i-1]
    }
    arr2[0]=7
    console.log(arr2)
}

arrayPushFront2();

// Pop Front

// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function PopFront(arr){
    var temp=arr[0];
    for(var i=1; i<arr.length; i++){
        arr[i-1] = arr[i];
        // console.log(arr[i]);
    }
    arr.pop();
    console.log(arr);
    console.log(temp);
}

popFrontArray1 = [0,5,10,15]
popFrontArray2 = [4,5,7,9]
PopFront([0,5,10,15]);
PopFront(popFrontArray2);

// Insert At

// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(array, index, value) {
    for (var i=array.length; i>index; i--){
        array[i] = array[i-1]
    };
    array[index] = value;
    console.log(array);
};

insertAt([100, 200, 5], 2, 311)
insertAt([9, 33, 7], 1, 42)
insertAt([6], 1, 2348783)