import Axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from "axios";

export default class BaseAPI {
  private static axiosInstance: AxiosInstance | null = null;
  public static getAxios(): AxiosInstance {
    if (this.axiosInstance) {
      return this.axiosInstance;
    } else {
      return Axios.create({
        baseURL: "http://devgen.iptime.org:3000",
        timeout: 10000,
        headers: {},
      });
    }
  }

  protected static get(url: string, option?: AxiosRequestConfig): AxiosPromise {
    return this.getAxios().get(url, option);
  }

  protected static post(url: string, data?: any, option?: AxiosRequestConfig): AxiosPromise {
    return this.getAxios().post(url, data, option);
  }

  protected static put(url: string, data?: any, option?: AxiosRequestConfig): AxiosPromise {
    return this.getAxios().put(url, data, option);
  }

  protected static delete(url: string, option?: AxiosRequestConfig): AxiosPromise {
    return this.getAxios().post(url, option);
  }
}
