function titleCase(str) {
  
  str=str.toLowerCase();  //change to lower case
  var arrayWord=str.split(' ');  //split string into an array of words
  
  var arrayLetter=[0];        //array for splitting word into letters
  
  for(i=0;i<arrayWord.length;i++){
    
    arrayLetter=arrayWord[i].split('');      //split word into letters
    arrayLetter[0]=arrayLetter[0].toUpperCase();  //capitalize first letter
    
    arrayWord[i]=arrayLetter.join('');    //join array back into string
  }
  str=arrayWord.join(' ');
  return str;
}

titleCase("sHoRt AnD sToUt");
