describe('mergeSort', function() {
  it('merge() should sort two arrays in ascending order', function() {
    expect(merge([6], [1, 2])).to.equal([1, 2, 6]);
    expect(merge([2, 4], [1, 5])).to.equal([1, 2, 4, 5]);
    expect(merge([30], [0])).to.equal([0, 30]);
    expect(merge([1], [9])).to.equal([1, 9]);
  });
});

