import { AxiosRequestConfig } from 'axios';
import { ISearch } from '../interfaces/INasaAPI';
import { IQuerySearch } from '../interfaces/IQuerySearch';
import ApiService from './ApiService';

export default class NasaService extends ApiService {
  constructor() {
    super({}, process.env.REACT_APP_HOST);
  }

  public async search(q: IQuerySearch, config?: AxiosRequestConfig<any>): Promise<ISearch> {
    return await this.api.get('/search', {
      params: {
        q
      }
    });
  }
}
