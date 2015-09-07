//describe("#NumberToString", function () {
//
//  beforeEach(function () {
//    var number = 1432;
//    numberToString = new NumberToString(number);
//  });
//
//  it("turns a number into an array", function () {
//    var result = numberToString.toArray();
//    expect(result).toEqual(["1", "4", "3", "2"])
//  });
//
//  it("translates a single digit from 1 to 9 into a word", function () {
//    var digit = "1";
//    var result = numberToString.translateDigit(digit);
//    expect(result).toEqual('one')
//  });
//
//  it("find the teens", function () {
//    var ones, tens;
//
//    ones = 1;
//    tens = 1;
//
//    result = numberToString.findTeen(ones);
//    expect(result).toEqual("eleven");
//  });
//
//  it("finds multiples of ten", function () {
//    ones = 0;
//    tens = 2;
//
//    result = numberToString.findMultiplesOfTen(tens);
//
//    expect(result).toEqual("twenty");
//  });
//
//  it("finds the hundreds place", function () {
//    digit = "1";
//
//    result = numberToString.translateHundredsPlace(digit);
//    expect(result).toEqual("one hundred");
//  });
//
//  it("finds the thousands place", function () {
//    digit = "1";
//
//    result = numberToString.translateThousandsPlace(digit);
//    expect(result).toEqual("one thousand");
//  });
//
//  it("translates all of the numbers into words", function () {
//    numberToString.array = ["4", "1", "2", "3"];
//
//    numberToString.translateAll();
//    expect(numberToString.ones).toEqual('three');
//    expect(numberToString.tens).toEqual('twenty');
//    expect(numberToString.hundreds).toEqual('one hundred');
//    expect(numberToString.thousands).toEqual('four thousand');
//  });
//
//  it("connects the words into a string", function () {
//    numberToString.array = ["4", "1", "1", "3"];
//
//    spyOn(numberToString, "translateAll").and.callThrough();
//
//    var result = numberToString.string();
//    expect(result).toEqual("four thousand one hundred twenty three")
//  })
//});