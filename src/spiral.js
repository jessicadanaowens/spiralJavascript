var Spiral = function (startingNumber, endingNumber) {
  this.startingNumber = startingNumber;
  this.endingNumber = endingNumber;
  this.countToEndingNumber = 0;
  this.structure = [[this.startingNumber]];
  this.yIndexCenter = 0;
  this.xIndexCenter = 0;
  this.maxLength = 2;
  this.endReached = this.countToEndingNumber == this.endingNumber
};

Spiral.prototype.build = function build () {
    this.buildRightEdgeOnCenter();
    while(this.countToEndingNumber < this.endingNumber) {
      this.buildBottomEdge();
      this.buildLeftEdgeOnUpperArrays();
      this.buildTopEdge();
      this.buildRightEdgeOnLowerArrays();
    }
  console.log(this.structure)
};

Spiral.prototype.buildRightEdgeOnCenter = function buildRightEdgeOnCenter () {
  this.countToEndingNumber += 1;
  this.structure[this.yIndexCenter][this.maxLength - 1] = this.countToEndingNumber;
};

Spiral.prototype.buildRightEdgeOnLowerArrays = function buildRightEdgeOnLowerArrays () {
  for(var i = 1; i < this.structure.length; i++) {
    this.countToEndingNumber +=1;

    if(this.countToEndingNumber <= this.endingNumber) {
      this.structure[i].push(this.countToEndingNumber)
    }
  }
};

Spiral.prototype.buildBottomEdge = function buildBottomEdge () {
  this.maxLength += 1;
  var bottomEdge = [];

  for(var i= this.maxLength - 1; i > -1; i--) {
    this.countToEndingNumber +=1;
    if(this.countToEndingNumber <= this.endingNumber) {
      bottomEdge[i] = this.countToEndingNumber
    }
  }

  this.structure.push(bottomEdge);
};

Spiral.prototype.buildLeftEdgeOnUpperArrays = function buildLeftEdgeOnUpperArrays () {
  for(var i = this.structure.length - 2; i > -1; i--) {
    this.countToEndingNumber +=1;
    if(this.countToEndingNumber <= this.endingNumber) {
      this.structure[i].unshift(this.countToEndingNumber);
    }
  }
};

Spiral.prototype.buildTopEdge = function buildTopEdge () {
  this.maxLength += 1;
  var topEdge = [];
  this.yIndexCenter += 1;

  for(var i = 0; i < this.maxLength; i++) {
    this.countToEndingNumber +=1;
    if(this.countToEndingNumber <= this.endingNumber) {
      topEdge[i] = this.countToEndingNumber
    }
  }


  this.structure.unshift(topEdge);
};

var spiral = new Spiral(0, 24).build();