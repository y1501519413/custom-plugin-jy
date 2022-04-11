import { ErrorCode } from './enums/index'
console.log('ErrorCode', ErrorCode)
console.log('ErrorCode.NotFoundError', ErrorCode.NotFoundError)

export default (answer: number | string) => {
  if (typeof answer === 'string') {
    ErrorCode.NotFoundError || undefined
  } else {
    console.log(`the answer is ${answer * 2}`)
  }
}
