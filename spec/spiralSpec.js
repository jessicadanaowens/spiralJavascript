describe("Spiral", function () {
  beforeEach(function () {
    var startingNumber = 0;
    var endingNumber = 24;
    spiral = new Spiral(startingNumber, endingNumber);

  });

  describe("buildRightEdgeOnCenter", function () {
    it("builds the right edge", function () {
      spiral.buildRightEdgeOnCenter();
      expect(spiral.structure).toEqual([[0, 1]]);
    })
  });

  describe("buildBottomEdge", function () {
    it("builds the bottom edge", function () {
      spiral.buildRightEdgeOnCenter();
      spiral.buildBottomEdge();
      expect(spiral.structure).toEqual([[0, 1], [4, 3, 2]])
    })
  });

  describe("buildLeftEdgeOnCenter", function () {
    it("builds the left edge", function () {
      spiral.buildRightEdgeOnCenter();
      spiral.buildBottomEdge();
      spiral.buildLeftEdgeOnUpperArrays();
      expect(spiral.structure).toEqual([[5, 0, 1], [4, 3, 2]])
    })
  });

  describe("buildTopEdge", function () {
    it("builds the top edge", function () {
      spiral.buildRightEdgeOnCenter();
      spiral.buildBottomEdge();
      spiral.buildLeftEdgeOnUpperArrays();
      spiral.buildTopEdge();
      expect(spiral.structure).toEqual([[6, 7, 8, 9], [5, 0, 1], [4, 3, 2]])
    })
  });

  describe("buildRightEdgeOnLowerArrays", function () {
    it("builds the right edge on the lower arrays", function () {
      spiral.buildRightEdgeOnCenter();
      spiral.buildBottomEdge();
      spiral.buildLeftEdgeOnUpperArrays();
      spiral.buildTopEdge();
      spiral.buildRightEdgeOnLowerArrays();
      expect(spiral.structure).toEqual([[6, 7, 8, 9], [5, 0, 1, 10], [4, 3, 2, 11]])
    })
  });

  describe("buildLeftEdgeOnUpperArrays", function () {
    it("builds the left edge on the upper arrays", function () {
      spiral.buildRightEdgeOnCenter();
      spiral.buildBottomEdge();
      spiral.buildLeftEdgeOnUpperArrays();
      spiral.buildTopEdge();
      spiral.buildRightEdgeOnLowerArrays();
      spiral.buildBottomEdge();
      spiral.buildLeftEdgeOnUpperArrays();
      expect(spiral.structure).toEqual([[19, 6, 7, 8, 9], [18, 5, 0, 1, 10], [17, 4, 3, 2, 11], [16, 15, 14, 13, 12]])
    })
  });
});




