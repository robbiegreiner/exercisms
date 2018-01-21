class Year {
  constructor(yearInput){
    this.yearInput = yearInput;
  }

  isLeap(){
    let leap = false;
    if((this.year % 4) === 0){
      leap = true;
    }

    if((this.year % 100) === 0 && (this.year % 400) === 0){
      leap = true;
    }

    if((this.year % 100) === 0 && (this.year % 400) !== 0){
      leap = false;
    }

    return leap;
  }

}

module.exports = Year;


// ```plain
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// ```
