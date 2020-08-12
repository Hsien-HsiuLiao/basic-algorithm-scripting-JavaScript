function largestOfFour(arr) {
  // You can do this!
  var largest=0;
  for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
    if (largest<arr[i][j]){    //find largest in each sub-array
      largest=arr[i][j];
    }
    }
    arr[i]=largest;
    largest=0;        //reset largest
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
