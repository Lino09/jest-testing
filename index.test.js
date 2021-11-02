const string = require('./index');

describe(('length of array'), () => {

  test('Determine length of given string', () => {
    expect(string.stringLength('1, 2')).toBe(4);
  });
  
  test('String out of max range', () => {
    expect(()=> {
      string.stringLength('1, 2, 3, 4, 5, 6');
    }).toThrow(Error('out of range'));
  });
  test('String out of min range', () => {
    expect(()=> {
      string.stringLength('');
    }).toThrow(Error('out of range'));
  });
})

describe(('String reverser'), () => {
test('reverse string', () => {
  expect(string.reverseString('1234567890')).toBe('0987654321');
})

test('useless check palindrome', () => {
  expect(string.reverseString('radar')).toBe('radar');
})
})

const simpleCalculator = new string.SimpleCalculator()
describe('Calculations', ()=> {
  describe('Sums', () => {

    test('sum positives',() =>{
      expect(simpleCalculator.add(1, 2)).toBe(3);
    })
    test('sum negatives',() =>{
      expect(simpleCalculator.add(-11, 27)).toBe(16);
    })
    test('sum mixed',() =>{
      expect(simpleCalculator.add(-732, 425)).toBe(-307);
    })
  })

  describe('Substractions', () => {
    test('substaction positives',() =>{
      expect(simpleCalculator.less(17, 8)).toBe(9);
    })
    test('substaction negatives',() =>{
      expect(simpleCalculator.less(-17, -8)).toBe(-9);
    })
    test('substaction mixed',() =>{
      expect(simpleCalculator.less(17, -8)).toBe(25);
    })
  })

  describe('Divisions', () => {
    test('Division inexact',() => {
      expect(simpleCalculator.divide(17, 8)).toBe(17/8);
    })
    
    test('Division exact',() => {
      expect(simpleCalculator.divide(18, 6)).toBe(3);
    })
    
    test('Division Mixed positives/negatives',() => {
      expect(simpleCalculator.divide(17, -8)).toBe(17/(-8));
    })
  })

  describe('Multiply', () => {
    test('Multiply positive',() => {
      expect(simpleCalculator.multiply(17, 8)).toBe(17*8);
    })
    
    test('Multiply negatives',() => {
      expect(simpleCalculator.multiply(-18, -6)).toBe(108);
    })
    
    test('Multiply mixed',() => {
      expect(simpleCalculator.multiply(17, -8)).toBe(-136);
    })
  })
    
})

describe('capitalize', () => {
  test('Just Text/Begin with Text',() => {
    expect(string.capitalizer('some Text')).toBe('Some Text');
  })
})