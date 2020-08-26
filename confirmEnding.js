/**
 * @param {string} str
 * @param {string} target
 * @return {boolean}
 */

// compare end of word or phrase with given target
function confirmEnding(str, target) {
  
  return str.substring(str.length,str.length-target.length)===target;

}


confirmEnding("He has to give me a new name", "name");
// should return true
