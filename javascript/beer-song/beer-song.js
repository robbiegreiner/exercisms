class BeerSong {
  constructor(){

  }

  sing(first, last){
    let message = "";
    for(let i = first; i >= last; i--){
      message += this.verse(i);
    }
    console.log(message);
    return message
  }

  verse(num){
    if(num >= 2){
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num-1} ${num > 2 ? 'bottles' : 'bottle'} of beer on the wall.\n`;
    } else if (num === 1){
      return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n'
    }

    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'

  }


}

module.exports = BeerSong;
