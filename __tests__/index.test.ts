import { sum, quadrature  } from '../lib/index'
test('sum [2, 3] to equal 5', () => {
  expect(sum([2, 3])).toBe(5)
})
test('quadrature [2, 3] to equal 6', () => {
  expect(quadrature([2, 3])).toBe(6)
})
