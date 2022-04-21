import axios from 'axios'
import lodash from 'lodash'
const sum = async (answer: number) => {
  const { data } = await axios.get('http://10.1.31.113:3865/get_json')
  console.log('data', data)
  return answer * answer
}
console.log('ErrorCode', ErrorCode.Success)
const user1: User1 = {
  name: 'lilith',
  age: 18,
  birthday: new Date(),
  info1: {
    hobby: 'football',
    address: '123',
    email: 'lilith@gmail.com',
  },
  info2: {
    hobby: 'football',
    address: '123',
  },
  info3: {
    hobby: 'football',
    address: '123',
    email: 'lilith@gmail.com',
  },
  info4: {
    hobby: 'football',
    address: '123',
    email: 'lilith@gmail.com',
  },
  info5: {
    hobby: 'baseball',
    email: 'adam@gmail.com',
  },
}
console.log('lodash', lodash.get(user1, 'info.hobby'))
console.log('user1', user1)

export default sum
