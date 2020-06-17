const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.aToZ = function () {
  alphabetSorted = this.alphabet.sort();
  return alphabetSorted.reduce((accumulator, currentLetter) => {
    return accumulator + currentLetter
  })

}

PangramFinder.prototype.toArray = function(string){
  return string.split('');
}

PangramFinder.prototype.isPangram = function () {
  alphabet = this.aToZ()
  let array = this.toArray()
  const arrayReduced =
  array.filer(function(letter, i){
    return alphabet.indexOf(letter) == i;
  })
  const arrayToZ = arrayReduced.aToZ()
  return arrayToZ === this.alphabet.aToZ()

}

module.exports = PangramFinder;
