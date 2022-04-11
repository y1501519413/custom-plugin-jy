import { ErrorCode } from './enums/index'
console.log('ErrorCode', ErrorCode)
console.log('ErrorCode.NotFoundError', ErrorCode.NotFoundError)
const sum = (answer: number | string) => {
  if (typeof answer === 'string') {
    ErrorCode.NotFoundError || undefined
  } else {
    console.log(`the answer is ${answer * 2}`)
  }
}
export default sum
