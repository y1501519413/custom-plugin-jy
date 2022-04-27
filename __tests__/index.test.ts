import sum from '../lib/index'
// import sum from './__fixtures__/sum'
test('adds 2 to equal 3', () => {
  expect(sum(2)).toBe(4)
})
