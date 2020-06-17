const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {
   return this.words.map((letter) => {
        return letter.toUpperCase()
    })
}

module.exports = UpperCaser;
