/*
Free Code Camp 'Pig-Latin' coding challenge

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/


function translatePigLatin(str) {

    if (/(^[^aeiou])[^aeiou]/.test(str)) {
        return str.slice(2) + str[0] + str[1] + "ay";

    } else if (/^[aeiou]/.test(str)) {
        return str + "way";
    }

    return str.slice(1) + str[0] + "ay";
}

console.log(translatePigLatin("consonant")); // should return "onsonantcay"
console.log(translatePigLatin("california")); // should return "aliforniacay".
console.log(translatePigLatin("paragraphs")); // should return "aragraphspay".
console.log(translatePigLatin("glove")); // should return "oveglay".
console.log(translatePigLatin("algorithm")); // should return "algorithmway".
console.log(translatePigLatin("eight")); //should return "eightway".