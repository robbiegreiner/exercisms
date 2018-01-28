const score = (word) => {
  if(!word){
    return 0;
  }


  const splitWord = word.toUpperCase().split('');
  const values = {
    1 :["A", "E", "I", "O", "U", "L","N", "R", "S", "T"],
    2: ["D","G"],
    3: ["B", "C", "M", "P" ],
    4: ["F", "H", "V", "W", "Y" ],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  }

  let score = 0;
  Object.keys(values).forEach(value => {
    splitWord.forEach(letter => {
      if(values[value].includes(letter)){
        score += parseInt(value);
      }
    })
  })

  return score;



}

module.exports = score;
