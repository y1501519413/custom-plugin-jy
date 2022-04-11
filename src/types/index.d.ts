interface User1 {
  name: string
  age: number
  birthday: Date
}
enum INNER_APP_NAME_ENUM {
  KADA = 'KaDa', // KaDa故事App
}
/**
 * 设备性能分级
 */
enum DEVICE_LEVELS {
  UNKNOWN = -1, // 未知状态
  LOW = 0, // 低端机型
  MIDDLE = 5, // 中端机型
  HIGH = 10, // 高端机型
}
/**
 * 错误码
 */
enum ErrorCode {
  Success = 200,
  NotFoundError = 404,
  ServerError = 500,
  UnauthorizedError = 401,
  OtherError = -1,
}
