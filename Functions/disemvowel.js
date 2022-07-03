function disemvowel(word) {
    let vowel = ["a","u", "e", "i", "o"], news = ""
     
    for (let i=0; i<word.length; i++){
        news =""
      for (let j=0; j<vowel.length; j++){
        if (word[i] !== vowel[j]){
            //word.substr(i, word.length);
            //console.log(word[i])
            news.concat(word[i])
          
        }
      }
    }
     return news;
}
   
   // Uncomment these to check your work!
   console.log(disemvowel('CodeSmith')); // => 'CdSmth'
   console.log(disemvowel('BANANA')); // => 'BNN'
   console.log(disemvowel('hello world')); // => 'hll wrld' 
