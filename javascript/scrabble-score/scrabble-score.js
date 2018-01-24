const score = (word) => {
  const splitWord = word.toUpperCase().split('');
  const values = [
    {1 :["A", "E", "I", "O", "U", "L","N", "R", "S", "T"]},
    {2: ["D","G"]},
    {3: ["B", "C", "M", "P" ]},
    {4: ["F", "H", "V", "W", "Y" ]},
    {5: ["K"]},
    {8: ["J", "X"]},
    {10: ["Q", "Z"]}
  ]

  const score = 0;
  Object.keys(values).forEach(value => {
    
  })

  if(!word){
    return 0;
  }



}

module.exports = score;
