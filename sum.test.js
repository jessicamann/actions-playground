const { sum } = require('./sum')

it('can add two numbers', () => {
    expect(sum(1, 1)).toEqual(2)
})
