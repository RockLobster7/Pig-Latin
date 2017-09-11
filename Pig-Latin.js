/*
Free Code Camp 'Pig-Latin' coding challenge

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {

    /^[aeiou]/   // identifies the first letter as a vowel

    /(^[^aeiou])[aeiou]/  // identifies the first letter a consonant followed by vowel

    /^[^aeiou]/  //identifies the first letter a consonant

    /(^[^aeiou])[^aeiou]/  // identifies the first letter as a consonant, followed by a another consonant

    

    return str;
  }
  
  console.log(translatePigLatin("consonant")); // should return "onsonantcay"
  console.log(translatePigLatin("california")); // should return "aliforniacay".
  console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".
  console.log(translatePigLatin("glove")); // should return "oveglay".
  console.log(translatePigLatin("algorithm")); // should return "algorithmway".
  console.log(translatePigLatin("eight")); //should return "eightway".