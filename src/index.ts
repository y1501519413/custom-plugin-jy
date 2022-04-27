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
  info6: {
    address: 'baseball',
  },
  info7: {
    hobby: 'baseball',
    email: 'adam@gmail.com',
  },
}
console.log('lodash', lodash.get(user1, 'info1.hobby'))
console.log('user1', user1)
type A = {
  name: string
  age: number
}
type B = {
  hobby: string
}
type C = A | B

type Foo = Exclude1<C, A>
// 相当于
const str: Foo = {
  hobby: '',
}
type User2 = Omit1<
  User1,
  'info1' | 'info2' | 'info3' | 'info4' | 'info5' | 'info6' | 'info7'
>
const user2: User2 = {
  name: 'lilith',
  age: 18,
  birthday: new Date(),
}

console.log('user2', user2)
console.log('str', str)

enum BookSubject {
  // 养成好习惯
  GOOD_HABIT = 'good-habit',
  // 塑造好品格
  BUILD_PERSONALITY = 'build-personality',
  // 提升想象力
  IMAGINE = 'imagine',
}
type GuideBoardItem = {
  type: BookSubject // 绘本主题
  title: string // 标题
  imageUrl: string // 图片
}
export const BOOK_SUBJECT_GUIDE_BOARD: Record<BookSubject, GuideBoardItem> = {
  [BookSubject.GOOD_HABIT]: {
    type: BookSubject.GOOD_HABIT,
    title: '养成好习惯',
    imageUrl:
      '//cdn.hhdd.com/frontend/as/i/9deaf8b2-a987-51b4-8f2d-94f84d954ad3.png',
  },
  [BookSubject.BUILD_PERSONALITY]: {
    type: BookSubject.BUILD_PERSONALITY,
    title: '塑造好品格',
    imageUrl:
      '//cdn.hhdd.com/frontend/as/i/9deaf8b2-a987-51b4-8f2d-94f84d954ad3.png',
  },
  [BookSubject.IMAGINE]: {
    type: BookSubject.IMAGINE,
    title: '提升想象力',
    imageUrl:
      '//cdn.hhdd.com/frontend/as/i/9deaf8b2-a987-51b4-8f2d-94f84d954ad3.png',
  },
}
export default sum
