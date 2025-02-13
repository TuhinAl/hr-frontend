import {ApiResponseCode} from "./ApiResponseCode";

export class ApiResponse<T> {
  data: T;
  apiResponseCode: ApiResponseCode;
  httpStatusCode: number;
  status: boolean;
  message: string;

  public constructor(o?: Partial<ApiResponse<T>>) {
    Object.assign(this, o);
  }
}
