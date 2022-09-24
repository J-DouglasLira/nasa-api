import { ISearch } from '../interfaces/INasaAPI';
import ApiService from './ApiService';

export default class NasaService extends ApiService {
  constructor() {
    super({}, process.env.REACT_APP_HOST);
  }

  public async search(textSearch: string): Promise<ISearch> {
    return await this.api.get('/search', { params: { q: textSearch } });
  }
}
