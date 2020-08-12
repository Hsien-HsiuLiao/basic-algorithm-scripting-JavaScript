function palindrome(str) {
  //remove spaces, non-alphanumeric characters (global flag)
  str=str.toLowerCase().replace(/ /, '').replace(/\W/g, '').replace(/_/g, '');
  var pal=str.split('').reverse().join('');
  //split string into array, reverse and join back into a string
  return str===pal;
}



palindrome("A man, a plan, a canal. Panama");
