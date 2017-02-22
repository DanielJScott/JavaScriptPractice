//a set of instructions
function start() {

    var myList = ["hello", "world", "I", "am", "an", "array"];
    var results = [];

    for(var i=0; i < myList.length; i+=1) {

        if ( myList[i].length < 3 ) {
            results.push(myList[i]);
        }
    }

    i = 6

        console.log('Im running!')
    var nums = [1,2,3,4,5];

    var numResults = [];


    for (var j=0; j<nums.length; j++) {
        console.log(typeof nums[j]);
        numResults.push(nums[j] * 2);
    }
}



function squareAll(arr) {
    var results = [];
    for(var x=0; x<arr.length; x+=1) {
        results.push(arr[x] * arr[x]);
    }
    return results;
}


var input = [1,2,3];
var input2 = [12,3,4,555,6,6,6]

//console.log(squareAll(input))
//console.log(squareAll(input2))

//takes any array of numbers, and performs
//a function on that number;

//

function map(integers, func) {
    var newList = [];
    for(var n=0; n<integers.length; n+=1) {
        newList.push(func(integers[n]));
    }
    return newList;

}


var f = function(num) {
    return num + 10;
}

//console.log(map(input, f))


var resultsOfMap = map(input, function(num) {
    return num * 2;
});



var g = input.map(function(num) {
    return num * 10;
});
console.log(g);

var myList = ["hello", "world", "I", "am", "an", "array"];

var shortWords = myList.filter(function(item) {
    if (item.length < 3) {
        return true;
    }
});

function filter(arr, func) { //a check on an item. returns true if item passes check.
    var results = [];
    for (var x=0; x < arr.length; x ++) {
        if (func(arr[x])){
            results.push(arr[x]);
        }
    }
    return results;
}

var cards = []
