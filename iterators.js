// create a namespace for our iterator functions
var Iterators = (function() {
  return {
    each: function (arr, action) {
      for (var i = 0; i < arr.length; i++) 
      {
        action(arr[i]);
    }
        return arr;
    },

    map: function(arr, action) {
      var result_array = [];
        Iterators.each( arr, function(number){result_array.push(action(number))
          ;} 
          );
        return result_array;
    },

    reduce: function(arr, base, action) {
      // as a BONUS, implement reduce
      // btw, reduce is an alias for inject :)
      var copy;
      if (base === null || base === undefined) {
        {base = arr[0];
          copy = arr.slice(1);}
        }
      Iterators.each(arr,function(x) {
         base = action(base,x);
      });



      // this function should take an array, a 
      // base value, and a combination action
      // function -- for example add and perform
      // the action on each successive element
    }
  };
})();

// declare the array
var arr = [1,2,3];

// should output
// 1
// 2
// 3
console.log("results of applying Iterators.each to arr:");
Iterators.each(arr, function (number) {
  console.log(number);
});

// should output
// => [1,2,3]
console.log("applying Iterators.each to arr should return the array:");
console.log(Iterators.each(arr, function (number) {
}));

// should output
// [2, 4, 6]
console.log("results of applying Iterators.map to arr:");
console.log(
  Iterators.map(arr, function (number) {
    return number * 2;
  })
);

// should output
// false to indicate that the array returned
// by map is a different object than the array
// that had been passed in
console.log("arr and the array returned by map are identical:");
console.log(
  arr === Iterators.map(arr, function (number) {
    return number * 2;
  })
);

// should output arr's contents to indicate that map did not 
// modify the original array's contents
console.log("arr's contents:");
console.log(arr);

// BONUS: should output the sum
console.log("result of applying Iterators.reduce to arr with a sum function:");
console.log(
  Iterators.reduce(arr, 0, function (a, b) {
    return a + b;
  })
);