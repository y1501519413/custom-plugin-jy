interface User1 {
  name: string
  age: number
  birthday: Date
}
/**
 * 错误码
 */
const enum ErrorCode {
  Success = 200,
  NotFoundError = 404,
  ServerError = 500,
  UnauthorizedError = 401,
  OtherError = -1,
}
