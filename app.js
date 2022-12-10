/*
Quick Question #1
What does the following code return?

new Set([1,1,2,2,3,4])
*/

//{1, 2, 3, 4}

/*
Quick Question #2
What does the following code return?

[...new Set("referee")].join("")
*/

//console says ref, and I'll agree with the dev console
//ok I get it, sets are unique, only returns ref, then joins it together
//

/*
Quick Questions #3
What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
*/

//this is two different arrays keys with the same data and one has true and one has false as a value
// 0 : {array(3) => true}
// 1 : {array(3) => false}

/*
hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
*/

const hasDuplicate = arr => new Set(arr).size !== arr.length

//I would not have been able to get this answer without looking it up due to
//no fucking practice with the syntax

/*
vowelCount
Write a function called vowelCount
 which accepts a string
  and returns a map
   where the keys are numbers
    and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
*/

function isVowel(char){
    return "aeiou".includes(char);
  }

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let strLower = char.toLowerCase();
        if(isVowel(strLower)){
            if(vowelMap.has(strLower)){
                vowelMap.set(strLower, vowelMap.get(strLower) +1);
            } else{
                vowelMap.set(strLower, 1);
            }
        }
    }
    
    return vowelMap;
   
} 
