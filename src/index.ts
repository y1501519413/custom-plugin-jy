export const sum: Sum = nums => {
  return nums.reduce((prev, num) => prev + num, 0)
}

export const quadrature: Sum = nums => {
  return nums.reduce((prev, num) => prev * num, 1)
}
