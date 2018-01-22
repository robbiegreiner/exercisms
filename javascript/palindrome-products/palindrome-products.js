class Palindromes {
  constructor(maxMin){
    this.min = maxMin.minFactor || 1;
    this.max = maxMin.maxFactor;
  }

  generate(){
    const nums = [];

    for(let i = this.min; i <= this.max; i++){
      nums.push(i);
    }

    const products = nums.map(num1 => {
      return nums.map(num2 => {
        return num1*num2;
      })
    })

    const list = products.map((array,index) => {
      
    })
  }


}

module.exports = Palindromes;
