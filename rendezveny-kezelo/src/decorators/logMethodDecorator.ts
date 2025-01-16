// METÓDUS DEKORÁTOR LOGOLÁSA //

export function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalMethod = descriptor.value;
  
    descriptor.value = function (...args: any[]) {
      console.log(`Calling method ${propertyKey} with args: ${JSON.stringify(args)}`);
      const result = originalMethod.apply(this, args);
      console.log(`${propertyKey} method executed`);
      return result;
    };
  }
  