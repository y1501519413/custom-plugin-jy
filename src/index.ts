import { ErrorCode } from './enums/index'
console.log('ErrorCode', ErrorCode.NotFoundError)
function test<T, U>(arg: T, age: U): T {
  console.log('age', age)
  return arg
}
const user1: User = {
  name: '小白',
  age: 20,
  birthday: new Date(),
}
test(user1, 11)

export default (answer: number) => {
  console.log(`the answer is ${answer * 2}`)
}
