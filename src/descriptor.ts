/* eslint-disable @typescript-eslint/no-unused-vars */
function ClassDecorator() {
  /* eslint-disable-next-line */
  return function (target: any) {
    console.log('target', target)
    console.log('I am class decorator')
  }
}
function MethodDecorator() {
  return function (
    /* eslint-disable-next-line */
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('target', target)
    console.log('I am method decorator')
  }
}
function Param1Decorator() {
  /* eslint-disable-next-line */
  return function (target: any, methodName: string, paramIndex: number) {
    console.log('target', target)
    console.log('I am parameter1 decorator')
  }
}
function Param2Decorator() {
  /* eslint-disable-next-line */
  return function (target: any, methodName: string, paramIndex: number) {
    console.log('target', target)
    console.log('I am parameter2 decorator')
  }
}
function PropertyDecorator() {
  /* eslint-disable-next-line */
  return function (target: any, propertyName: string) {
    console.log('target', target)
    console.log('I am property decorator')
  }
}

@ClassDecorator()
class Hello {
  @PropertyDecorator()
  greeting: string

  @MethodDecorator()
  greet(@Param1Decorator() p1: string, @Param2Decorator() p2: string) {
    console.log('p1', p1)
    console.log('p2', p2)
  }
}
@ClassDecorator()
class Hello2 {
  @PropertyDecorator()
  greeting: string

  @MethodDecorator()
  greet(@Param1Decorator() p1: string, @Param2Decorator() p2: string) {
    console.log('p1', p1)
    console.log('p2', p2)
  }
}
