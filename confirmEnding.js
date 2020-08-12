function confirmEnding(str, target) {
  // compare end of word or phrase with given target
  
  return str.substring(str.length,str.length-target.length)===target;
}

confirmEnding("He has to give me a new name", "name");
