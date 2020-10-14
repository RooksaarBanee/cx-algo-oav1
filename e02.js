function isAPangram(str) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  
    for (let char of alphabets) {
      if (!str.toLowerCase().includes(char)) {
        return false
      }
    }
  
    return true
  }
  
  console.log(
    isAPangram('Hello Efrei'),
    isAPangram('THE QUICK brown fox jumps over the lazy dog'),
  )
  