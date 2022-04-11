console.log('ErrorCode', ErrorCode)
console.log('ErrorCode.NotFoundError', ErrorCode.NotFoundError)
const sum = (answer: number | string) => {
  if (typeof answer === 'string') {
    ErrorCode.NotFoundError || undefined
  } else {
    console.log(`the answer is ${answer * 2}`)
  }
}
const user: User1 = {
  name: '小白222333',
  age: 20,
  birthday: new Date(),
}
console.log('user', user)

for (const key in DEVICE_LEVELS) {
  console.log('key', key)
}

export default sum
