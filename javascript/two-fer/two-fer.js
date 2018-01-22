class TwoFer {
  constructor(name){
    this.name = 'you';
  }

  twoFer(name){
    if(name){
      this.name = name;
    }
    return `One for ${this.name}, one for me.`;
  }
}

module.exports = TwoFer;
