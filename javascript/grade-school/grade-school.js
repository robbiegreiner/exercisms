class School {
  constructor(){
    this.students = {};
  }

  add(name, grade){
    if(!this.students[grade]){
      Object.assign(this.students, { [grade]: [name]});
    } else {
      this.students[grade].push(name);
    }
  }

  grade(n){
    if(this.students[n]){
      return this.students[n].sort();
    }

    return [];
  }

  sort(){
    Object.keys(this.students).forEach(grade => {
      this.students[grade].sort();
    })
  }

  roster(){
    this.sort();
    return this.students;
  }
}

module.exports = School;
