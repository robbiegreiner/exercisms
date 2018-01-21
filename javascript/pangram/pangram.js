
class Pangram {
  constructor(sentence){
    this.sentence = sentence.toLowerCase();
    this.alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
  }

  isPangram(){
    if(!this.sentence.length){
      return false;
    }

    const split = this.sentence.split('');

    split.forEach((sentenceLetter,index1) => {
      this.alphabet.forEach((letter,index2) => {
        if(letter === sentenceLetter){
          this.alphabet.splice(index2, 1);
        }
      })
    })

    if(!this.alphabet.length){
      return true;
    }

    console.log(this.alphabet);
    return false;
  }

}

module.exports = Pangram;
