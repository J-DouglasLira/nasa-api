import { useQuery } from '@tanstack/react-query';
import { IAPI } from '../interfaces/IAPI';
import { IQuerySearch } from '../interfaces/IQuerySearch';
import { api } from '../services/api';

export const getImages = async (q: IQuerySearch) => {
  if (!q.q) return {};
  const response = await api.get('/search', { params: q });
  return response.data;
};

export const useImagesQuery = (q: IQuerySearch) => {
  return useQuery<IAPI.IRootObject>(['search'], () => getImages(q), {
    cacheTime: 60
  });
};
