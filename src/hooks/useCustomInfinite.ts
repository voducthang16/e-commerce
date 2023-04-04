import { IHttpRequest } from "@/models";
import { Arguments } from "swr/_internal";
import useSWRInfinite, { SWRInfiniteConfiguration } from "swr/infinite";

type Fetcher<T, Type> = (props: Partial<IHttpRequest<Type>>) => Promise<T>

type GetKey<T> = (pageIndex: number, previousPageData: T) => Arguments

type NewData<T> = T[]

export const useCustomInfinite = <T, Type>(getKey: GetKey<T>, fetcher: Fetcher<T, Type>, config?: SWRInfiniteConfiguration) => {
    const { data } = useSWRInfinite<T>(getKey, fetcher, config)
    // console.log(data?.concat(...data))
    console.log(data)
    const newData = data ? data.concat(...data) : [];
    return {
        ...useSWRInfinite<T>(getKey, fetcher, config),
        newData: newData,
    }
}