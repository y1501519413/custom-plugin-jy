import axios from 'axios'
const sum = async (answer: number) => {
  const { data } = await axios.get('http://10.1.31.113:3865/get_json')
  console.log('data', data)
  return answer * answer
}
console.log('ErrorCode', ErrorCode.Success)

export default sum
