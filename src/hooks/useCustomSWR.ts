import { IHttpRequest } from '@/models';
import useSWR, { SWRResponse } from 'swr'


export const useCustomSWR = <T>(props: IHttpRequest, fetcher: Promise<T>) => {
    const fetcherFn = () => fetcher
    return useSWR<T>({ ...props }, fetcherFn);
}