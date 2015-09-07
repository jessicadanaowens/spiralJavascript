function NumberToString (number) {
  this.number = number;
  this.array = [];
  this.ones = '';
  this.tens = '';
  this.hundreds = '';
  this.thousands = '';
  this.tenThousands = '';
};

NumberToString.prototype.toArray = function toArray () {
  this.array = this.number.toString().split("");
  return this.array
};

NumberToString.prototype.translateDigit = function translateDigit (digit) {
  if(digit == 1) {
    return "one"
  } else if (digit == 2) {
    return "two"
  } else if (digit == 3) {
    return "three"
  } else if (digit == 4) {
    return "four"
  } else if (digit == 5) {
    return "five"
  } else if (digit == 6) {
    return "six"
  } else if (digit == 7) {
    return "seven"
  } else if (digit == 8) {
    return "eight"
  } else if (digit == 9) {
    return "nine"
  } else if (digit == 0) {
    return ""
  }
};

NumberToString.prototype.translateTensPlace = function translateTensPlace (ones, tens) {
  if (tens == 0) {
    return ""
  } else if (tens == 1 && ones != 0) {
    return this.findTeen(ones);
  } else {
    return this.findMultiplesOfTen(tens);
  }
};

NumberToString.prototype.findTeen = function findTeen (ones) {
  if (ones == 1) {
    return "eleven"
  } else if (ones == 2) {
    return "twelve"
  } else if (ones == 3) {
    return "thirteen"
  } else if (ones == 4) {
    return "fourteen"
  } else if (ones == 5) {
    return "fifteen"
  } else if (ones == 6) {
    return "sixteen"
  } else if (ones == 7) {
    return "seventeen"
  } else if (ones == 8) {
    return "eighteen"
  } else if (ones == 9) {
    return "twenty"
  }
};

NumberToString.prototype.findMultiplesOfTen = function findMultiplesOfTen (tens) {
  if (tens == 1) {
    return "ten"
  } else if (tens == 2) {
    return "twenty"
  } else if (tens == 3) {
    return "thirty"
  } else if (tens == 4) {
    return "forty"
  } else if (tens == 5) {
    return "fifty"
  } else if (tens == 6) {
    return "sixty"
  } else if (tens == 7) {
    return "seventy"
  } else if (tens == 8) {
    return "eighty"
  } else if (tens == 9) {
    return "ninety"
  } else if (tens == 0) {
    return ""
  }
};

NumberToString.prototype.translateHundredsPlace = function translateHundredsPlace (digit) {
  if (digit == 0) {
    return '';
  } else {
    return this.translateDigit(digit) + " hundred";
  }
};

NumberToString.prototype.translateThousandsPlace = function translateThousandsPlace (digit) {
  if (digit == 0) {
    return ''
  } else {
    return this.translateDigit(digit) + " thousand"
  }
};

NumberToString.prototype.translateTenThousandsPlace = function translateTenThousandsPlace (ones, tens) {
  if (tens == 0) {
    return ''
  } else if (ones == 0) {
    return this.findMultiplesOfTen(tens) + " thousand"
  } else {
    return this.findTeen(ones) +" thousand"
  }
};

NumberToString.prototype.string = function string () {
  this.translateAll();
  return this.tenThousands + " " + this.thousands + " " + this.hundreds + " " + this.tens + " " + this.ones;
};

NumberToString.prototype.translateAll = function translateAll () {
      var onesDigit = this.array[this.array.length -1];
      this.ones = this.translateDigit(onesDigit);

      var tensDigit = this.array[this.array.length - 2];
      this.tens = this.translateTensPlace(onesDigit, tensDigit);

      var hundredsDigit = this.array[this.array.length - 3];
      this.hundreds = this.translateHundredsPlace(hundredsDigit);

      var thousandsDigit =  this.array[this.array.length - 4];
      this.thousands = this.translateThousandsPlace(thousandsDigit);

      //var tenThousandsDigit = this.array[this.array.length - 5];
      //this.tenThousands = this.translateTenThousandsPlace(thousandsDigit, tenThousandsDigit);

};
