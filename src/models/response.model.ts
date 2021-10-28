export class Response<T = any> {
  message: string;

  code: number;

  data?: T;

  constructor(message: string, code: number, data?: T) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
