(function () {
  describe('vampireNumbers', function() {
    it('should return true for when fangs are found in product', function() {
      expect(vampireNumbers(6, 21)).to.be.true;
      expect(vampireNumbers(204, 615)).to.be.true
      expect(vampireNumbers(30, -51)).to.be.true
      expect(vampireNumbers(2947050, 8469153)).to.be.true
    });
    it('should return false for when fangs are not found in product', function() {
      expect(vampireNumbers(-246, -510)).to.be.false
      expect(vampireNumbers(2947051, 8469153)).to.be.false
    });
  });

  // describe('mergeSort', function() {
  //   it('merge() should sort two arrays in ascending order', function() {
  //     expect(merge([6], [1, 2])).to.equal([1, 2, 6]);
  //     expect(merge([2, 4], [1, 5])).to.equal([1, 2, 4, 5]);
  //     expect(merge([30], [0])).to.equal([0, 30]);
  //     expect(merge([1], [9])).to.equal([1, 9]);
  //   });
  // });
}());