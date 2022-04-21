type Record1<K extends string | number | symbol, T> = {
  [P in K]: T
}
type Partial1<T> = {
  [P in keyof T]?: T[P]
}
type Required1<T> = {
  [P in keyof T]-?: T[P]
}
type Readonly1<T> = {
  readonly [P in keyof T]: T[P]
}
type Pick1<T, K extends keyof T> = {
  [p in K]: T[K]
}
type keys = 'hobby' | 'address' | 'email'

type Info1 = Record1<keys, string>
type Info2 = Partial1<Info1>
type Info3 = Required1<Info2>
type Info4 = Readonly1<Info1>
type Info5 = Pick1<Info1, 'hobby' | 'email'>

interface User1 {
  name: string
  age: number
  birthday: Date
  info1: Info1
  info2: Info2
  info3: Info3
  info4: Info4
  info5: Info5
}
/**
 * 错误码
 */
declare const enum ErrorCode {
  Success = 200,
  NotFoundError = 404,
  ServerError = 500,
  UnauthorizedError = 401,
  OtherError = -1,
}

declare module 'lodash'
