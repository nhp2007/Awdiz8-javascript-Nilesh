function palindrome(word) {
  for (var i = 0; i <= Math.floor((word.length - 1) / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return "Word is not pallidrome";
    } else {
      return "word is pallindrome";
    }
  }
}

const output = palindrome("matam");
console.log(output);

var array = [1, 3, 4, 6, 1, 8, , 8, 23, 67];

function sumOfOddNumFromArray (nums){
    var addition = 0
    for(var i =0;i<=nums.length-1;i++){
        if(nums[i] % 2 == 1){
            addition = addition +nums[i]
        }
    }
    console.log(addition)
}

sumOfOddNumFromArray(array)
