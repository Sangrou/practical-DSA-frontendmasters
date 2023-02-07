let uniqSort = function(arr){
    let breadcrumbs = {}
    let uniqArr =[]
    for(i=0;i<arr.length;i++){
        if(breadcrumbs[arr[i]]===true){
            uniqArr=uniqArr
        }
        else{
            breadcrumbs[arr[i]] = true
            uniqArr.push(arr[i])
        }
    }
    
    return uniqArr.sort((a,b)=> a-b)
}

let uniqSort = function(arr){
    let uniqArr = [...new Set(arr)]
    return uniqArr.sort((a,b)=> a-b)
}


//Memoisation

// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
const times10 = (n) => (n*10);

console.log('~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~');
console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 
// protip 1: Create a function that checks if the value for n has been calculated before.
// protip 2: If the value for n has not been calculated, calculate and then save the result in the cache object.

const cache = {};

const memoTimes10 = (n) => {
  if(cache[n]){return cache[n]}
  else{
    cache[n] = n *10
    return cache[n]
  }

}

console.log('~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached


//task 3 closure + local cache

const memoisedClosureTimes10=()=>{
    let cache ={}
    return (n)=>{
        if(n in cache){
            console.log('Fetching from cache:', n)
            return cache[n]
        }
        else{
            console.log("Calculating result")
            let result = n*10
            cache[n]=result
            return result
        }
    }
}

times10 = memoisedClosureTimes10()

// try times10(4),times10(8), times10(2)

const memoisedClosureTimesm=(m)=>{
    let cache ={}
    return (n)=>{
        if(n in cache){
            console.log('Fetching from cache:', n)
            return cache[n]
        }
        else{
            console.log("Calculating result")
            let result = m*10
            cache[n]=result
            return result
        }
    }
}

const times8 = memoisedClosureTimes8()
const times7 = memoisedClosureTimes7()

// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

// protip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.
const memoize = (cb) => {
    let cache = {};
      return (n, ...args) => { //[9]
          if (n in cache) {
              console.log('Fetching from cache:', n);
              return cache[n];
          }
          else {
              console.log('Calculating result');
              let result = cb(n, ...args); // cb(9)
              cache[n] = result;
              return result;
          }
      };
  };
  
  // returned function from memoizedAdd
  const memoizedTimes10 = memoize(times10);
  // console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
  console.log('Task 4 calculated value:', memoizedTimes10(9));	// calculated
  console.log('Task 4 cached value:', memoizedTimes10(9));	// cached

  //Recursion

  let reculoop = (n) =>{
      console.log('n===',n)
      if(n<1){return 'reculoop complete'}
      return reculoop(n-1)
  }


// recursive to iterative  

function joinElements(array, joinString){
    let result=""
    for(i=0;i<array.length-1;i++){
        result+=array[i]+joinString
    }
    result+=array[array.length-1]
    return result
}

//recursive factorial function

function rFactorial(n){
    let result=1
    function factCalc(m){
      if(m>1){
      result=result*m
      factCalc(m-1)
      }
    }
    factCalc(n)
    return result  
  }
  
  console.log(rFactorial(10))
///////////////////////////////////////////////////
  const memoize = (fn) => {
    let cache = {};
    return (...args) => {
      let n = args[0];
      if (n in cache) {
        console.log('Fetching from cache', n);
        return cache[n];
      }
      else {
        console.log('Calculating result', n);
        let result = fn(n);
        cache[n] = result;
        return result;
      }
    }
  }
  const factorial = memoize(
    (x) => {
      if (x === 0) {
        return 1;
      }
      else {
        return x * factorial(x - 1);
      }
    }
  );
  console.log(factorial(5)); // calculated
  console.log(factorial(5)); // calculated for 6 and cached for 5

// TASK: Implement linear search.

function linearSearch(list, item) {
  return list.indexOf(item)
}

console.log(linearSearch([2,6,7,90,103], 6))

//binary search

function binarySearch(list, item) {
  var min = 0;
  var max = list.length - 1;
  var guess;

  while (min <= max) {
      guess = Math.floor((min + max) / 2);

      if (list[guess] === item) {
          return guess;
      }
      else {
          if (list[guess] < item) {
              min = guess + 1;
          }
          else {
              max = guess - 1;
          }
      }
  }

  return -1;
}

binarySearch([2,6,7,90,103], 90);

//TASK: Implement bubblesort!
//[9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
function bSort(arr){
  let shelf
  let result=arr
  for(c=0;c<arr.length;c++){
    for(i=0;i<result.length-1;i++){
      if (result[i]>result[i+1]){
        shelf=result[i+1]
        result[i+1]=result[i]
        result[i]=shelf
      }
    }
  }
  return result
}

console.log(bSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]))
console.log(bSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(bSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))


//TASK: Implement bubblesort!
// sample of arrays to sort
var arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
var arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// basic implementation
function bubbleSortBasic(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  for(var i = 0; i < array.length; i++) {
    countOuter++;
    for(var j = 1; j < array.length; j++) {
      countInner++;
      if(array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}
console.log('~~~ ~~~ BASIC ~~~ ~~~');

console.log('\n~~~ basic: arrayRandom ~~~');
bubbleSortBasic(arrayRandom.slice());

console.log('\n~~~ basic: arrayOrdered ~~~');
bubbleSortBasic(arrayOrdered.slice());

console.log('\n~~~ basic: arrayReversed ~~~')
bubbleSortBasic(arrayReversed.slice());

// optimized
function bubbleSort(array) {
  var countOuter = 0;
  var countInner = 0;
  var countSwap = 0;

  var swapped;
  do {
    countOuter++;
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      countInner++;
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);

  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

console.log('\n\n~~~ ~~~ OPTIMIZED ~~~ ~~~');

console.log('\n~~~ optimized: arrayRandom ~~~');
bubbleSort(arrayRandom.slice());

console.log('\n~~~ optimized: arrayOrdered ~~~');
bubbleSort(arrayOrdered.slice());

console.log('\n~~~ optimized: arrayReversed ~~~');
bubbleSort(arrayReversed.slice());

//TASK: implement mergesort!

// Split the array into halves and merge them recursively 
function mergeSort (arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr
  }

  const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
  const left = arr.slice(0, middle) // items on the left side
  const right = arr.slice(middle) // items on the right side
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

// compare the arrays item by item and return the concatenated result
function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
console.log(mergeSort(list)) // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to an amount where the amount is always divisible by 5.


// coin values: 5, 10, 25



// input amount: 40 , output # of coins: 3 (25, 10, 5)

// input amount: 35, output # of coins: 2 (25, 10)

function change(n){
  if(n%5!==0){return 'impossible'}
  let money=n
  let values=[]
  while(money>0){
    if (money>=25){
      money=money-25
      values.push(25)
    }
    else if (money>=10){
      money=money-10
      values.push(10)
    }
    else if (money>=5){
      money=money-5
      values.push(5)
    }
  }
  console.log(values, values.length)
  return values.length
}

change(40)
change(35)

const makeChange = (coins, amount) => {
  coins.sort((a, b) => b - a);
  let coinTotal = 0;
  let i = 0;
  while (amount > 0) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      coinTotal++;
    } else {
      i++;
    }
  }
  return coinTotal;
};

makeChange([5, 10, 25], 50);

// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to the amount, n.
let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChange = (value, i) => {
  recursionCounter++;
  console.log(`${recursionCounter}: calling ${value} at ${i}`)
  if (value === 0) return 0;
  let minCoins;
  coins.forEach((coin, i) => {
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin, i);
      if(minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  return minCoins + 1;
};

makeChange(10);