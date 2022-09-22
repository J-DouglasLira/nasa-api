import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

export const getImages = async (
  q: string,
  year_start?: string,
  year_end?: string
) => {
  const response = await api.get("/search", {
    params: {
      q,
      year_start,
      year_end
    }
  });
  return response.data;
};

export const useImagesQuery = (
  q: string,
  year_start?: string,
  year_end?: string
) => {
  return useQuery(["search"], () => getImages(q, year_start, year_end), {
    cacheTime: 60
  });
};
