class Robot {
  constructor(){
    this.name = this.makeName();
  }

  reset(){
    this.name = this.makeName();
  }

  makeName(){
    let robotName = '';
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < 2; i++){
      robotName += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }

    for(let i = 0; i < 3; i++){
      robotName += Math.floor(Math.random() * 9);
    }

    if(usedNames.includes(robotName)){
      return this.makeName();
    } else {
      usedNames.push(robotName)
      return robotName;
    }

  }

}

const usedNames = [];

module.exports = Robot;
