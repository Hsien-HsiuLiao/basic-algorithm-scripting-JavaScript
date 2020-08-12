function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeat="";
  for(i=0;i<num;i++){
    repeat=repeat+str;
  }
  return repeat;
}

repeatStringNumTimes("abc", 3);
