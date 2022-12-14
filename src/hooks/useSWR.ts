import {Method} from 'axios';
import useSWR, {SWRConfiguration} from 'swr';

import {api} from '../services/api';

const defaultOptions: SWRConfiguration = {
  revalidateOnFocus: false,
};

export function useFetch<Data = unknown, Error = unknown>(
  path: string,
  method: Method = 'get',
  swrOptions = defaultOptions,
) {
  const data = useSWR<Data, Error>(
    path,
    async (url: string) => {
      const response = await api.request({
        method,
        url,
      });

      return response.data;
    },
    swrOptions,
  );

  return data;
}
