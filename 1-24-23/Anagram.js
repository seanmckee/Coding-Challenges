// Coding Challenge
// 11/24/23
// Function to find if 2 strings are anagrams in O(n)

const anagram = (str1, str2) => {
  if(str1.length !== str2.length){
    return false
  }

  let freq1 = {}
  let freq2 = {}

  for (let val of str1) {
    freq1[val] = (freq1[val] || 0) +1
  }

  for (let val of str2) {
    freq2[val] = (freq2[val] || 0) +1
  }
  
  for (let val in freq1){
    if(!(val in freq2)){
      return false
    }
    if(freq1[val] !== freq2[val]){
      return false
    }
  }
  return true
}