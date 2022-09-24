/* eslint-disable class-methods-use-this */
import axios,{ AxiosError,AxiosInstance,AxiosResponse } from 'axios';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export default abstract class ApiService  {
  protected readonly api: AxiosInstance;

  protected readonly baseURL: string;

  public constructor(headers: {} = {}, baseURL: string = '') {
    this.baseURL = baseURL;

    this.api = axios.create({
      baseURL: this.baseURL,
      headers
    });

    this.initializeResponseInterceptorApi();
  }

  private initializeResponseInterceptorApi(): void {
    this.api.interceptors.response.use(this.handleResponseApi, this.handleErrorApi);
  }

  private handleResponseApi({ data }: AxiosResponse): AxiosResponse {
    return data;
  }

  private handleErrorApi<T>(error: Error | AxiosError<T>): Error | AxiosError<T> {
    throw error;
  }
}
