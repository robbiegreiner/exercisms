class Bob {
  constructor(){

  }

  hey(statement){
    if(statement.toUpperCase() === statement){
      return 'Whoa, chill out!';
    }

    if(statement.includes('?')){
      return 'Sure.';
    }

    if(statement.includes('!')){
      return 'Whatever.';
    }

    return('Whatever.')
  }
}

module.exports = Bob;
