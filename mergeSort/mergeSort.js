// sort an unsorted array in ascending order
// mergeSort uses O(nlogn) time complexity

// sorts two arrays
var merge = function (left, right) {
  var merged = [], i = 0, j = 0;

  while (merged.length < left.length + right.length) {
    /* 
    ** - must watch for if left[i] or right[j] are undefined as the i and j value is incremented
    ** - can arbitrarily pick the i variable and left array, or the j variable and right array, to see if the i or j variable is past a valid index of the array
    ** - if the j variable is past a valid index or if left[i] < right[j] is true, left[i] will be added to the merged array
    ** -- else if the j variable is not past a valid index or if left[i] < right[j] is false, right[j] will be added to the merged array
    ** - undefined < number === false, undefined > number === false 
    */
    if (j >= right.length || left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  return merged;
};


var mergeSort = function (array) {

  var currentList = [],
    listCollection = [],
    newListCollection = [],
    mergedArray,
    i;

  // create sorted sub arrays
  for (i = 0; i < array.length; i++) {
    // if there is an item in the currentList and if array[i] is less than the last item
    if (currentList.length !== 0 && array[i] < currentList[currentList.length - 1]) {
      // add the currentList to the listCollection
      listCollection.push(currentList);
      // empty the currentList
      currentList = [];
    }
    // otherwise, add to the currentList
    currentList.push(array[i]);
  }
  // add the currentList to the listCollection
  listCollection.push(currentList);

  // iterate through the listCollection and merge together 2 arrays at a time
  // continue this until there is only one array in the listCollection
  while (listCollection.length > 1) {

    // will be merging two arrays at a time, don't want to go above the midpoint of array 
    // because then will merge with undefined value
    for (i = 0; i < Math.floor(listCollection.length / 2); i++) {
      mergedArray = merge(listCollection[i * 2], listCollection[i * 2 + 1]);
      newListCollection.push(mergedArray);
    }

    // after iterating through the listCollection and merging arrays, if there's a leftover array, add array to newListCollection
    if (listCollection.length % 2 !== 0) {
      newListCollection.push(listCollection[listCollection.length - 1]);
    }

    // reset listCollection to the newListCollection
    listCollection = newListCollection;
  }

  // return the single merged array in the listCollection
  return listCollection[0];

};

// var test1 = mergeSort([6, 7, 9, 1, 2, 11, 16]);
// console.log(test1);
var test2 = mergeSort([23, 44, 1, 2, 5, 3, 9, 11]);
console.log(test2);
