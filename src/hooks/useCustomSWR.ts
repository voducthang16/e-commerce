import { IHttpRequest } from '@/models';
import useSWR from 'swr'

type Fetcher<T, Type> = (props: Partial<IHttpRequest<Type>>) => Promise<T>

export const useCustomSWR = <T, Type>(props: IHttpRequest<Type>, fetcher: Fetcher<T, Type>) => {
    return useSWR<T>({ ...props }, fetcher);
}