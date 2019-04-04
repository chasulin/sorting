describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array with a single item', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles an array with two items', function() {
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
  });

  it('handles an array with multiple items', function() {
    expect(bubbleSort([11, 4, 7, 1])).toEqual([1, 4, 7, 11]);
  });

  it('handles an array with negative numbers', function() {
    expect(bubbleSort([11, 4, -15, -1])).toEqual([-15, -1, 4, 11]);
  });
});
